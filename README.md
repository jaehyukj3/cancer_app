# 원티드 프리온보딩 프론트엔드 자유 개인 과제 cancer_app

국립암센터-국가암정보센터의 개방데이터와 보건복지부의 암 발생률 통계를 이용한 암 검색 및 암 차트 프로젝트 입니다.

## 개발자

장재혁

## 개발기간

2022-06-03 ~ 2022-06-05

## 사용 기술

Create React App, TypeScript, Sass(SCSS), React-router-dom, Recoil, lodash, classnames, Victory, ESLint, Stylelint, Prettier

## 1. 구현된 과제 확인 방법

### 1) Netlify로 배포된 페이지

https://aquamarine-raindrop-bc4e10.netlify.app/

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
<details>
<summary>폴더 구조</summary>
<div markdown="1">
    
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

- 📁routes

  - 라우팅 대상을 모아둔 폴더입니다.

- 📁recoil

  - recoil 관련된 파일들을 모아둔 폴더입니다.

- 📁styles

  - 전역 스타일링, 변수, mixins 등 전역에서 사용되는 스타일링 관련 파일들을 모아둔 폴더입니다.

- 📁types

  - 전역적으로 사용되는 타입을 모아둔 폴더입니다.

- 📁utils

  - data, fuzzy string matching 등 다양한 활용 요소들을 모아둔 폴더입니다.
</div>
</details>

## 구현 설명

### 암 검색

![cancer](https://user-images.githubusercontent.com/87752210/172032026-661cba44-a33c-45aa-9aeb-d9eb8f45895f.gif)

#### 추천 검색어

한글 fuzzystring 추천 검색어 기능을 구현하였습니다.

한국어의 경우 초성, 중성, 종성이 합쳐져 하나의 온전한 문자를 완성하는 특징이 있어 이와 다른 언어에서 사용되는 방식을 그대로 적용할 수 없어 관련 자료를 찾아 다음 링크를 참고했습니다.
[https://taegon.kim/archives/9919](https://taegon.kim/archives/9919)

자바스크립트에서 온전한 한글 문자의 코드는 다음과 같이 정해집니다.

> *( 자음번호 * 588 + 모음번호 * 28 + 종성번호 ) + 44032*

여기에 종성에만 사용가능한 ‘ㄳ’ 같은 경우를 고려하고 정규식에 사용되는 특수문자 처리를 위해 Lodash의 escapeRegExp() Method를 사용해 정규식을 생성하여 fuzzy string을 구현하였습니다.
그리고 split() 메소드와 mark 태그를 이용해 사용자가 입력한 질환명과 일치하는 부분을 볼드처리하였고, 입력된 검색어에 trim()과 replaceAll() 을 사용해 공백을 제거하여 띄어쓰기가 일치하지 않을 경우에도 검색 할 수 있게 구현하였습니다.

#### Recoil

검색어, 추천 검색어 리스트, 검색 결과 리스트에 Recoil을 이용하여 상태를 관리함으로써 다른 페이지로 이동 후 돌아오더라도 검색 결과가 유지될 수 있게 구현하였습니다.

### 암 차트

![cancerchart](https://user-images.githubusercontent.com/87752210/172032031-75168b67-67b1-4f62-8697-1914a849361a.gif)

Victory를 이용해 암종 별 발생비율, 조발생률, 연령표준화 발생률 차트를 구현하였습니다. 항목 수가 많아 툴팁을 이용해 자세한 정보를 확인할 수 있게 하였습니다.
* 발생비율: 암종 별 발생자 수를 비율로 나타낸 것.
* 조발생률: 해당 관찰기간동안 특정 인구집단에서 새롭게 발생한 암환자수를 전체인구로 나눈 값으로 일반적으로 인구 100,000명당 발생하는 비율. (명/10만명)
* 연령표준화발생률: 각 연령군에 해당하는 표준인구의 비율을 가중치로 주어 산출한 가중평균발생률로 연령 구조가 다른 지역간 혹은 기간별 암발생률을 비교하기 위해 사용. (명/10만명)

## 느낀 점

완전한 자유 과제였기에 무엇을 구현할지 고민이 많이 되었고 과제에 사용할 데이터를 찾는 데 많은 시간이 소요되었습니다.

팀 과제와 기간이 겹쳐 틈틈이 작업해야 했으며 한 번에 여러 프로젝트를 진행하는 것의 어려움을 느낄 수 있었습니다.

자신의 실력을 돌아볼 수 있는 경험이었습니다. 감사합니다.
