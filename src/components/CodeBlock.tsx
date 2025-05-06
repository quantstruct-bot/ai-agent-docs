import React from 'react';
import { Copy } from 'lucide-react';
import { CodeSnippet } from '../types';

const CodeBlock = ({ code, language, fileName }: CodeSnippet) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="code-snippet my-6 rounded-lg border overflow-hidden">
      {fileName && (
        <div className="flex items-center justify-between bg-muted px-4 py-2 text-xs font-medium text-muted-foreground">
          <span>{fileName}</span>
          <button
            onClick={copyToClipboard}
            className="rounded p-1 hover:bg-background transition-colors"
            aria-label="Copy code"
          >
            <Copy className="h-4 w-4" />
          </button>
        </div>
      )}
      <pre className={language ? `language-${language}` : ''}>
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;