import React, { useCallback, useRef, useState } from 'react';
import TodoTemplate from './Components/TodoTemplate';
import TodoInsert from './Components/TodoInsert';
import TodoList from './Components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '알고리즘 공부하기',
      checked: true,
    },
    {
      id: 2,
      text: 'React 공부하기',
      checked: true,
    },
    {
      id: 3,
      text: '요가하기',
      checked: false
    },
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback(text => {
    debugger;
    const todo = {
      id: nextId.current,
      text,
      checked: false
    };
    setTodos(todos.concat(todo));
    nextId.current += 1;
  }, [todos]);

  const onRemove = useCallback(id => {
    console.log(id);
    setTodos(todos.filter(todo => todo.id !== id));
  },
    [todos],
  );


  return (
    <TodoTemplate>
      {/* form 리턴값을 받음 */}
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} />
    </TodoTemplate>
  );
};


export default App;