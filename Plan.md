# CodeVibe 웹사이트 기획서

## 1. 프로젝트 개요
- **프로젝트명**: CodeVibe - Developer Community Platform
- **기술 스택**: Next.js 14 + Supabase + TypeScript + Tailwind CSS
- **목적**: 개발자 커뮤니티 및 코딩 교육 플랫폼

## 2. 타겟 사용자
- 신입 개발자 및 코딩 입문자
- 경력 개발자 (지식 공유 및 네트워킹)
- 코딩 부트캠프 및 교육 기관
- 프리랜서 개발자

## 3. 디자인 컨셉
### 컬러 팔레트
- **메인 컬러**: #7C3AED (보라색 - 코딩의 창의성)
- **서브 컬러**: #06B6D4 (사이안 - 기술의 신선함)
- **액센트 컬러**: #F59E0B (오렌지 - 열정과 에너지)
- **배경**: #0F172A (다크 네이비 - 코딩 환경)
- **텍스트**: #E2E8F0 (라이트 그레이)

### 디자인 스타일
- 개발자 친화적인 다크 테마
- 코드 에디터 스타일의 UI 요소
- 모던하고 깔끔한 레이아웃
- 문법 하이라이팅과 같은 코딩 요소 활용

## 4. 페이지 구조

### 4.1 메인 페이지 (/)
- **히어로 섹션**: "Code Your Dreams, Vibe with Developers"
- **인기 콘텐츠**: 트렌딩 글, 인기 튜토리얼
- **커뮤니티 활동**: 최신 질문, 답변, 토론
- **학습 경로**: 추천 코딩 로드맵
- **개발자 스팟라이트**: 주목받는 개발자

### 4.2 커뮤니티 (/community)
- **질문/답변**: 기술 Q&A 게시판
- **토론**: 개발 트렌드 및 기술 토론
- **프로젝트 쇼케이스**: 개발자 작품 공유
- **멘토링**: 멘토-멘티 매칭
- **이벤트**: 해커톤, 스터디 모임

### 4.3 학습센터 (/learn)
- **튜토리얼**: 단계별 학습 가이드
- **코딩 챌린지**: 알고리즘 문제 풀이
- **프로젝트 기반 학습**: 실전 프로젝트
- **기술 로드맵**: 언어/분야별 학습 경로
- **라이브 코딩**: 실시간 코딩 세션

### 4.4 개발자 프로필 (/profile/[username])
- **포트폴리오**: 프로젝트 및 경력
- **기술 스택**: 사용 기술 및 숙련도
- **기여 활동**: 커뮤니티 참여도
- **학습 진도**: 완료한 코스 및 챌린지
- **팔로워/팔로잉**: 네트워킹

### 4.5 코드 놀이터 (/playground)
- **온라인 에디터**: 웹 기반 코드 에디터
- **코드 공유**: 코드 스니펫 공유
- **라이브 컬래버레이션**: 실시간 협업 코딩
- **코드 리뷰**: 피어 리뷰 시스템

## 5. 컴포넌트 구조

### 5.1 공통 컴포넌트
- **Header**: 로고, 네비게이션, 검색, 프로필
- **Footer**: 커뮤니티 링크, 소셜 미디어
- **CodeEditor**: 온라인 코드 에디터
- **SyntaxHighlighter**: 코드 하이라이팅
- **TagSystem**: 기술 태그 시스템
- **VoteSystem**: 추천/비추천 시스템

### 5.2 페이지별 컴포넌트
- **PostCard**: 게시글 카드
- **ChallengeCard**: 코딩 챌린지 카드
- **TutorialStep**: 튜토리얼 단계
- **ProfileCard**: 개발자 프로필 카드

## 6. 데이터베이스 설계 (Supabase)

### 6.1 테이블 구조
```sql
-- 사용자 프로필 테이블
user_profiles (
  id: uuid PRIMARY KEY REFERENCES auth.users(id),
  username: text UNIQUE NOT NULL,
  display_name: text,
  bio: text,
  avatar_url: text,
  github_username: text,
  linkedin_url: text,
  website: text,
  location: text,
  tech_stack: text[],
  reputation: integer DEFAULT 0,
  created_at: timestamp,
  updated_at: timestamp
)

-- 게시글 테이블
posts (
  id: uuid PRIMARY KEY,
  author_id: uuid REFERENCES user_profiles(id),
  title: text NOT NULL,
  content: text NOT NULL,
  type: text NOT NULL, -- question, discussion, showcase, tutorial
  tags: text[],
  upvotes: integer DEFAULT 0,
  views: integer DEFAULT 0,
  is_solved: boolean DEFAULT false,
  created_at: timestamp,
  updated_at: timestamp
)

-- 댓글 테이블
comments (
  id: uuid PRIMARY KEY,
  post_id: uuid REFERENCES posts(id),
  author_id: uuid REFERENCES user_profiles(id),
  content: text NOT NULL,
  parent_id: uuid REFERENCES comments(id),
  upvotes: integer DEFAULT 0,
  is_accepted: boolean DEFAULT false,
  created_at: timestamp
)

-- 코딩 챌린지 테이블
coding_challenges (
  id: uuid PRIMARY KEY,
  title: text NOT NULL,
  description: text NOT NULL,
  difficulty: text NOT NULL, -- easy, medium, hard
  category: text,
  test_cases: jsonb,
  solution: text,
  created_by: uuid REFERENCES user_profiles(id),
  created_at: timestamp
)

-- 챌린지 제출 테이블
challenge_submissions (
  id: uuid PRIMARY KEY,
  challenge_id: uuid REFERENCES coding_challenges(id),
  user_id: uuid REFERENCES user_profiles(id),
  code: text NOT NULL,
  language: text NOT NULL,
  status: text, -- passed, failed, pending
  execution_time: integer,
  memory_usage: integer,
  created_at: timestamp
)

-- 튜토리얼 테이블
tutorials (
  id: uuid PRIMARY KEY,
  title: text NOT NULL,
  description: text,
  content: jsonb, -- 단계별 컨텐츠
  author_id: uuid REFERENCES user_profiles(id),
  difficulty: text,
  tags: text[],
  estimated_time: integer,
  upvotes: integer DEFAULT 0,
  created_at: timestamp
)

-- 팔로우 테이블
follows (
  id: uuid PRIMARY KEY,
  follower_id: uuid REFERENCES user_profiles(id),
  following_id: uuid REFERENCES user_profiles(id),
  created_at: timestamp,
  UNIQUE(follower_id, following_id)
)

-- 투표 테이블
votes (
  id: uuid PRIMARY KEY,
  user_id: uuid REFERENCES user_profiles(id),
  target_type: text NOT NULL, -- post, comment
  target_id: uuid NOT NULL,
  vote_type: text NOT NULL, -- upvote, downvote
  created_at: timestamp,
  UNIQUE(user_id, target_type, target_id)
)
```

## 7. 개발 우선순위

### Phase 1: 기본 구조 및 인증
1. Next.js 프로젝트 설정
2. Tailwind CSS + 다크 테마 설정
3. Supabase 인증 시스템
4. 기본 레이아웃 구성
5. 사용자 프로필 시스템

### Phase 2: 커뮤니티 기능
1. 게시글 CRUD 시스템
2. 댓글 시스템
3. 투표 시스템
4. 태그 시스템
5. 검색 기능

### Phase 3: 학습 기능 (향후)
1. 온라인 코드 에디터
2. 코딩 챌린지 시스템
3. 튜토리얼 시스템
4. 실시간 협업 기능

## 8. 특별 기능

### 8.1 코딩 관련 기능
- **문법 하이라이팅**: Prism.js 또는 Monaco Editor
- **코드 실행**: 온라인 코드 실행 환경
- **Git 연동**: GitHub 레포지토리 연결
- **코드 공유**: 코드 스니펫 임베드

### 8.2 커뮤니티 기능
- **평판 시스템**: 기여도 기반 점수
- **뱃지 시스템**: 성취도 기반 뱃지
- **멘토링 매칭**: AI 기반 멘토-멘티 매칭
- **실시간 채팅**: 개발자간 실시간 소통

### 8.3 학습 기능 (향후)
- **개인 맞춤 로드맵**: AI 기반 학습 경로 추천
- **진도 추적**: 학습 진행도 시각화
- **스터디 그룹**: 소규모 학습 모임
- **라이브 코딩**: 실시간 코딩 스트리밍

## 9. SEO 최적화
- 개발 관련 키워드 최적화
- 기술 태그 기반 SEO
- 사용자 생성 콘텐츠 최적화
- 구조화된 데이터 (개발자 프로필, 코딩 튜토리얼)

## 10. 성능 최적화
- 코드 하이라이팅 최적화
- 이미지 및 미디어 최적화
- 무한 스크롤링 구현
- 실시간 업데이트 최적화

## 11. 보안 고려사항
- 코드 실행 환경 샌드박싱
- XSS 방지 (사용자 입력 검증)
- SQL 인젝션 방지
- 사용자 인증 및 권한 관리

## 12. 배포 및 호스팅
- Vercel 배포
- Supabase 클라우드
- CDN 활용 (이미지, 정적 자원)
- 도메인 연결 및 SSL

## 13. 마케팅 및 성장
- 개발자 커뮤니티 홍보
- 소셜 미디어 연동
- 콘텐츠 마케팅 (기술 블로그)
- 인플루언서 협업 (유명 개발자)

## 14. 수익 모델 (향후)
- 프리미엄 멤버십
- 기업 채용 연동 서비스
- 광고 (개발 도구, 교육 서비스)
- 유료 코스 및 워크샵
