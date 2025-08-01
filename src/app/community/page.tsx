import Link from 'next/link';
import { 
  MessageSquare, 
  Users, 
  Calendar, 
  Award, 
  Search,
  Filter,
  Plus,
  Heart,
  MessageCircle,
  Eye,
  Clock,
  User
} from 'lucide-react';

export default function CommunityPage() {
  // 더미 데이터
  const trendingPosts = [
    {
      id: 1,
      title: "React 18의 새로운 기능들, 실제로 사용해보니...",
      author: "개발자김철수",
      category: "React",
      likes: 42,
      comments: 15,
      views: 324,
      timeAgo: "2시간 전",
      tags: ["React", "JavaScript", "Frontend"],
      type: "discussion"
    },
    {
      id: 2,
      title: "TypeScript 마이그레이션 질문드립니다",
      author: "코딩초보",
      category: "TypeScript",
      likes: 28,
      comments: 23,
      views: 156,
      timeAgo: "4시간 전",
      tags: ["TypeScript", "JavaScript"],
      type: "question"
    },
    {
      id: 3,
      title: "내가 만든 포트폴리오 사이트 피드백 부탁드려요!",
      author: "신입개발자",
      category: "Showcase",
      likes: 67,
      comments: 31,
      views: 489,
      timeAgo: "6시간 전",
      tags: ["Portfolio", "CSS", "Design"],
      type: "showcase"
    },
  ];

  const categories = [
    { name: "전체", count: 1247, icon: MessageSquare },
    { name: "질문/답변", count: 456, icon: MessageCircle },
    { name: "토론", count: 234, icon: Users },
    { name: "프로젝트 쇼케이스", count: 123, icon: Award },
    { name: "이벤트", count: 45, icon: Calendar },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              개발자 커뮤니티
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              질문하고, 답변하고, 함께 성장하는 개발자들의 공간
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                <Plus className="h-5 w-5 mr-2" />
                새 글 작성
              </button>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="커뮤니티에서 검색..."
                  className="pl-10 pr-4 py-3 w-full sm:w-80 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 사이드바 - 카테고리 */}
          <div className="lg:col-span-1">
            <div className="bg-muted/50 rounded-xl p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-foreground mb-4">카테고리</h3>
              <div className="space-y-2">
                {categories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <Link
                      key={category.name}
                      href={`/community/${category.name === '전체' ? '' : category.name.toLowerCase()}`}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-background transition-colors group"
                    >
                      <div className="flex items-center space-x-3">
                        <IconComponent className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
                        <span className="text-foreground group-hover:text-primary">{category.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground bg-background px-2 py-1 rounded">
                        {category.count}
                      </span>
                    </Link>
                  );
                })}
              </div>

              {/* 최근 활동 */}
              <div className="mt-8">
                <h4 className="text-md font-semibold text-foreground mb-4">최근 활동</h4>
                <div className="space-y-3">
                  <div className="text-sm">
                    <p className="text-muted-foreground">새로운 질문</p>
                    <p className="text-foreground font-medium">Next.js 배포 이슈</p>
                  </div>
                  <div className="text-sm">
                    <p className="text-muted-foreground">인기 토론</p>
                    <p className="text-foreground font-medium">2024 프론트엔드 트렌드</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 메인 컨텐츠 */}
          <div className="lg:col-span-3">
            {/* 필터 및 정렬 */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">인기 게시글</h2>
                <p className="text-muted-foreground">커뮤니티에서 가장 활발한 토론들</p>
              </div>
              <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                <button className="flex items-center space-x-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors">
                  <Filter className="h-4 w-4" />
                  <span>필터</span>
                </button>
                <select className="px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>최신순</option>
                  <option>인기순</option>
                  <option>댓글많은순</option>
                </select>
              </div>
            </div>

            {/* 게시글 목록 */}
            <div className="space-y-4">
              {trendingPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-background border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      {/* 게시글 타입 배지 */}
                      <div className="flex items-center space-x-2 mb-3">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          post.type === 'question' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400' :
                          post.type === 'discussion' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' :
                          'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400'
                        }`}>
                          {post.type === 'question' ? '질문' : 
                           post.type === 'discussion' ? '토론' : '쇼케이스'}
                        </span>
                        <span className="text-sm text-muted-foreground">{post.category}</span>
                      </div>

                      {/* 제목 */}
                      <h3 className="text-lg font-semibold text-foreground mb-2 hover:text-primary cursor-pointer">
                        {post.title}
                      </h3>

                      {/* 태그 */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md hover:bg-primary/10 hover:text-primary cursor-pointer"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* 메타 정보 */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <User className="h-4 w-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{post.timeAgo}</span>
                          </div>
                        </div>

                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Heart className="h-4 w-4" />
                            <span>{post.likes}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MessageCircle className="h-4 w-4" />
                            <span>{post.comments}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="h-4 w-4" />
                            <span>{post.views}</span>
                          </div>
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
                더 많은 게시글 보기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}