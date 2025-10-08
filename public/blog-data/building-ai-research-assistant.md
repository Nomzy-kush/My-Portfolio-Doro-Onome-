![](https://miro.medium.com/v2/resize:fit:1400/1*9bSjsHQFZD_giSLHWx7PKQ.png)

Large Language Models (LLMs) are impressive, but on their own they're limited. The real magic happens when you connect them to tools and give them memory. That's exactly what I set out to do in this project. I created a research assistant. It takes any query and searches the web and Wikipedia. It organizes the results into a clear format. You can save everything to a file to look at later.

In this article, I will show you each step. We will set up the environment, use Hugging Face models, add LangChain tools, and save structured outputs. By the end, you'll have a working AI research agent running on your laptop.

You can access the full working code on [Github](https://github.com/Nomzy-kush/AI-Research-Agent/).

### Setup and Requirements
----------------------

First, make sure you have Python 3.9+ installed on your machine. Then create a virtual environment:
```
python3 -m venv venv\
source venv/bin/activate
```

Install the dependencies:
```
pip install python-dotenv huggingface_hub langchain langchain-community ddgs pydantic
```
## Basic Code Setup
----------------

Keep the project modular by splitting it into two files:

-   `main.py` → the agent logic
-   `tools.py` → external tools (DuckDuckGo, Wikipedia, Save-to-File)

Your project structure should look like this:

```
ai-agent/\
│── main.py              # Agent logic\
│── tools.py             # External tools (DuckDuckGo, Wikipedia, Save-to-File)\
│── .env                 # Stores your Hugging Face API key\
│── requirements.txt     # Python dependencies
```

### Using Hugging Face
------------------

We'll use Hugging Face's `InferenceClient` to query the Mistral-7B-Instruct model.

### Getting Your API Key

1.  Create an account on [Hugging Face](https://huggingface.co/).
2.  Go to Settings > Access Tokens.
3.  Generate a new token with read permissions.
4.  Save it in a `.env` file:

```
HUGGINGFACE_API_KEY=your_api_key_here
```


## Basic LLM Functionality
-----------------------

To test the setup, add this snippet to `main.py`:

Before we add tools and structure, let's confirm that the Hugging Face client works. A quick test makes sure your API key is loaded correctly and the model responds. Add this snippet to `main.py`:

```
from dotenv import load_dotenv\
from huggingface_hub import InferenceClient\
import os

load_dotenv()\
HUGGINGFACE_API_KEY = os.getenv("HUGGINGFACE_API_KEY")

client = InferenceClient(\
    model="mistralai/Mistral-7B-Instruct-v0.2",\
    token=HUGGINGFACE_API_KEY\
)

response = client.chat_completion(\
    messages=[{"role": "user", "content": "What is the meaning of life?"}],\
    max_tokens=50\
)

print(response.choices[0].message.content)
```

This code above loads your Hugging Face API key from the `.env` file and connects to the Mistral-7B-Instruct model. It sends a simple prompt: "*What is the meaning of life?*" Then, it prints the model's response to the console. You can test it in your terminal with python main.py

Press enter or click to view image in full size

![Basic LLM Functionality](https://miro.medium.com/v2/resize:fit:1400/1*zz3UXicTMwpPrEbnWMPlZg.gif)


## Adding Pre-Built and Custom Tools
---------------------------------

To make the agent useful, we connect it to external tools. We start with DuckDuckGo for web search, Wikipedia for quick facts, and a custom tool to save results to a file.

Here's the `tools.py` file

```
from langchain.tools import Tool\
from datetime import datetime\
from duckduckgo_search import DDGS

# DuckDuckGo Search Tool\
def duckduckgo_search(query: str):\
    """Search DuckDuckGo and return text snippets."""\
    results = []\
    try:\
        with DDGS() as ddgs:\
            for r in ddgs.text(query, max_results=3):\
                results.append(r.get("body", ""))\
    except Exception as e:\
        return f" DuckDuckGo search failed: {e}"

    return "\n".join(results)

search_tool = Tool(\
    name="search",\
    func=duckduckgo_search,\
    description="Search the web for information using DuckDuckGo"\
)

# Wikipedia Tool\
from langchain_community.utilities import WikipediaAPIWrapper\
from langchain_community.tools import WikipediaQueryRun

api_wrapper = WikipediaAPIWrapper(top_k_results=1, doc_content_chars_max=100)\
wiki_tool = WikipediaQueryRun(api_wrapper=api_wrapper)

# Custom Save-to-File Tool\
def save_to_txt(data: str, filename: str = "research_output.txt"):\
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")\
    formatted_text = f"--- Research Output ---\nTimestamp: {timestamp}\n\n{data}\n\n"

    with open(filename, "a", encoding="utf-8") as f:\
        f.write(formatted_text)

    return f" Data successfully saved to {filename}"

save_tool = Tool(\
    name="save_text_to_file",\
    func=save_to_txt,\
    description="Save structured research data to a text file"\
)
```

The code above creates three tools for the agent. One tool searches the web using DuckDuckGo. Another tool pulls quick facts from Wikipedia. The last tool saves research results into a text file. Together, these tools help the agent find information and keep a record.

## Prompt Templates
----------------

We need a prompt that guides the LLM to return structured JSON. Here's a simplified version:

```
def build_prompt(query, search_results, wiki_results, format_instructions, chat_history):\
    history_text = ""\
    for role, content in chat_history:\
        history_text += f"{role}: {content}\n"

    return f"""\
You are a research assistant that will help generate a research paper.

Conversation history so far:\
{history_text}

Current user query: {query}

Search results from DuckDuckGo:\
{search_results}

Wikipedia results:\
{wiki_results}

Answer the query and wrap the output ONLY in this JSON format.

FORMAT:\
{format_instructions}\
"""
```

This function above builds the final prompt we send to the LLM. It combines the chat history, the user's current query, DuckDuckGo results, and Wikipedia results into one clear instruction. At the end, it reminds the model to return the answer in a strict JSON format.


![LLM Response in JSON Format](https://miro.medium.com/v2/resize:fit:1400/1*BaUNxVlVGUvbltskkzvl4A.png)


## Creating the AI Agent
---------------------

Now that we have tools and structured prompts, let's bring everything together. This part is the core of the project , the AI agent itself.

The agent works in a loop. You enter a query, it runs a search with DuckDuckGo, checks Wikipedia, summarizes the results into structured JSON, and saves everything to a file. Then it updates the chat history so the next query can build on past context.

This means you don't just run a single search. You can re-query, refine your question, or ask follow-ups, and the agent will remember what has already been discussed.

Here's the code:

```
def run_agent(query: str, chat_history: list):\
    # Step 1: Use DuckDuckGo tool\
    search_results = search_tool.run(query)

    # Step 2: Use Wikipedia tool\
    wiki_results = wiki_tool.run(query)

    # Step 3: JSON schema instructions\
    format_instructions = """\
    {{\
        "topic": "string - topic of research",\
        "summary": "string - a summary of the findings",\
        "sources": ["list of sources"],\
        "tools_used": ["list of tools used e.g. DuckDuckGo, Wikipedia, Save-to-File"]\
    }}\
    """

    prompt = build_prompt(query, search_results, wiki_results, format_instructions, chat_history)

    print("\n--- Sending prompt to Hugging Face ---")\
    print(prompt)

    try:\
        response = client.chat_completion(\
            messages=[{"role": "user", "content": prompt}],\
            max_tokens=500\
        )

        raw_output = response.choices[0].message.content\
        print("\n--- Raw LLM Output ---")\
        print(raw_output)

        try:\
            structured = ResearchResponse.model_validate_json(raw_output)\
            print("\n--- Structured Response ---")\
            print(structured)

            # Step 4: Save structured response to file\
            save_status = save_tool.func(structured.model_dump_json(indent=2))\
            print("\n--- Save Status ---")\
            print(save_status)

            # Save to history\
            chat_history.append(("User", query))\
            chat_history.append(("Assistant", structured.summary))

            return structured

        except ValidationError as ve:\
            print("\n Validation failed, raw response returned instead.")\
            print(ve)

            # Still save response into history\
            chat_history.append(("User", query))\
            chat_history.append(("Assistant", raw_output))

            return raw_output

    except Exception as e:\
        print(f"\n Error running agent: {e}")\
        return None

Finally, here's the main loop that lets you interact with the agent from your terminal:

# ----------------------------\
# Main\
# ----------------------------\
if __name__ == "__main__":\
    print("🤖 Research Agent with Memory! Type 'exit' to quit.\n")\
    chat_history = []

    while True:\
        query = input("🔎 What can I help you research? ")\
        if query.lower() in ["exit", "quit"]:\
            print(" Goodbye!")\
            break

        result = run_agent(query, chat_history)\
        print("\n--- Final Result ---")\
        print(result)\
        print("\n")
```

The `run-agent`function takes a user's query and searches DuckDuckGo and Wikipedia. It then creates a prompt for the Hugging Face model. After that, it checks the model's response and formats it into structured JSON. The results are saved to a file, and the chat history is updated so the agent remembers past questions. If the validation fails, it still returns the raw output and keeps the conversation history.

## Running the AI Agent
--------------------

Here's what it looks like when you run the agent in your terminal.

In the example below I will query the Agent to do a research on "Goats".\
Here's the result:


![AI Agent First Response](https://miro.medium.com/v2/resize:fit:1400/1*3wnNpseu5CX7A9P832Pl6g.png)


Now let's improve that query with a follow-up. I will ask the Agent to research "breeds." The agent has chat history, so it will automatically use that context to research goat breeds.\
Here's the result:


![AI Agent Second Response](https://miro.medium.com/v2/resize:fit:1400/1*8OUbSmm96PpvWlGdSS8rbA.png)

You can improve your search with follow-up questions. For example, if you type "health" after asking about goats, the Research Agent will keep the conversation going. It will focus on goat health without you needing to repeat the topic. You can keep asking questions until you get the information you need.


![AI Agent Third Response](https://miro.medium.com/v2/resize:fit:1400/1*1UmAbH3deioLHtwKDseUPw.png)


### Structured Output with Pydantic Models
--------------------------------------

We don't want random text. We want structured results so we will use Pydantic models like this:

```
from pydantic import BaseModel\
class ResearchResponse(BaseModel):\
    topic: str\
    summary: str\
    sources: list[str]\
    tools_used: list[str]
```

This code above defines a simple schema for our agent's output. It uses Pydantic's `BaseModel` to make sure the response always has a topic, a summary, a list of sources, and the tools used. This schema ensures the model returns JSON that we can reliably parse.

### Output Parsing

The AI Agent creates a `research_output.txt` file and stores all its responses in the format we set earlier. It stores the time stamp, the query topic, summary, research sources and the tools it used to get the response. Thanks to Pydantic, we catch invalid responses early. If parsing fails, the raw response is returned so the agent doesn't crash. This ensures resilience when dealing with LLMs


![](https://miro.medium.com/v2/resize:fit:1400/1*vvA-4LdBIaEBp1F4Z9bjIg.png)

## Conclusion
----------

This project shows how quickly you can turn an LLM into something practical and interactive. By combining tools, memory, and structured outputs, you now have a research agent that feels more like a teammate than a chatbot. It's a good starting point for trying out AI agents. It's also a great way to begin your journey into AI engineering.