# 원티드 프리온보딩 프론트엔드 자유 개인 과제

- 사용 기술: Create React App, TypeScript, Sass(SCSS), React-router-dom, Recoil, lodash, classnames, ESLint, Stylelint, Prettier

- 개발자: 장재혁

## 1. 구현된 과제 확인 방법

### 1) Netlify로 배포된 페이지
https://aquamarine-raindrop-bc4e10.netlify.app/cancerchart

전반적인 기능을 모두 사용해볼 수 있도록 Netlify로 배포하였습니다.

### 2) 레포지토리 클론

```
git clone https://github.com/jaehyukj3/cancer_app.git
cd cancer_app
yarn install
yarn start
```

코드를 더 면밀하게 살펴보기 위해 로컬 환경에서 실행해볼 수 있습니다.

## 2. 폴더 구조

```
src
│  index.tsx
│  logo.svg
│  react-app-env.d.ts
│  reportWebVitals.ts
│  setupTests.ts
│
├─assets
│  │  index.ts
│  │
│  └─svgs
│          magnifier-icon.svg
│
├─components
│  └─TabBar
│          BottomTab.module.scss
│          index.tsx
│
├─hooks
│  │  index.tsx
│  │  useFuzzyStringMatching.ts
│  │
│  └─state
│          index.ts
│
├─recoil
│      cancer.ts
│      
├─routes
│  │  index.jsx
│  │  Routes.module.scss
│  │
│  ├─Cancer
│  │  │  cancer.module.scss
│  │  │  index.tsx
│  │  │
│  │  ├─ResultList
│  │  │      index.tsx
│  │  │      resultList.module.scss
│  │  │
│  │  ├─SearchInput
│  │  │      index.tsx
│  │  │      searchInput.module.scss
│  │  │
│  │  └─SearchList
│  │          index.tsx
│  │          Match.tsx
│  │          searchList.module.scss
│  │
│  └─CancerChart
│      │  cancerChart.module.scss
│      │  index.tsx
│      │
│      ├─Chart
│      │      index.tsx
│      │
│      └─_utils
│              convertCancerData.ts
│
├─styles
│  │  index.js
│  │  index.scss
│  │
│  ├─base
│  │      _fonts.scss
│  │      _more.scss
│  │      _reset.scss
│  │
│  └─constants
│          _colors.scss
│
├─types
│      cancer.ts
│
└─utils
    │  index.ts
    │
    ├─data
    │      data.js
    │      rateData.js
    │
    └─fuzzystringmatching
            createFuzzyMatcher.ts
```

- 📁assets

  - 이미지나 아이콘과 같은 파일들을 모아둔 폴더입니다.

- 📁components

  - 화면을 구성하는데에 있어 필요한 컴포넌트들을 모아둔 폴더입니다.

- 📁hooks

  - Custom hooks를 모아둔 폴더입니다.

- 📁pages

  - 라우터를 기준으로 각각의 페이지를 모아둔 폴더입니다.

- 📁recoil

  - recoil 관련된 파일들을 모아둔 폴더입니다.

- 📁styles

  - 전역 스타일링, 변수, mixins 등 전역에서 사용되는 스타일링 관련 파일들을 모아둔 폴더입니다.

- 📁types

  - 전역적으로 사용되는 타입을 모아둔 폴더입니다.

- 📁utils

  - data, fuzzy string matching 등 다양한 활용 요소들을 모아둔 폴더입니다.

