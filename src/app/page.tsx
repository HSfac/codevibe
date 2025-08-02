'use client';

import Link from 'next/link';
import { Code, Users, BookOpen, Zap, ArrowRight, Terminal, Coffee, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const AnimatedCounter = ({ end, duration = 2 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count.toLocaleString()}{end > 999 ? '+' : ''}</span>;
};

const FloatingElement = ({ delay = 0, children, className = "" }: { delay?: number; children: React.ReactNode; className?: string }) => (
  <motion.div
    className={`absolute ${className}`}
    animate={{
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
  >
    {children}
  </motion.div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        {/* 배경 애니메이션 요소들 */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <FloatingElement delay={0} className="top-20 left-10 w-20 h-20 opacity-20">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-secondary"></div>
          </FloatingElement>
          <FloatingElement delay={1} className="top-32 right-20 w-16 h-16 opacity-30">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-secondary to-accent"></div>
          </FloatingElement>
          <FloatingElement delay={2} className="bottom-20 left-32 w-12 h-12 opacity-25">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-accent to-primary"></div>
          </FloatingElement>
          <FloatingElement delay={0.5} className="bottom-32 right-10 w-24 h-24 opacity-15">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-secondary"></div>
          </FloatingElement>
          
          {/* 코드 아이콘들 */}
          <FloatingElement delay={1.5} className="top-1/4 left-1/4 opacity-10">
            <Code className="w-8 h-8 text-primary" />
          </FloatingElement>
          <FloatingElement delay={2.5} className="top-1/3 right-1/3 opacity-10">
            <Terminal className="w-8 h-8 text-secondary" />
          </FloatingElement>
          
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center mb-8"
            >
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                <Terminal className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Developer Community Platform</span>
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-4xl lg:text-6xl font-bold text-foreground mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Code Your Dreams,{' '}
              </motion.span>
              <br />
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                Vibe with Developers
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              개발자들이 함께 성장하는 커뮤니티. 질문하고, 배우고, 공유하며 
              여러분의 코딩 여정을 함께 만들어가세요.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/community"
                  className="inline-flex items-center px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium shadow-lg hover:shadow-xl"
                >
                  <Users className="h-5 w-5 mr-2" />
                  커뮤니티 참여하기
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/learn"
                  className="inline-flex items-center px-8 py-3 border border-border rounded-lg hover:bg-muted transition-colors font-medium shadow-lg hover:shadow-xl"
                >
                  <BookOpen className="h-5 w-5 mr-2" />
                  학습 시작하기
                </Link>
              </motion.div>
            </motion.div>

            {/* 스크롤 인디케이터 */}
            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="flex flex-col items-center text-primary">
                <span className="text-sm mb-2">아래로 스크롤</span>
                <ArrowRight className="w-5 h-5 rotate-90" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 주요 기능 섹션 */}
      <motion.section 
        className="py-20 bg-muted/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              개발자를 위한 <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">모든 것</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              질문부터 프로젝트 쇼케이스까지, 개발자가 필요한 모든 기능을 한 곳에서
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "활발한 커뮤니티",
                description: "질문하고 답변하며 개발자들과 지식을 공유하세요. 실시간으로 도움을 받고 다른 개발자들을 도와주세요.",
                link: "/community",
                linkText: "커뮤니티 둘러보기",
                color: "primary"
              },
              {
                icon: BookOpen,
                title: "체계적인 학습",
                description: "단계별 튜토리얼과 로드맵으로 체계적으로 학습하세요. 초보자부터 전문가까지 모든 레벨을 지원합니다.",
                link: "/learn",
                linkText: "학습 시작하기",
                color: "secondary"
              },
              {
                icon: Zap,
                title: "코딩 챌린지",
                description: "다양한 난이도의 알고리즘 문제로 실력을 키워보세요. 랭킹 시스템으로 다른 개발자들과 경쟁할 수 있습니다.",
                link: "/challenges",
                linkText: "챌린지 도전하기",
                color: "accent"
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="relative bg-background p-8 rounded-xl border border-border hover:shadow-2xl transition-all duration-500 overflow-hidden">
                    {/* 배경 그라데이션 */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    
                    <div className="relative z-10">
                      <motion.div 
                        className={`bg-${feature.color}/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon className={`h-6 w-6 text-${feature.color}`} />
                      </motion.div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">{feature.title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {feature.description}
                      </p>
                      <Link 
                        href={feature.link}
                        className={`inline-flex items-center text-${feature.color} hover:text-${feature.color}/80 font-medium transition-colors`}
                      >
                        {feature.linkText} <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* 통계 섹션 */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              개발자들이 <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">선택한</span> 플랫폼
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              실제 수치로 증명된 CodeVibe의 성장과 가치
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, number: 10000, suffix: '+', label: '활성 개발자', color: 'primary' },
              { icon: Coffee, number: 50000, suffix: '+', label: '해결된 질문', color: 'secondary' },
              { icon: Code, number: 1000000, suffix: '+', label: '코드 라인', color: 'accent' },
              { icon: Award, number: 500, suffix: '+', label: '프로젝트', color: 'green-500' },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <motion.div 
                    className={`bg-${stat.color}/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className={`h-8 w-8 text-${stat.color}`} />
                  </motion.div>
                  <div className={`text-3xl font-bold text-${stat.color} mb-2`}>
                    <AnimatedCounter end={stat.number} />
                    {stat.suffix}
                  </div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* CTA 섹션 */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center text-white relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              당신의 코딩 여정을<br />
              <span className="text-yellow-300">함께 시작하세요</span>
            </h2>
            <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
              전세계 개발자들과 소통하고 성장하는<br />
              특별한 경험을 지금 바로 시작해보세요
            </p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/signup"
                  className="inline-flex items-center bg-white text-primary hover:bg-yellow-50 px-12 py-5 rounded-full text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300"
                >
                  무료로 시작하기
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/community"
                  className="inline-flex items-center border-3 border-white text-white hover:bg-white hover:text-primary px-12 py-5 rounded-full text-xl font-bold transition-all duration-300"
                >
                  <Users className="h-5 w-5 mr-2" />
                  커뮤니티 둘러보기
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
