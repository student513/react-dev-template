# React Template

- typescript, babel, webpack, eslint가 세팅된 React 개발 템플릿입니다.

## 사용법

1. 레포지토리 클론하기
   `$ git clone https://github.com/student513/react-dev-template.git`
2. 원격저장소 초기화
   `$ git remote rm origin`
3. 내 레포지토리에 연결하기
   `$ git remote add origin https://github.com/---.git`

## Webpack Setting

- Typescript
- 절대경로 적용: `@/components/~~`
- 개발용 `webpack.config.dev.js`와 배포용 `webpack.config.prod.js` 설정 파일 분리

## Directory

- dist: 빌드 파일 생성 위치
- public: 템플릿 html 위치
- src: 소스 코드

## Eslint

- airbnb rule

## Command

- build
  `$ yarn build`
- start(port: 9000)
  `$ yarn start`

## Version

```
"webpack": "^5.28.0"
"webpack-cli": "^4.5.0"
"eslint": "^7.22.0"
"react": "^17.0.2"
"react-dom": "^17.0.2"
"typescript": "^4.2.3"
"node": "15.2.1"
```
