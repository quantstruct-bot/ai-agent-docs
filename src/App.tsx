import React, { useEffect } from 'react';
import Layout from './components/Layout';
import DocContent from './pages/DocContent';
import { useTheme } from './lib/theme';

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    // Update document title
    document.title = 'AI Agent Documentation';
    
    // Set meta theme-color based on current theme
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute(
        'content',
        theme === 'dark' ? '#0f172a' : '#ffffff'
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'theme-color';
      meta.content = theme === 'dark' ? '#0f172a' : '#ffffff';
      document.head.appendChild(meta);
    }
  }, [theme]);

  return (
    <Layout>
      <DocContent />
    </Layout>
  );
}

export default App;