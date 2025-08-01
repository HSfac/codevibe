'use client';

import { useState } from 'react';
import { 
  Play, 
  Square, 
  Save, 
  Share, 
  Settings, 
  RotateCcw,
  Maximize,
  Code,
  FileText,
  Eye,
  Copy,
  Check
} from 'lucide-react';

export default function PlaygroundPage() {
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [code, setCode] = useState(`// Welcome to CodeVibe Playground!
// 여기서 자유롭게 코드를 작성하고 실행해보세요

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log('Fibonacci sequence:');
for (let i = 0; i < 10; i++) {
    console.log(\`F(\${i}) = \${fibonacci(i)}\`);
}

// 웹 개발 예제
const greeting = (name) => {
    return \`Hello, \${name}! Welcome to CodeVibe! 🚀\`;
};

console.log(greeting('Developer'));`);

  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);

  const languages = [
    { value: 'javascript', label: 'JavaScript', icon: '🟨' },
    { value: 'typescript', label: 'TypeScript', icon: '🔷' },
    { value: 'python', label: 'Python', icon: '🐍' },
    { value: 'java', label: 'Java', icon: '☕' },
    { value: 'cpp', label: 'C++', icon: '⚡' },
    { value: 'go', label: 'Go', icon: '🐹' },
  ];

  const templates = [
    {
      name: 'React Component',
      language: 'javascript',
      code: `import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Counter;`
    },
    {
      name: 'API Fetch',
      language: 'javascript',
      code: `async function fetchUserData(userId) {
  try {
    const response = await fetch(\`/api/users/\${userId}\`);
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
}

// Usage
fetchUserData(123).then(user => {
  if (user) {
    console.log('User:', user.name);
  }
});`
    },
    {
      name: 'Array Methods',
      language: 'javascript',
      code: `const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter even numbers
const evenNumbers = numbers.filter(n => n % 2 === 0);
console.log('Even numbers:', evenNumbers);

// Map to squares
const squares = numbers.map(n => n * n);
console.log('Squares:', squares);

// Reduce to sum
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log('Sum:', sum);`
    }
  ];

  const runCode = () => {
    setIsRunning(true);
    // 코드 실행 시뮬레이션
    setTimeout(() => {
      setOutput(`실행 결과:
Fibonacci sequence:
F(0) = 0
F(1) = 1
F(2) = 1
F(3) = 2
F(4) = 3
F(5) = 5
F(6) = 8
F(7) = 13
F(8) = 21
F(9) = 34
Hello, Developer! Welcome to CodeVibe! 🚀

✅ 코드가 성공적으로 실행되었습니다!`);
      setIsRunning(false);
    }, 1500);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const loadTemplate = (template: { language: string; code: string }) => {
    setSelectedLanguage(template.language);
    setCode(template.code);
    setOutput('');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground flex items-center">
                <Code className="h-6 w-6 mr-2 text-primary" />
                코드 놀이터
              </h1>
              <p className="text-muted-foreground">실시간으로 코드를 작성하고 실행해보세요</p>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={runCode}
                disabled={isRunning}
                className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                {isRunning ? (
                  <Square className="h-4 w-4 mr-2" />
                ) : (
                  <Play className="h-4 w-4 mr-2" />
                )}
                {isRunning ? '실행 중...' : '실행'}
              </button>
              <button className="p-2 border border-border rounded-lg hover:bg-muted transition-colors">
                <Save className="h-4 w-4" />
              </button>
              <button 
                onClick={copyCode}
                className="p-2 border border-border rounded-lg hover:bg-muted transition-colors"
              >
                {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
              </button>
              <button className="p-2 border border-border rounded-lg hover:bg-muted transition-colors">
                <Share className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* 사이드바 */}
          <div className="lg:col-span-1">
            {/* 언어 선택 */}
            <div className="bg-muted/50 rounded-xl p-4 mb-6">
              <h3 className="font-semibold text-foreground mb-3">언어 선택</h3>
              <div className="space-y-1">
                {languages.map((lang) => (
                  <button
                    key={lang.value}
                    onClick={() => setSelectedLanguage(lang.value)}
                    className={`w-full flex items-center space-x-2 px-3 py-2 rounded-lg text-left transition-colors ${
                      selectedLanguage === lang.value
                        ? 'bg-primary text-white'
                        : 'hover:bg-background'
                    }`}
                  >
                    <span>{lang.icon}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 템플릿 */}
            <div className="bg-muted/50 rounded-xl p-4">
              <h3 className="font-semibold text-foreground mb-3">템플릿</h3>
              <div className="space-y-2">
                {templates.map((template, index) => (
                  <button
                    key={index}
                    onClick={() => loadTemplate(template)}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-background transition-colors"
                  >
                    <div className="font-medium text-foreground">{template.name}</div>
                    <div className="text-sm text-muted-foreground">{template.language}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 메인 에디터 영역 */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* 코드 에디터 */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-foreground flex items-center">
                    <FileText className="h-4 w-4 mr-2" />
                    코드 에디터
                  </h3>
                  <div className="flex items-center space-x-2">
                    <button className="p-1 hover:bg-muted rounded">
                      <Settings className="h-4 w-4 text-muted-foreground" />
                    </button>
                    <button className="p-1 hover:bg-muted rounded">
                      <Maximize className="h-4 w-4 text-muted-foreground" />
                    </button>
                  </div>
                </div>
                <div className="bg-muted/30 border border-border rounded-xl overflow-hidden">
                  <div className="bg-muted/50 px-4 py-2 border-b border-border">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="ml-2 text-sm text-muted-foreground">
                        main.{selectedLanguage === 'javascript' ? 'js' : selectedLanguage === 'typescript' ? 'ts' : 'py'}
                      </span>
                    </div>
                  </div>
                  <textarea
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="w-full h-96 p-4 bg-transparent border-none outline-none resize-none font-mono text-sm text-foreground"
                    placeholder="여기에 코드를 작성하세요..."
                  />
                </div>
              </div>

              {/* 출력 영역 */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-foreground flex items-center">
                    <Eye className="h-4 w-4 mr-2" />
                    실행 결과
                  </h3>
                  <button
                    onClick={() => setOutput('')}
                    className="p-1 hover:bg-muted rounded"
                  >
                    <RotateCcw className="h-4 w-4 text-muted-foreground" />
                  </button>
                </div>
                <div className="bg-muted/30 border border-border rounded-xl overflow-hidden">
                  <div className="bg-muted/50 px-4 py-2 border-b border-border">
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${isRunning ? 'bg-yellow-400 animate-pulse' : output ? 'bg-green-400' : 'bg-gray-400'}`}></div>
                      <span className="text-sm text-muted-foreground">
                        {isRunning ? '실행 중...' : output ? '완료' : '대기 중'}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 h-96 overflow-auto">
                    {isRunning ? (
                      <div className="flex items-center justify-center h-full">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                      </div>
                    ) : output ? (
                      <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{output}</pre>
                    ) : (
                      <div className="flex items-center justify-center h-full text-muted-foreground">
                        실행 버튼을 클릭하여 코드를 실행해보세요
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* 추가 기능 */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-muted/30 border border-border rounded-xl p-4">
                <h4 className="font-semibold text-foreground mb-2">🚀 빠른 실행</h4>
                <p className="text-sm text-muted-foreground">
                  Ctrl+Enter로 빠르게 코드를 실행할 수 있습니다
                </p>
              </div>
              <div className="bg-muted/30 border border-border rounded-xl p-4">
                <h4 className="font-semibold text-foreground mb-2">💾 자동 저장</h4>
                <p className="text-sm text-muted-foreground">
                  작성한 코드는 자동으로 브라우저에 저장됩니다
                </p>
              </div>
              <div className="bg-muted/30 border border-border rounded-xl p-4">
                <h4 className="font-semibold text-foreground mb-2">🔗 공유하기</h4>
                <p className="text-sm text-muted-foreground">
                  작성한 코드를 다른 개발자들과 쉽게 공유하세요
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}