# About Component 
1. TodoTemplate : 화면을 가운데에 정렬시켜 주며, 일정관리를 보여준다. children으로 내부 JSX를 props로 받아 와서 렌더링해 줍니다. 
2. TodoInsert : 새로운 항목을 입력하고 추가할 수 있는 컴포넌트입니다. state를 통해 인풋의 상태를 관리한다.
3. TodoListItem: 각 할 일 항목에 대한 정보를 보여주는 컴포넌트이다. Todo객체를 props로 받아 와서 상태에 따라 다른 UI를 보여줍니다. 
4. TodoList : todos 배열을 props로 받아 온 후, 이를 배열 내장 함수 map을 사용해서 여러개의 TodoListItem 컴포넌트로 반환해서 보여줌. 