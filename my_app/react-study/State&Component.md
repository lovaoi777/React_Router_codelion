# State & Component 사용하기

## 목차

## 1. component에 대해 이해

<br>

## 2. state.props에 대한 이해

<br>

## 3. component의 효율적 활용

<br>

## 4. 실습

<br>

## 1. component에 대해 이해

### Component란 ?

#### 앱을 이루는 최소한의 단위

- UI는 재사용 가능한 개별적인 여러 조각으로 나누고 각 조각을 개별적으로 나누어 코딩
- props 혹은 state 값을 입려 받아 DOM 노드 생성
- 이름은 항상 대문자로 사용할것!!
  > 소문자로 시작하는 컴포넌트는 DOM 태그로 취급
- 재사용성이 용의 하다

1. Component의 선언 방식
   class / function
   클래스형 과 함수형

리액트 매뉴얼에서 권고하는 방식은
함수형 + Hooks

클래스형 컴포넌트

1. state 기능, 라이프 사이클 기능 제공
2. 임의 메서드 정의 가능
3. render 함수 필수
   :render 함수 내부에서 jsx 반환

함수형 컴포넌트

1. state, 라이프 사이클 api 사용 불가능
2. 배포 단계에서도 비교적 작은 파일 크기
3. 편한 선언, 비교적 적은 메모리 자원 사용

클래스형
class App extends Component{
render() {
return

h1멋대 프론트 /h1
}
}

함수형
function App(){
return

멋대 프론트
}

## props

### properties

컴포넌트 속성 설정 시에 사용하는 요소

특정값을 컴포넌트를 전해주기 위해 사용

props의 값은 부모 컴포넌트에서 설정해준다.
자식 컴포넌트를 수정하여 렌더링

### defaultProps

별도의 props 값이 없는 경우 보여주는 기본 값

## state

### 컴포넌트 내부에서 바뀔 수 있는 값

함수형 컴포넌트 -> useState라는 함수를 통해 사용한다
클래스형 컴포넌트 -> 지니고 있는 state

### useState 배열의 비구조화 할당

배열 안에 들어 있는 값을 쉽게 추출할 수 있는 문법

### useState 함수형 컴포넌트에서 state 사용하기

내장 Hooks
const [message , setMessage] = useState("초기값");

배열에 첫 번째 원소에는 현재 상태 저장
배열에 두 번째 원소에는 상태를 바꿔주는 setter 함수
함수 인자에는 상태의 초기값

### props 와 state 비교점

1. props

- 부모 컴포넌트로부터 자녀 컴포넌트에 데이터 등을 전달
- 읽기 전용으로 자녀 컴포넌트 입장에서 변동 없음

2. state

- 해당 컴포넌트 내부에서 데이터 전달
- 변경 가능함 (변경시 re-render)

Props와 state 모두 컴포넌트에서 사용하거나 렌더링 할 데이터를 담고 있어 비슷해 보일 수 있지만 역할은 다르다는 것을 알아두기

### 반복되는 형태의 코드

이에 대한 내용을 효율적으로 보여주고 관리하는 방법

## Map () 함수

### 파라미터로 전달된 함수로 배열 내 각 요소를 원하는 규칙에 따라 변환해 그 결과로 새로운 배열 생성

실행 방식
arr.map(callbackFunction(currentValue, index, array) , [thisArg])

1. callbackFunction : 새로운 배열 요소를 처리하는 함수
2. currentValue 현재 처리하고 있는 요소
3. Index : 현재 처리하고 있는 요소의 index 값b
4. array : 현재 처리하고있는 원본 배열

5. thisArg : callback 함수 내부에서 사용할 this 레퍼넌스

배열의 각 요소를 제곱한 새로운 배열 만들기
const number = [1,2,3,4,5]/;
const result = numbers.map(num=> num\*num);
comsole.log(result);

- numbers : 원본 배열
- num : 함수의 파라미터
- num \* num : 변환 규칙

## 리액트에서의 key

### 변동된 원소를 알아내기 위함

1. key가 없는 경우

- Virtual DOM을 비교하는 과정에서 리스트를 순차적으로 비교하면서 변화 감지

2. Key가 있는 경우

- Key값을 이용하여 변화를 빠르게 알아 낼수 있음

### Key 설정

- Map함수의 인자로 전달되는 함수 내부에서 컴포넌트 props를 설정하는 것과 같이 설정

const nameList = names.map((name,index) => <li Key={index}>{name}</li>)

- Key 값은 언제나 유일
- 데이터가 가진 고유의 값을 Key 값으로 설정

index : 키값
