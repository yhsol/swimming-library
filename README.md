# Swimming Library

Swimming Library는 수영 기술을 향상시키기 위한 비디오와 리소스 모음을 제공하는 웹 애플리케이션입니다.

## 목차

- [소개](#소개)
- [기능](#기능)
- [기술 스택](#기술-스택)
- [시작하기](#시작하기)
- [프로젝트 구조](#프로젝트-구조)
- [기여하기](#기여하기)
- [라이선스](#라이선스)

## 소개

Swimming Library는 다양한 수영 스타일에 대한 교육 비디오를 제공합니다. 초보자부터 전문가까지 모든 수준의 수영인들이 자신의 기술을 향상시킬 수 있도록 도와줍니다.

## 기능

- 다양한 수영 스타일 (자유형, 접영, 배영, 평영) 비디오 제공
- YouTube와 Instagram 비디오 통합
- 반응형 디자인으로 모바일 및 데스크톱 지원
- 직관적인 네비게이션 및 사용자 인터페이스

## 기술 스택

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## 시작하기

1. 저장소를 클론합니다:

   ```
   git clone https://github.com/your-username/swimming-library.git
   ```

2. 프로젝트 디렉토리로 이동합니다:

   ```
   cd swimming-library
   ```

3. 의존성을 설치합니다:

   ```
   npm install
   ```

4. 개발 서버를 실행합니다:

   ```
   npm run dev
   ```

5. 브라우저에서 `http://localhost:3000`을 열어 애플리케이션을 확인합니다.

## 프로젝트 구조

- `app/`: Next.js 애플리케이션의 주요 디렉토리
  - `components/`: 재사용 가능한 React 컴포넌트
  - `data/`: 비디오 데이터
  - `swimming-styles/`: 각 수영 스타일별 페이지
  - `layout.tsx`: 전체 레이아웃 컴포넌트
  - `page.tsx`: 메인 페이지
- `public/`: 정적 파일 (이미지 등)

## 기여하기

프로젝트에 기여하고 싶으시다면:

1. 이 저장소를 포크합니다.
2. 새로운 기능 브랜치를 생성합니다 (`git checkout -b feature/AmazingFeature`).
3. 변경사항을 커밋합니다 (`git commit -m 'Add some AmazingFeature'`).
4. 브랜치에 푸시합니다 (`git push origin feature/AmazingFeature`).
5. Pull Request를 생성합니다.

## 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.
