import { calculateReadingTime } from "../utils/calculateReadingTime";


export const blogPosts = [
  {
    slug: "uncovering-new-tailwind-css-utilities",
    title: "Uncovering New Tailwind CSS Utilities You May Not Have Heard Of",
    date: "2023-05-17",
    tags: ["tailwind", "frontend", "css"],
    description: "Discover powerful yet lesser-known Tailwind CSS utilities that can improve your UI workflow.",
    file: "uncovering-new-tailwind-css-utilities.md",
    readingTime: calculateReadingTime(`Lorem ipsum dolor sit amet...`),
  },
  {
    slug: "deep-dive-into-kubernetes-architecture-and-pod-networking",
    title: "Deep Dive into Kubernetes Architecture and Pod Networking",
    date: "2023-06-06",
    tags: ["kubernetes", "devops", "cloud-native"],
    description: "Understand the architecture of Kubernetes and explore its relation to Pod networking.",
    file: "deep-dive-into-kubernetes-architecture-and-pod-networking.md",
    readingTime: calculateReadingTime(`Kubernetes is a powerful open-source system for automating deployment, scaling, and management of containerized applications. This article explores how Kubernetes components interact and how pod networking enables communication across the cluster.`),
  },
  {
    slug: "basic-guide-to-kubernetes-service-discovery",
    title: "Basic Guide to Kubernetes Service Discovery",
    date: "2025-10-07",
    tags: ["kubernetes", "service-discovery", "cloud-native"],
    description: "Learn how Kubernetes enables seamless service discovery and communication between Pods and Services.",
    file: "basic-guide-to-kubernetes-service-discovery.md",
    readingTime: calculateReadingTime(`Kubernetes Service Discovery allows Pods to find and communicate with each other without manual configuration. It uses internal DNS and environment variables to automate networking inside the cluster.`),
  },
  {
    slug: "real-time-etlt-modern-data-processing",
    title: "Real-Time ETLT: Meet the Demands of Modern Data Processing",
    date: "2024-06-16",
    tags: ["data-engineering", "etl", "big-data", "real-time-processing"],
    description: "Learn how real-time ETLT pipelines transform the way organizations handle modern data workloads for analytics and business intelligence.",
    file: "real-time-etlt-modern-data-processing.md",
    readingTime: calculateReadingTime(`Real-time ETLT pipelines are revolutionizing how organizations process and analyze massive datasets. This article explores how ETLT (Extract, Transform, Load, Transform) differs from traditional ETL workflows, its benefits, and tools that make real-time data movement faster and smarter.`),
  },
  {
    slug: "web3-operational-security-bybit-hack",
    title: "Web3 Operational Security: Lessons from the Bybit $1.4B Wallet Safe Hack",
    date: "2025-05-30",
    tags: ["web3", "cybersecurity", "blockchain", "security"],
    description: "Explore what the $1.4B Bybit wallet safe hack reveals about Web3 operational security — and how organizations can strengthen their design, processes, and infrastructure to prevent similar breaches.",
    file: "web3-operational-security-bybit-hack.md",
    readingTime: calculateReadingTime(`The $1.4B Bybit wallet safe hack sent shockwaves through the Web3 ecosystem...`),
  },
  {
    slug: "canva-in-claude-ai",
    title: "Canva is Now in Claude AI: What You Need to Know",
    date: "2025-07-26",
    tags: ["ai", "claude", "canva", "integration"],
    description: "Claude AI now integrates with Canva — here’s how this collaboration simplifies design workflows and content creation.",
    file: "canva-in-claude-ai.md",
    readingTime: calculateReadingTime(`Claude AI has officially integrated Canva into its ecosystem, enabling users to generate, edit, and design visuals directly within conversations...`),
  },
  {
    slug: "stages-of-training-an-llm",
    title: "The 4 Stages of Training an LLM from Scratch (Explained Clearly)",
    date: "2025-08-06",
    tags: ["machine learning", "llm", "ai", "training"],
    description: "A clear and practical breakdown of the four major stages involved in training a large language model (LLM) from scratch — from data collection to fine-tuning.",
    file: "stages-of-training-an-llm.md",
    readingTime: calculateReadingTime(`
      Training a large language model (LLM) from scratch involves four main stages:
      data collection and preprocessing, model architecture design, pretraining, and fine-tuning.
      Each phase plays a crucial role in shaping how the model understands, generates, and reasons with language.
    `),
  },
  {
    slug: "building-ai-research-assistant",
    title: "Building an AI Research Assistant with Hugging Face, LangChain, and Python",
    date: "2025-09-28",
    tags: ["ai", "python", "langchain", "huggingface", "research"],
    description: "Learn how to build a personal AI research assistant using Hugging Face models, LangChain, and Python for smarter information retrieval.",
    file: "building-ai-research-assistant.md",
    readingTime: calculateReadingTime(`In this article, we explore how to create an AI research assistant using Hugging Face Transformers, LangChain for chaining LLM calls, and Python. You'll learn to fetch, summarize, and interact with research papers efficiently. Step-by-step code examples are included to help you build your own assistant.`),
  },
    
  ];
  