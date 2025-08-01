import Link from 'next/link';
import { 
  Trophy, 
  Target, 
  Clock, 
  Users, 
  Star,
  Play,
  CheckCircle,
  Zap,
  Award,
  Filter,
  Search
} from 'lucide-react';

export default function ChallengesPage() {
  // 더미 데이터
  const challenges = [
    {
      id: 1,
      title: "Two Sum",
      description: "배열에서 합이 target이 되는 두 숫자의 인덱스를 반환하세요",
      difficulty: "쉬움",
      category: "Array",
      submissions: 15420,
      successRate: 89,
      timeLimit: "1초",
      memoryLimit: "256MB",
      tags: ["Array", "Hash Table"],
      completed: true,
      liked: true
    },
    {
      id: 2,
      title: "Reverse Linked List",
      description: "연결 리스트를 역순으로 뒤집어 반환하는 함수를 작성하세요",
      difficulty: "쉬움",
      category: "Linked List",
      submissions: 12890,
      successRate: 76,
      timeLimit: "1초",
      memoryLimit: "256MB",
      tags: ["Linked List", "Recursion"],
      completed: false,
      liked: false
    },
    {
      id: 3,
      title: "Binary Tree Inorder Traversal",
      description: "이진 트리의 중위 순회 결과를 반환하는 함수를 구현하세요",
      difficulty: "보통",
      category: "Tree",
      submissions: 8950,
      successRate: 64,
      timeLimit: "2초",
      memoryLimit: "512MB",
      tags: ["Tree", "DFS", "Binary Tree"],
      completed: false,
      liked: true
    },
    {
      id: 4,
      title: "Longest Palindromic Substring",
      description: "문자열에서 가장 긴 회문 부분 문자열을 찾아 반환하세요",
      difficulty: "보통",
      category: "String",
      submissions: 7230,
      successRate: 45,
      timeLimit: "3초",
      memoryLimit: "512MB",
      tags: ["String", "Dynamic Programming"],
      completed: false,
      liked: false
    },
    {
      id: 5,
      title: "Median of Two Sorted Arrays",
      description: "두 정렬된 배열의 중앙값을 찾는 효율적인 알고리즘을 구현하세요",
      difficulty: "어려움",
      category: "Binary Search",
      submissions: 3450,
      successRate: 28,
      timeLimit: "2초",
      memoryLimit: "256MB",
      tags: ["Array", "Binary Search", "Divide and Conquer"],
      completed: false,
      liked: false
    },
    {
      id: 6,
      title: "Regular Expression Matching",
      description: "정규표현식 패턴 매칭을 구현하세요 ('.' 와 '*' 지원)",
      difficulty: "어려움",
      category: "Dynamic Programming",
      submissions: 2890,
      successRate: 22,
      timeLimit: "5초",
      memoryLimit: "1GB",
      tags: ["String", "Dynamic Programming", "Recursion"],
      completed: false,
      liked: false
    }
  ];

  const categories = [
    { name: "전체", count: 1247, color: "bg-gray-100 dark:bg-gray-800" },
    { name: "Array", count: 156, color: "bg-blue-100 dark:bg-blue-900/20" },
    { name: "String", count: 134, color: "bg-green-100 dark:bg-green-900/20" },
    { name: "Tree", count: 89, color: "bg-purple-100 dark:bg-purple-900/20" },
    { name: "Dynamic Programming", count: 67, color: "bg-red-100 dark:bg-red-900/20" },
    { name: "Graph", count: 45, color: "bg-yellow-100 dark:bg-yellow-900/20" },
  ];

  const userStats = {
    solved: 23,
    total: 1247,
    easyCount: 15,
    mediumCount: 6,
    hardCount: 2,
    rank: 1456,
    streak: 7
  };

  const getDifficultyBg = (difficulty: string) => {
    switch(difficulty) {
      case "쉬움": return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
      case "보통": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400";
      case "어려움": return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-accent/10 to-primary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="bg-primary/10 p-4 rounded-full">
                <Trophy className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              코딩 챌린지
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              알고리즘 문제를 풀어보며 코딩 실력을 향상시키고 다른 개발자들과 경쟁해보세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                <Play className="h-5 w-5 mr-2" />
                첫 번째 문제 풀어보기
              </button>
              <Link
                href="/challenges/random"
                className="inline-flex items-center px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors"
              >
                <Zap className="h-5 w-5 mr-2" />
                랜덤 문제
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 사이드바 */}
          <div className="lg:col-span-1">
            {/* 사용자 통계 */}
            <div className="bg-muted/50 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <Award className="h-5 w-5 mr-2 text-primary" />
                내 진행상황
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">해결한 문제</span>
                    <span className="font-semibold text-foreground">{userStats.solved}/{userStats.total}</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{ width: `${(userStats.solved / userStats.total) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-green-100 dark:bg-green-900/20 rounded-lg p-2">
                    <div className="text-lg font-bold text-green-600 dark:text-green-400">{userStats.easyCount}</div>
                    <div className="text-xs text-green-600 dark:text-green-400">쉬움</div>
                  </div>
                  <div className="bg-yellow-100 dark:bg-yellow-900/20 rounded-lg p-2">
                    <div className="text-lg font-bold text-yellow-600 dark:text-yellow-400">{userStats.mediumCount}</div>
                    <div className="text-xs text-yellow-600 dark:text-yellow-400">보통</div>
                  </div>
                  <div className="bg-red-100 dark:bg-red-900/20 rounded-lg p-2">
                    <div className="text-lg font-bold text-red-600 dark:text-red-400">{userStats.hardCount}</div>
                    <div className="text-xs text-red-600 dark:text-red-400">어려움</div>
                  </div>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">순위</span>
                  <span className="font-semibold text-foreground">#{userStats.rank.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">연속 해결</span>
                  <span className="font-semibold text-foreground">{userStats.streak}일</span>
                </div>
              </div>
            </div>

            {/* 카테고리 필터 */}
            <div className="bg-muted/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">카테고리</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-background transition-colors group"
                  >
                    <span className="text-foreground group-hover:text-primary">{category.name}</span>
                    <span className="text-sm text-muted-foreground bg-background px-2 py-1 rounded">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 메인 컨텐츠 */}
          <div className="lg:col-span-3">
            {/* 검색 및 필터 */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">문제 목록</h2>
                <p className="text-muted-foreground">총 {challenges.length}개의 문제</p>
              </div>
              <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="문제 검색..."
                    className="pl-10 pr-4 py-2 w-64 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <button className="flex items-center space-x-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors">
                  <Filter className="h-4 w-4" />
                  <span>필터</span>
                </button>
              </div>
            </div>

            {/* 문제 목록 */}
            <div className="space-y-4">
              {challenges.map((challenge) => (
                <div
                  key={challenge.id}
                  className="bg-background border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-3">
                        {/* 완료 상태 */}
                        {challenge.completed ? (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        ) : (
                          <div className="h-5 w-5 border-2 border-muted rounded-full"></div>
                        )}
                        
                        {/* 문제 번호 */}
                        <span className="text-sm text-muted-foreground">#{challenge.id}</span>
                        
                        {/* 난이도 */}
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getDifficultyBg(challenge.difficulty)}`}>
                          {challenge.difficulty}
                        </span>
                        
                        {/* 카테고리 */}
                        <span className="text-sm text-muted-foreground">{challenge.category}</span>
                      </div>

                      {/* 제목 */}
                      <h3 className="text-lg font-semibold text-foreground mb-2 hover:text-primary cursor-pointer">
                        {challenge.title}
                      </h3>

                      {/* 설명 */}
                      <p className="text-muted-foreground mb-4 line-clamp-2">
                        {challenge.description}
                      </p>

                      {/* 태그 */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {challenge.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md hover:bg-primary/10 hover:text-primary cursor-pointer"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* 메타 정보 */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Users className="h-4 w-4" />
                            <span>{challenge.submissions.toLocaleString()}명 도전</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Target className="h-4 w-4" />
                            <span>성공률 {challenge.successRate}%</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{challenge.timeLimit}</span>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <button 
                            className={`p-2 rounded-lg transition-colors ${
                              challenge.liked 
                                ? 'text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20' 
                                : 'text-muted-foreground hover:bg-muted'
                            }`}
                          >
                            <Star className={`h-4 w-4 ${challenge.liked ? 'fill-current' : ''}`} />
                          </button>
                          <Link
                            href={`/challenges/${challenge.id}`}
                            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                          >
                            도전하기
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 더보기 버튼 */}
            <div className="text-center mt-8">
              <button className="px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors">
                더 많은 문제 보기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}