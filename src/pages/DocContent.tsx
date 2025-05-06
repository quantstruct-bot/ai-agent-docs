import React from 'react';
import { Bot, Code, TerminalSquare, Cpu, Zap, Rocket, Workflow, Share2 } from 'lucide-react';
import CodeBlock from '../components/CodeBlock';
import FeatureCard from '../components/FeatureCard';

const DocContent = () => {
  return (
    <div className="flex flex-col gap-10 py-6">
      <section id="introduction" className="fade-in scroll-mt-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex mb-4 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            Documentation
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">AI Agent Setup Guide</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            A comprehensive guide to setting up and running your AI agent locally
            using Vite, React, and TypeScript.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            title="Quick Setup"
            description="Get started in minutes with our streamlined installation process"
            icon={<Zap className="h-6 w-6" />}
          />
          <FeatureCard
            title="TypeScript Support"
            description="Fully typed API with autocompletion and type checking"
            icon={<Code className="h-6 w-6" />}
          />
          <FeatureCard
            title="Local Development"
            description="Run your AI agent locally for faster iteration and testing"
            icon={<TerminalSquare className="h-6 w-6" />}
          />
          <FeatureCard
            title="React Integration"
            description="Seamlessly integrate AI capabilities into your React applications"
            icon={<Workflow className="h-6 w-6" />}
          />
        </div>
      </section>

      <section id="installation" className="fade-in scroll-mt-20">
        <h2 className="text-3xl font-bold tracking-tight">Installation</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Getting started with our AI agent is simple. Follow the steps below to set up your
          development environment.
        </p>

        <div className="mt-6">
          <h3 className="text-xl font-semibold">Prerequisites</h3>
          <ul className="mt-4 ml-6 list-disc text-muted-foreground">
            <li className="mt-2">Node.js 18.0 or higher</li>
            <li className="mt-2">npm, yarn, or pnpm for package management</li>
          </ul>

          <h3 className="mt-8 text-xl font-semibold">Create a new project</h3>
          <p className="mt-2 text-muted-foreground">
            You can quickly set up a new project using Vite's CLI:
          </p>

          <CodeBlock
            code="npm create vite@latest my-ai-agent -- --template react-ts"
            language="bash"
          />

          <h3 className="mt-8 text-xl font-semibold">Install dependencies</h3>
          <p className="mt-2 text-muted-foreground">
            Navigate to your project directory and install the required dependencies:
          </p>

          <CodeBlock
            code="cd my-ai-agent\nnpm install\nnpm install @ai-agent/core @ai-agent/react"
            language="bash"
          />
        </div>
      </section>

      <section id="configuration" className="fade-in scroll-mt-20">
        <h2 className="text-3xl font-bold tracking-tight">Configuration</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Set up your AI agent with the appropriate configuration.
        </p>

        <div className="mt-6">
          <h3 className="text-xl font-semibold">Basic Configuration</h3>
          <p className="mt-2 text-muted-foreground">
            Create a configuration file for your AI agent:
          </p>

          <CodeBlock
            code={`// src/config/agent.ts
import { createAgent } from '@ai-agent/core';

export const agent = createAgent({
  name: 'MyAIAssistant',
  description: 'A helpful AI assistant for your application',
  baseURL: process.env.AGENT_API_URL || 'http://localhost:3000',
  apiKey: process.env.AGENT_API_KEY,
  // Add any custom options here
  options: {
    temperature: 0.7,
    maxTokens: 2000,
  }
});`}
            language="typescript"
            fileName="src/config/agent.ts"
          />

          <h3 className="mt-8 text-xl font-semibold">Environment Variables</h3>
          <p className="mt-2 text-muted-foreground">
            Create a .env file in your project root:
          </p>

          <CodeBlock
            code={`AGENT_API_URL=http://localhost:3000
AGENT_API_KEY=your_api_key_here`}
            language="env"
            fileName=".env"
          />
        </div>
      </section>

      <section id="usage" className="fade-in scroll-mt-20">
        <h2 className="text-3xl font-bold tracking-tight">Usage</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Learn how to integrate and use the AI agent in your React application.
        </p>

        <div className="mt-6">
          <h3 className="text-xl font-semibold">Setting up the Provider</h3>
          <p className="mt-2 text-muted-foreground">
            First, wrap your application with the AI Agent provider:
          </p>

          <CodeBlock
            code={`// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { AgentProvider } from '@ai-agent/react';
import { agent } from './config/agent';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AgentProvider agent={agent}>
      <App />
    </AgentProvider>
  </React.StrictMode>
);`}
            language="typescript"
            fileName="src/main.tsx"
          />

          <h3 className="mt-8 text-xl font-semibold">Using the Agent Hook</h3>
          <p className="mt-2 text-muted-foreground">
            Now you can use the useAgent hook in your components:
          </p>

          <CodeBlock
            code={`// src/components/Chatbot.tsx
import React, { useState } from 'react';
import { useAgent } from '@ai-agent/react';

const Chatbot = () => {
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState([]);
  const { generateResponse, isLoading } = useAgent();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    
    // Add user message
    setMessages((prev) => [...prev, { role: 'user', content: prompt }]);
    
    // Get AI response
    const response = await generateResponse(prompt);
    
    // Add AI response
    setMessages((prev) => [...prev, { role: 'assistant', content: response }]);
    
    // Clear input
    setPrompt('');
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow">
      <div className="h-80 overflow-y-auto mb-4 p-3 bg-gray-50 rounded">
        {messages.map((msg, index) => (
          <div 
            key={index} 
            className={\`mb-2 p-2 rounded \${
              msg.role === 'user' ? 'bg-blue-100 ml-auto' : 'bg-gray-200'
            }\`}
          >
            {msg.content}
          </div>
        ))}
        {isLoading && <div className="text-gray-400">AI is thinking...</div>}
      </div>
      
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask something..."
          className="flex-1 p-2 border rounded"
          disabled={isLoading}
        />
        <button 
          type="submit" 
          className="bg-blue-500 text-white px-4 py-2 rounded"
          disabled={isLoading}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chatbot;`}
            language="typescript"
            fileName="src/components/Chatbot.tsx"
          />
        </div>
      </section>

      <section id="examples" className="fade-in scroll-mt-20">
        <h2 className="text-3xl font-bold tracking-tight">Examples</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Learn through practical examples of AI agent implementation.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-lg border shadow-sm">
            <div className="p-6">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary/10 p-2 text-primary">
                  <Bot className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Conversational Chat</h3>
              </div>
              <p className="mt-2 text-muted-foreground">
                Implement a conversational chatbot with memory of previous interactions.
              </p>
              <a
                href="#"
                className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                View Example
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="rounded-lg border shadow-sm">
            <div className="p-6">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary/10 p-2 text-primary">
                  <Cpu className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Content Generation</h3>
              </div>
              <p className="mt-2 text-muted-foreground">
                Generate dynamic content based on user inputs and preferences.
              </p>
              <a
                href="#"
                className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                View Example
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <CodeBlock
            code={`// src/components/ContentGenerator.tsx
import React, { useState } from 'react';
import { useAgent } from '@ai-agent/react';

const ContentGenerator = () => {
  const [topic, setTopic] = useState('');
  const [style, setStyle] = useState('professional');
  const [length, setLength] = useState('medium');
  const [generatedContent, setGeneratedContent] = useState('');
  const { generateContent, isLoading } = useAgent();

  const handleGenerate = async () => {
    const content = await generateContent({
      topic,
      style,
      length,
      format: 'blog'
    });
    
    setGeneratedContent(content);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Content Generator</h2>
      
      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium mb-1">Topic</label>
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter a topic"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Style</label>
          <select
            value={style}
            onChange={(e) => setStyle(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="professional">Professional</option>
            <option value="casual">Casual</option>
            <option value="technical">Technical</option>
            <option value="storytelling">Storytelling</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Length</label>
          <select
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="short">Short (~250 words)</option>
            <option value="medium">Medium (~500 words)</option>
            <option value="long">Long (~1000 words)</option>
          </select>
        </div>
      </div>
      
      <button
        onClick={handleGenerate}
        disabled={isLoading || !topic}
        className="w-full bg-blue-500 text-white py-2 rounded font-medium disabled:bg-blue-300"
      >
        {isLoading ? 'Generating...' : 'Generate Content'}
      </button>
      
      {generatedContent && (
        <div className="mt-6">
          <h3 className="font-medium mb-2">Generated Content:</h3>
          <div className="p-4 bg-gray-50 rounded border whitespace-pre-wrap">
            {generatedContent}
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentGenerator;`}
            language="typescript"
            fileName="src/components/ContentGenerator.tsx"
          />
        </div>
      </section>

      <section id="deployment" className="fade-in scroll-mt-20">
        <h2 className="text-3xl font-bold tracking-tight">Deployment</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Learn how to deploy your AI-powered application to production.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <Rocket className="mb-4 h-8 w-8 text-primary" />
            <h3 className="text-xl font-bold">Deploy to Vercel</h3>
            <p className="mt-2 text-muted-foreground">
              Deploy your frontend application to Vercel for optimal performance.
            </p>
            <CodeBlock
              code="npm run build"
              language="bash"
            />
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <Share2 className="mb-4 h-8 w-8 text-primary" />
            <h3 className="text-xl font-bold">API Configuration</h3>
            <p className="mt-2 text-muted-foreground">
              Set up your production API endpoints and keys securely.
            </p>
            <ul className="mt-4 ml-4 list-disc text-muted-foreground">
              <li className="mt-1">Use environment variables</li>
              <li className="mt-1">Implement proper rate limiting</li>
              <li className="mt-1">Configure CORS appropriately</li>
            </ul>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <Workflow className="mb-4 h-8 w-8 text-primary" />
            <h3 className="text-xl font-bold">CI/CD Pipeline</h3>
            <p className="mt-2 text-muted-foreground">
              Set up continuous integration and deployment for your project.
            </p>
            <CodeBlock
              code={`name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      - name: Install Dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Deploy
        uses: vercel/action@v2
        with:
          vercel-token: \${{ secrets.VERCEL_TOKEN }}`}
              language="yaml"
              fileName=".github/workflows/deploy.yml"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default DocContent;