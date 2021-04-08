# ✨Westagram React Team Project

## 💻 구현사항

---

### 로그인 페이지

![Westagram loginpage](https://user-images.githubusercontent.com/60565155/113987430-5ccfdd00-9889-11eb-9685-8c1763e915a0.gif)

### 메인 페이지

![Westagram main page](https://user-images.githubusercontent.com/60565155/113988321-4fffb900-988a-11eb-90ae-596a56246980.gif)

## 🎈 주제

---

### JavaScript 라이브러리인 React를 이용하여 팀 프로젝트로 Instagram 클론 진행

- 처음 팀으로 진행하는 프로젝트로서 4명의 팀원들이 함께 공통 파일 관리 및 개인 작업 진행
- Git을 이용한 첫 번째 협업으로서 다양한 git 협업 상황 경험하며 프로젝트 진행

## ✔ 각 팀원 작업 진행 상황

---

- 공통
  - 로그인 페이지 레이아웃
  - 로그인 페이지 ID,Password 유효성 검사
  - 메인 페이지 레이아웃
  - 메인 페이지 Mock Data 활용한 피드 댓글 생성 및 피드 리스트 구현
- 김효진 님 : 코드 리뷰 반영하여 리팩토링 진행중
- 박성은 님 : 코드 리뷰 반영하여 리팩토링 진행중
- 서민석 님 : 코드 리뷰 반영하여 리팩토링 완료
- 채준형 님 : 코드 리뷰 반영하여 리팩토링 진행중

## 🔧 사용 기술 스택

---

- HTML
- Sass
- JavaScript (ES6 +)
- React, JSX

## ✏️ 진행 과정 (CRA, Git 등)

---

### CRA 초기 셋팅 : PM이 중심이 되어 CRA 초기 셋팅 진행

1. PM으로 선정된 팀원이 원하는 디렉토리를 설정하여 Create-react-app을 이용한 기본적인 React 틀 구현

- `npx create-react-app westagram-project`

2. React Router 라이브러리 설치
   - `npm install react-router-dom --save`
3. Sass 라이브러리 설치
   - `npm install node-sass@4.14.1 --save`
4. .eslintcache 파일을 .gitignore파일에 추가하여 github에 업로드되지 않도록 처리
5. CRA 폴더 및 파일 구성
   - src 폴더에서 images, Pages, Components, Styles폴더 및 Routes.js 파일 관리
   - Routes.js 및 common styling(common.scss, reset.scss) 파일을 공동으로 작업
   - src 폴더 내 Pages 폴더에서 각자의 이름으로 된 폴더를 생성
   - public 폴더에는 data폴더를 생성하여 추후 mock data를 이용을 위한 데이터 저장 공간 생성
6. 초기셋팅 완료 후 `git add, git commit -m "<커밋 메세지>"`를 이용하여 버전 관리 진행

### Git & Github

1. CRA 초기 셋팅 후 github에 new repository를 생성, 로컬 repository와 연동
   - `git remote add origin <원격저장소 url>`
2. 연동된 repository의 master 브랜치에 로컬 respository에서 진행한 내역을 업로드
   - `git push origin master`
3. 초기셋팅 작업이 master 브랜치로 merge 되면, PM 외 팀원들은 연동된 Github의 repository를 clone하여 다운받아 작업을 진행
   - `git clone <원격저장소 url>`
4. 기존 CRA 초기셋팅 때 프로젝트에 필요한 라이브러리들을 담고있는 node package modules가 다운받아지는데, 팀원들의 git clone작업 시에는 해당 모듈들이 포함되어있지 않으므로 npm install로 직접 모듈을 다운로드함
5. 이후 **master브랜치에서 작업을 하는 것이 아닌** 개인 브랜치를 생성(`git branch feature/name`)하여 해당 브랜치에서 작업 진행
6. 각자의 브랜치에서 작업 완료 후에 바로 git add,commit,push를 하지 않고 github master브랜치가 최신으로 update되었는지 확인 먼저 진행
7. **만약 master 브랜치가 update된 상황이라면** master 브랜치로 이동하여 `git pull origin master`명령어로 최신 버전의 master를 다운받은 후 다시 본인 브랜치로 이동하여 `git merge master`를 이용하여 master브랜치를 merge해줌 **(master브랜치가 update된 상황이 아니라면 바로 8번 작업 수행)**
8. 이후 본인의 브랜치에서 작업한 내용을 add,commit,push 진행
   - `git push origin feature/name`
9. push후 github에서 PR form 작성 후 Pull Request를 보내 master브랜치로의 merge를 요청함
10. 이후 본인 브랜치에서 새로운 작업이 진행되면 6번부터 반복 진행

## 📕 팀원별 프로젝트 후기

---

- 김효진 님: [효진님 블로그](https://velog.io/@jinjinhyojin)
- 박성은 님: [성은님 블로그](https://velog.io/@elena_park)
- 서민석 님: [민석님 블로그](https://velog.io/@minsoku03)
- 채준형 님: [준형님 블로그](https://velog.io/@hello1358)
