import Link from 'next/link';
import { Code, Users, BookOpen, Zap, ArrowRight, Terminal, Coffee, Award } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                <Terminal className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Developer Community Platform</span>
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Code Your Dreams,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Vibe with Developers
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              개발자들이 함께 성장하는 커뮤니티. 질문하고, 배우고, 공유하며 
              여러분의 코딩 여정을 함께 만들어가세요.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/community"
                className="inline-flex items-center px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                <Users className="h-5 w-5 mr-2" />
                커뮤니티 참여하기
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
              <Link
                href="/learn"
                className="inline-flex items-center px-8 py-3 border border-border rounded-lg hover:bg-muted transition-colors font-medium"
              >
                <BookOpen className="h-5 w-5 mr-2" />
                학습 시작하기
              </Link>
            </div>
          </div>
        </div>
        
        {/* 배경 장식 */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* 주요 기능 섹션 */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              개발자를 위한 모든 것
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              질문부터 프로젝트 쇼케이스까지, 개발자가 필요한 모든 기능을 한 곳에서
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 커뮤니티 */}
            <div className="bg-background p-8 rounded-xl border border-border hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">활발한 커뮤니티</h3>
              <p className="text-muted-foreground mb-6">
                질문하고 답변하며 개발자들과 지식을 공유하세요. 
                실시간으로 도움을 받고 다른 개발자들을 도와주세요.
              </p>
              <Link 
                href="/community"
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
              >
                커뮤니티 둘러보기 <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            {/* 학습센터 */}
            <div className="bg-background p-8 rounded-xl border border-border hover:shadow-lg transition-shadow">
              <div className="bg-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">체계적인 학습</h3>
              <p className="text-muted-foreground mb-6">
                단계별 튜토리얼과 로드맵으로 체계적으로 학습하세요.
                초보자부터 전문가까지 모든 레벨을 지원합니다.
              </p>
              <Link 
                href="/learn"
                className="inline-flex items-center text-secondary hover:text-secondary/80 font-medium"
              >
                학습 시작하기 <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            {/* 코딩 챌린지 */}
            <div className="bg-background p-8 rounded-xl border border-border hover:shadow-lg transition-shadow">
              <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">코딩 챌린지</h3>
              <p className="text-muted-foreground mb-6">
                다양한 난이도의 알고리즘 문제로 실력을 키워보세요.
                랭킹 시스템으로 다른 개발자들과 경쟁할 수 있습니다.
              </p>
              <Link 
                href="/challenges"
                className="inline-flex items-center text-accent hover:text-accent/80 font-medium"
              >
                챌린지 도전하기 <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 통계 섹션 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">10K+</div>
              <div className="text-muted-foreground">활성 개발자</div>
            </div>
            
            <div className="text-center">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="h-8 w-8 text-secondary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">50K+</div>
              <div className="text-muted-foreground">해결된 질문</div>
            </div>
            
            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">1M+</div>
              <div className="text-muted-foreground">코드 라인</div>
            </div>
            
            <div className="text-center">
              <div className="bg-green-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-500" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">500+</div>
              <div className="text-muted-foreground">프로젝트</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            지금 바로 시작하세요
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            무료로 가입하고 전세계 개발자들과 함께 성장하세요
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center px-8 py-3 bg-white text-primary rounded-lg hover:bg-white/90 transition-colors font-medium"
          >
            무료로 시작하기
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
