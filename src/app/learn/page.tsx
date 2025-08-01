import Link from 'next/link';
import { 
  PlayCircle, 
  Trophy, 
  Clock, 
  Users, 
  Star,
  ArrowRight,
  Zap,
  Target,
  User
} from 'lucide-react';

export default function LearnPage() {
  // 더미 데이터
  const featuredCourses = [
    {
      id: 1,
      title: "React 완전정복: 기초부터 고급까지",
      description: "React의 기본 개념부터 고급 패턴까지 체계적으로 학습하세요",
      instructor: "김개발",
      level: "초급",
      duration: "12시간",
      students: 1234,
      rating: 4.8,
      image: "/api/placeholder/300/200",
      tags: ["React", "JavaScript", "Frontend"],
      price: "무료"
    },
    {
      id: 2,
      title: "Next.js로 풀스택 웹앱 만들기",
      description: "Next.js와 TypeScript로 현대적인 웹 애플리케이션을 구축해보세요",
      instructor: "박풀스택",
      level: "중급",
      duration: "18시간",
      students: 892,
      rating: 4.9,
      image: "/api/placeholder/300/200",
      tags: ["Next.js", "TypeScript", "Fullstack"],
      price: "무료"
    },
    {
      id: 3,
      title: "알고리즘 & 자료구조 마스터",
      description: "코딩테스트와 면접 준비를 위한 필수 알고리즘 학습",
      instructor: "이알고",
      level: "중급",
      duration: "24시간",
      students: 2156,
      rating: 4.7,
      image: "/api/placeholder/300/200",
      tags: ["Algorithm", "DataStructure", "CodingTest"],
      price: "무료"
    }
  ];

  const roadmaps = [
    {
      title: "프론트엔드 개발자",
      description: "HTML/CSS부터 React까지",
      steps: 8,
      duration: "3-6개월",
      difficulty: "초급 → 중급",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "백엔드 개발자",
      description: "Node.js와 데이터베이스 마스터",
      steps: 10,
      duration: "4-8개월",
      difficulty: "초급 → 고급",
      color: "from-green-500 to-blue-600"
    },
    {
      title: "풀스택 개발자",
      description: "프론트엔드 + 백엔드 통합",
      steps: 12,
      duration: "6-12개월",
      difficulty: "중급 → 고급",
      color: "from-purple-500 to-pink-600"
    }
  ];

  const stats = [
    { label: "수강생", value: "10K+", icon: Users },
    { label: "강의", value: "200+", icon: PlayCircle },
    { label: "수료증", value: "5K+", icon: Trophy },
    { label: "평균 평점", value: "4.8", icon: Star }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary/10 to-primary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              체계적인 학습으로{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
                실력 향상
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              초보자부터 전문가까지, 단계별 학습 로드맵과 실습 중심의 커리큘럼으로 
              개발 실력을 체계적으로 키워보세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                <PlayCircle className="h-5 w-5 mr-2" />
                학습 시작하기
                <ArrowRight className="h-4 w-4 ml-2" />
              </button>
              <button className="inline-flex items-center px-8 py-3 border border-border rounded-lg hover:bg-muted transition-colors">
                <Target className="h-5 w-5 mr-2" />
                로드맵 보기
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 통계 섹션 */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* 로드맵 섹션 */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              학습 로드맵
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              목표에 맞는 체계적인 학습 경로를 선택하고 단계별로 실력을 쌓아가세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roadmaps.map((roadmap, index) => (
              <div
                key={index}
                className="relative bg-background border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${roadmap.color} opacity-5 rounded-xl`}></div>
                <div className="relative">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{roadmap.title}</h3>
                  <p className="text-muted-foreground mb-4">{roadmap.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">단계</span>
                      <span className="text-foreground font-medium">{roadmap.steps}개</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">예상 기간</span>
                      <span className="text-foreground font-medium">{roadmap.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">난이도</span>
                      <span className="text-foreground font-medium">{roadmap.difficulty}</span>
                    </div>
                  </div>

                  <button className="w-full py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                    로드맵 시작하기
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 인기 강의 섹션 */}
        <section>
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">인기 강의</h2>
              <p className="text-muted-foreground">가장 많은 수강생들이 선택한 강의들</p>
            </div>
            <Link 
              href="/learn/courses"
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
            >
              모든 강의 보기 <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-background border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* 강의 이미지 */}
                <div className="aspect-video bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center">
                  <PlayCircle className="h-16 w-16 text-primary/60" />
                </div>

                <div className="p-6">
                  {/* 강의 정보 */}
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      course.level === '초급' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' :
                      course.level === '중급' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400' :
                      'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                    }`}>
                      {course.level}
                    </span>
                    <span className="text-lg font-bold text-primary">{course.price}</span>
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {course.description}
                  </p>

                  {/* 태그 */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {course.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* 강사 및 메타 정보 */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{course.instructor}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  {/* 평점 및 수강생 수 */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{course.students.toLocaleString()}명 수강</span>
                    </div>
                  </div>

                  <button className="w-full py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                    강의 보기
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA 섹션 */}
        <section className="mt-20 bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            지금 바로 학습을 시작하세요
          </h2>
          <p className="text-xl text-white/90 mb-8">
            체계적인 커리큘럼과 실습 중심의 학습으로 개발자로 성장하세요
          </p>
          <button className="inline-flex items-center px-8 py-3 bg-white text-primary rounded-lg hover:bg-white/90 transition-colors font-medium">
            <Zap className="h-5 w-5 mr-2" />
            무료로 시작하기
          </button>
        </section>
      </div>
    </div>
  );
}