'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Search, Menu, X, Code, User } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* 로고 */}
          <Link href="/" className="flex items-center space-x-2">
            <Code className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">
              Code<span className="text-primary">Vibe</span>
            </span>
          </Link>

          {/* 데스크톱 네비게이션 */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/community" 
              className="text-foreground hover:text-primary transition-colors"
            >
              커뮤니티
            </Link>
            <Link 
              href="/learn" 
              className="text-foreground hover:text-primary transition-colors"
            >
              학습센터
            </Link>
            <Link 
              href="/playground" 
              className="text-foreground hover:text-primary transition-colors"
            >
              코드놀이터
            </Link>
            <Link 
              href="/challenges" 
              className="text-foreground hover:text-primary transition-colors"
            >
              챌린지
            </Link>
          </nav>

          {/* 검색바 및 유틸리티 */}
          <div className="hidden md:flex items-center space-x-4">
            {/* 검색바 */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="검색..."
                className="pl-10 pr-4 py-2 w-64 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* 로그인/프로필 */}
            <button className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
              <User className="h-4 w-4" />
              <span>로그인</span>
            </button>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="검색..."
                  className="w-full pl-10 pr-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              
              <nav className="flex flex-col space-y-2">
                <Link 
                  href="/community" 
                  className="px-4 py-2 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
                >
                  커뮤니티
                </Link>
                <Link 
                  href="/learn" 
                  className="px-4 py-2 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
                >
                  학습센터
                </Link>
                <Link 
                  href="/playground" 
                  className="px-4 py-2 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
                >
                  코드놀이터
                </Link>
                <Link 
                  href="/challenges" 
                  className="px-4 py-2 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
                >
                  챌린지
                </Link>
              </nav>

              <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                <User className="h-4 w-4" />
                <span>로그인</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}