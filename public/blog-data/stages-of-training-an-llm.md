Large Language Models (LLMs) are now essential tools in many real-world applications. They are used in chatbots, coding helpers, summarization tools, and reasoning agents. But how do these models grow from nothing to advanced systems that work well with humans?

In this article, we will explain the four main stages of training an LLM from the beginning. We will combine ideas from engineering, research, and alignment methods. Each stage is important for creating an LLM that understands language, follows instructions, and meets human needs.

## Stage Zero: Random Initialization
---------------------------------

Every LLM starts from the beginning. At this stage, the model knows nothing. It hasn't seen any text or learned any patterns. Its internal weights are random, like scattered thoughts of someone waking up.

If you ask the model a question now, it might say: "blue quickly onion fire 92xp climb."

That's not a mistake; the model hasn't learned how language works yet. The model makes noise because it's not trained. It doesn't understand grammar, facts, or logic.


![Stage Zero: Random Initialization](https://miro.medium.com/v2/resize:fit:1400/1*6RfYZM5hjDdx9IzwccF2-A.png)


This is the first stage of training an LLM. Everything the model will learn i.e. language structure, reasoning, and knowledge, will come from the next step: pre-training on large datasets.

## Stage One: Pre-training
-----------------------

Pre-training is where a large language model first learns language. At this stage, the model reads massive amounts of text from books, articles, and websites. It does not learn a specific task. Instead, it finds patterns in language using a method called self-supervised learning.

There are three ways to train:

-   Unsupervised learning --- no labels at all.
-   Supervised learning --- human-labeled data.
-   Self-supervised learning --- the model creates its own labels by hiding words and guessing them.

Modern trained LLMs use self-supervised learning because it scales to huge datasets and teaches language from scratch.

Example:
--------

Sentence: "The early bird catches the worm."\
Masked: "The ___ bird catches the ___"\
The model generates "early" and "worm" by using surrounding words.

![Stage One: Pre-training](https://miro.medium.com/v2/resize:fit:1400/1*LuveQ_D5iyuOmUeRMED2yA.jpeg)


## Architectures in Pre-training:
------------------------------

-   Encoder-only models (BERT) --- good at understanding text. They hide random words and predict them.
-   Decoder-only models (GPT) --- good at generating text. They predict the next word in a sequence (causal language modeling).
-   Encoder-decoder models (T5, BART) --- can do many tasks like summarization, translation, and question answering.

During pre-training, the model updates its weights using gradient descent to make better predictions. Loss functions like cross-entropy measure how far it is from the correct answer.

By the end of this stage, the model understands grammar, facts, and structure. But it still cannot follow instructions or align with human goals. That comes later with fine-tuning and human feedback.


![Architectures in Pre-training](https://miro.medium.com/v2/resize:fit:1400/1*Gt2uafv8NHZMG_ZIlQOcHg.jpeg)


## Stage Two: Instruction Fine-Tuning
----------------------------------

In the second stage, the LLM transitions into instruction fine-tuning. This phase uses human-labeled datasets containing instruction-response pairs. It introduces supervised learning, where the model fine tunes itself to follow commands accurately and structure helpful replies.

Example:

Instruction: "What is an LLM?"

Response: "An LLM is an AI system trained on large-scale text to understand and generate language."

This stage makes the model conversational. This enables it to summarize text, answer questions, write code, and follow task-specific instructions. It fine tunes the model's behavior to align better with user expectations.

The model adjusts its weights to match its outputs to labeled answers through backpropagation. This stage significantly improves its usability in real-world scenarios.


![Stage Two: Instruction Fine-Tuning](https://miro.medium.com/v2/resize:fit:1400/1*wa8Jc5rLYTZVEfj1y7wY8Q.png)

## Stage Three: Preference Fine-Tuning (RLHF)
------------------------------------------

Even after fine-tuning, the model may still give different valid answers. To improve its behavior, we use Preference Fine-Tuning, also called Reinforcement Learning with Human Feedback (RLHF).

Here's how it works:

-   The model creates two or more responses to a prompt.
-   Humans pick the best response.
-   A reward model is trained based on these choices.


![Multiple Response Choices](https://miro.medium.com/v2/resize:fit:1400/1*ED5zRv1n9hn5D6XicMbVNA.png)



You then update the base LLM with reinforcement learning, often with the Proximal Policy Optimization (PPO) method. This process helps the model align with human values and preferences, even when there is no single correct answer. Over time, the LLM learns to give more helpful, detailed, and polite responses.

## Why It Matters

RLHF is important for model alignment. It helps developers create trained LLMs that work well in customer service and decision-making settings.


![Stage Three: Preference Fine-Tuning (RLHF)](https://miro.medium.com/v2/resize:fit:1400/1*E6D7tZiZdT1zdryFh6KuBQ.png)


## Stage Four: Reasoning Fine-Tuning
---------------------------------

In this final stage, the model improves its logical and math reasoning skills. This phase does not depend on human preferences. Instead, it uses clear rewards, correct or incorrect answers, to guide learning.

Example:

Prompt: "What is 2 + 2?"

Model: "Let's think. 2 + 2 equals 4 because two and two make four."

This method helps the model show its reasoning process. It uses strategies like chain-of-thought prompting. Each correct answer earns a reward, helping the model get better at solving problems step by step.

This approach is called Reinforcement Learning with Verifiable Rewards. It is important for tasks like scientific research, coding, and math reasoning. Techniques like GRPO (Generalized Reward Policy Optimization) are used in this phase to boost performance in complex areas.


![](https://miro.medium.com/v2/resize:fit:1400/1*J7BZ3pa2h2MyeisjsVr67Q.png)

Final Stage of Model Training

## Final Thoughts
--------------

Training a large language model (LLM) from scratch is not just about giving it data. It is a step-by-step process. This journey goes from random weights to a model that understands and reasons like a human. Each stage is important.

-   Pre-training helps the model learn basic information.
-   Instruction fine-tuning improves how the model follows directions.
-   Preference tuning adjusts the model to better match user needs.
-   Reasoning refinement enhances the model's ability to think and solve problems.

Together, these stages make the model useful in real life. Which stage do you think is most important for how useful ChatGPT, Claude or Gemini is? This includes tasks like writing, coding, or answering questions