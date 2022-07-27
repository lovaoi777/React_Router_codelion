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

MPA ? SPA?

## MPA (Multiple Page Application)

사용자가 새로운 페이지를 요청할때마다 서버에서 데이터전달

단점 -상태 유지의 어려움 -불필요한 로딩

## SPA (Single Page Application)

하나의 페이지를 라우팅 하여 사용한다

Route 사용법
<Route path = "주소 규칙 " element={보여줄 컴포넌트} />

Link 사용법
a태그와 비슷하지만 페이지변환하는걸 방지함

<Link to = "주소 > </Link>

페이지 주소 정의
-URL 파라미터 예시 : /movies/1
ex) 특정 아이디, 이름을 사용하여 조회할 때 사용 -쿼리스트링 예시 : /movies/1?detail=true
ex) 키워드 검색, 페이지네이션, 옵션 전달

useEffect()란?

리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 실행 할 수 있도록 하는 Hook

형태
useEffect(function, deps)
-function : 수행하고자 하는 작업
-deps : 검사하고자 하는 값 또는 배열, 배열형태이다.

가장 처음 렌더링 될 때 한번만 실행 - 빈 배열 넣기
useEffect( function , [ ] )

특정 props 나 state가 바뀔 때 실행 - 특정 값 넣기
useEffect(function, [바뀌는 값]

useMome() 란 ?

성능 최적화를 위해 연산된 값을 재사용하게 해주는 Hook

형태
useMome ( function , deps)

- function : 어떤 연산을 할 지 정의하는 함수
- deps : 검사를 하고자 하는 값 또는 배열, 배열형태이다.

특정 값이 바귀면 함수를 호출하여 안산하고, 값이 바뀌지 않으면 재사용한다.

일반적인<form>의 방식

<form>
	<input type = "text" name="id" />
</form>

input창에 id값을 입력하면 id = 입력한 id 값

제어 컴포넌트(Controlled Component)
React에서 폼 (<input>. <textarea>, <select>) 에 발생하는 사용자 입력값을 제어하는 방식
