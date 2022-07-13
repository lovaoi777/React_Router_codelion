#JSX 실습 목표 정리

Dark Mode
Dark Mode와 Light Mode 조건부 렌더링 UI를 구현한다.

Loading
Loading Ture : 로딩중일 경우 로딩 이미지를 표시한다.
Loading False : 게시글을 표시한다.
Loading False && No Post : 로딩이 끝났지만 표시 할 포스트가 없을 경우 없다는 문구를 띄워준다.

file list

1. loading.svg : 로딩중일떄 사용되는 파일
2. index.css에 맨위에 import url은 구글폰트를 크롤링해온것이다. 설치하지않고 가져올수있다.

SlogunSection :

1. SlogunBIg 태그를 이용하여 메인안에 글짜를 대표 글짜를 지정해준다.
2. SlogunSmall : 위와같이 작은 글씨로 상단에 배치가 된다.

PostSection : 게시물의 확일할 구역

FontAwesomeIcon : FontAwesomeIcon 라이브러리 를 설치한 아이콘을 가지고올수있다.
아래와 같이 사용하면 된다.
<FontAwesomeIcon icon={faArrowsRotate} />

PostRepl : 댓글의 개수

PagenumberDiv : 현재 페이지의 수

GlobalStyles : 브라우저의 기본디자인을 여백을 무시하는 기능

ThemeProvider : 속성값으로 스타일을 받을수있다.
