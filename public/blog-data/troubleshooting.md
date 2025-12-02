# RAG System Setup & Troubleshooting Guide

##  Quick Start

### 1. Install Dependencies

```bash
# Create virtual environment (recommended)
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install requirements
pip install -r requirements.txt
```

### 2. Configure Environment Variables

Update your `.env` file:

```properties
# REQUIRED: Get your token from https://huggingface.co/settings/tokens
HUGGINGFACEHUB_API_TOKEN=hf_your_actual_token_here

# Database and model settings
CHROMA_DIR=./chroma_db
EMBEDDING_MODEL=sentence-transformers/all-MiniLM-L6-v2
HF_TEXT_MODEL=microsoft/phi-3-mini-4k-instruct
```

### 3. Create Data Directory

```bash
mkdir -p data
```

### 4. Run the Server

```bash
# Development mode
uvicorn app:app --reload --host 0.0.0.0 --port 8000

# Or using Python
python app.py
```

### 5. Test the API

```bash
# Health check
curl http://localhost:8000/health

# Upload a document
curl -X POST "http://localhost:8000/upload" \
  -H "accept: application/json" \
  -H "Content-Type: multipart/form-data" \
  -F "file=@/path/to/your/document.pdf"

# Query the system
curl -X POST "http://localhost:8000/query" \
  -H "Content-Type: application/json" \
  -d '{"question": "What is this document about?", "chat_history": []}'
```

##  Common Issues & Solutions

### Issue 1: 500 Internal Server Error

**Symptoms:** API returns 500 error when uploading or querying

**Causes & Solutions:**

1. **Invalid or Missing HuggingFace Token**
   ```bash
   # Verify your token
   echo $HUGGINGFACEHUB_API_TOKEN
   # Should output: hf_...
   
   # Test token validity
   curl https://huggingface.co/api/whoami -H "Authorization: Bearer $HUGGINGFACEHUB_API_TOKEN"
   ```

2. **Chroma DB Not Initialized**
   - Upload at least one PDF document before querying
   - Check if `./chroma_db` directory exists and contains data

3. **Model Access Issues**
   - Ensure you have accepted model terms at https://huggingface.co/microsoft/phi-3-mini-4k-instruct
   - Try an alternative model: `HF_TEXT_MODEL=google/flan-t5-large`

### Issue 2: CORS Errors

**Symptoms:** Browser console shows "CORS policy" errors

**Solution:** The fixed `app.py` includes proper CORS headers. If issues persist:

```python
# In app.py, be more specific with origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://localhost:5173",
        "http://127.0.0.1:3000"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

### Issue 3: "No documents found in database"

**Symptoms:** Query fails with message about empty database

**Solution:**
1. Upload documents first using `/upload` endpoint
2. Check if PDFs are valid and not corrupted
3. Manually run ingestion:
   ```bash
   python ingest.py
   ```

### Issue 4: Out of Memory Errors

**Symptoms:** Server crashes or hangs during ingestion

**Solutions:**
1. Process smaller batches in `ingest.py` (reduce `batch_size`)
2. Use smaller embedding model:
   ```properties
   EMBEDDING_MODEL=sentence-transformers/paraphrase-MiniLM-L3-v2
   ```
3. Split large PDFs before uploading

### Issue 5: Slow Response Times

**Symptoms:** Queries take very long to complete

**Solutions:**
1. Reduce number of retrieved documents:
   ```python
   # In retriever.py, change k value
   retriever = build_retriever(k=3)  # Instead of 5
   ```
2. Use faster models:
   ```properties
   HF_TEXT_MODEL=google/flan-t5-base
   ```

### Issue 6: Dependencies Conflict

**Symptoms:** Import errors or version conflicts

**Solution:**
```bash
# Clean install
pip uninstall langchain langchain-community langchain-huggingface -y
pip install --upgrade pip
pip install -r requirements.txt --force-reinstall
```

## Testing Your Setup

### Test 1: Verify Installation
```python
# test_imports.py
try:
    from langchain_huggingface import HuggingFaceEmbeddings
    from langchain_chroma import Chroma
    from fastapi import FastAPI
    print("All imports successful")
except ImportError as e:
    print(f"Import error: {e}")
```

### Test 2: Test Embeddings
```python
# test_embeddings.py
from langchain_huggingface import HuggingFaceEmbeddings

embed = HuggingFaceEmbeddings(
    model_name="sentence-transformers/all-MiniLM-L6-v2"
)
test_text = "This is a test"
result = embed.embed_query(test_text)
print(f"Embedding dimension: {len(result)}")
```

### Test 3: Test HuggingFace API
```python
# test_hf_api.py
import os
from langchain_community.llms import HuggingFaceHub

token = os.getenv("HUGGINGFACEHUB_API_TOKEN")
llm = HuggingFaceHub(
    repo_id="google/flan-t5-small",
    huggingfacehub_api_token=token
)
response = llm.invoke("What is 2+2?")
print(f"Response: {response}")
```

##  Debug Mode

Enable verbose logging by adding to your `.env`:
```properties
LOG_LEVEL=DEBUG
```

And update `app.py`:
```python
import logging
logging.basicConfig(level=os.getenv("LOG_LEVEL", "INFO"))
```

##  Monitoring Requests

Watch server logs for detailed output:
- Document upload progress
- Chain initialization
- Query execution
- Error stack traces

##  Alternative Models

If `phi-3-mini` doesn't work, try these alternatives:

```properties
# Smaller, faster (recommended for testing)
HF_TEXT_MODEL=google/flan-t5-base

# Larger, better quality
HF_TEXT_MODEL=mistralai/Mistral-7B-Instruct-v0.1

# Very small for quick testing
HF_TEXT_MODEL=google/flan-t5-small
```

##  Frontend Integration Example

```javascript
// Upload document
async function uploadDocument(file) {
  const formData = new FormData();
  formData.append('file', file);
  
  const response = await fetch('http://localhost:8000/upload', {
    method: 'POST',
    body: formData
  });
  
  return await response.json();
}

// Query system
async function queryRAG(question, chatHistory = []) {
  const response = await fetch('http://localhost:8000/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      question: question,
      chat_history: chatHistory
    })
  });
  
  return await response.json();
}
```

##  Still Having Issues?

1. Check server logs for detailed error messages
2. Verify all file paths are correct
3. Ensure sufficient disk space for vector database
4. Try with a simple, small PDF first
5. Test each component individually (embeddings, LLM, retriever)

##  Additional Resources

- [LangChain Documentation](https://python.langchain.com/)
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [Chroma Documentation](https://docs.trychroma.com/)
- [HuggingFace Hub](https://huggingface.co/docs/hub/index)