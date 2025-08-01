import Link from 'next/link';
import { Code, Github, Twitter, MessageCircle, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-muted border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 브랜드 섹션 */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">
                Code<span className="text-primary">Vibe</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              개발자들이 함께 성장하는 커뮤니티 플랫폼. 
              코딩을 배우고, 지식을 공유하며, 꿈을 현실로 만들어가세요.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://discord.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a 
                href="mailto:contact@codevibe.dev" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* 커뮤니티 링크 */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">커뮤니티</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/community/questions" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  질문 & 답변
                </Link>
              </li>
              <li>
                <Link 
                  href="/community/discussions" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  토론
                </Link>
              </li>
              <li>
                <Link 
                  href="/community/showcase" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  프로젝트 쇼케이스
                </Link>
              </li>
              <li>
                <Link 
                  href="/community/events" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  이벤트
                </Link>
              </li>
            </ul>
          </div>

          {/* 학습 링크 */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">학습</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/learn/tutorials" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  튜토리얼
                </Link>
              </li>
              <li>
                <Link 
                  href="/learn/roadmaps" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  로드맵
                </Link>
              </li>
              <li>
                <Link 
                  href="/challenges" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  코딩 챌린지
                </Link>
              </li>
              <li>
                <Link 
                  href="/playground" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  코드 놀이터
                </Link>
              </li>
            </ul>
          </div>

          {/* 지원 링크 */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">지원</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/help" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  도움말
                </Link>
              </li>
              <li>
                <Link 
                  href="/docs" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  문서
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  문의하기
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  소개
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 CodeVibe. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link 
              href="/privacy" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              개인정보처리방침
            </Link>
            <Link 
              href="/terms" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              이용약관
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}