#Konkuk Likealion Homework1
##Song Jiyeon

### 1. 과제의 시작
과제를 하기위해 한 주간 배운 것을 다시 확인하였다.
설명이 기억 안나는 부분은 구글 검색을 참고하였다.
keyword는 javascript, 부트스트랩
알아낸 것은
	1. getbootstrap 이용법
	2. js 찾아서 script로 사용하기

### 2. 과제
#### 1. 처음
이전에 쇼핑몰 홈페이지에서 본 스크롤로 한 페이지 씩 넘기는 기능을 사용하고 싶었다.
 검색 결과, scrollmagic 이라는 자바스크립트 라이브러리(?)였다.
 무료로 제공하는 페이지에서 링크와 사용법을 보았다.
 ++http://scrollmagic.io/docs/++ ~<-이곳~
 
 cdn으로 제공한다고 해서
 ++http://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min.js++
 의 주소를 복사해 script src에 넣었지만 실패하였다.
 
 더 자세히 읽었더니 Usage에 var 등 js 파일에서 보았던 것들이 있어서 js 파일에 복사해보았다.
 
 멀쩡히 있던 div들 마저 사라졌다. 일단 보류하기로 한다.
 
 #### 2. 중간
 js를 사용해야하는데 글이 옆으로만 붙는다.
 일단 html에 써두긴 하는데 다른 부트스트랩도 적용이 안된다.
 다 지우고 똑같이 다시 써보고 테스트 파일도 만들어서 해봤지만 안뜬다. 문제가 뭔지 몰라서 질문을 못했다. 일단 html로만 만든 임시 페이지 두고 방법을 더 찾기로 한다.
 
 #### 3. 결말
 부트스트랩 cdn을 깜빡한거였다. 엄청 잘돌아갔다.
 js는 유튜브 수업으로 각자 다른 곳에 붙일 수 있단 걸 알았다.
 사용한 부트스트랩 기능은 media object. 다른건 쓸만한걸 못찾았다. page 단위로 만들어둬서 scrollmagic 쓰고싶다. 더 해볼 것이다.