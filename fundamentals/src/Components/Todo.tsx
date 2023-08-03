// import { useState } from 'react';

// const TodoList = () => {
//   const [todos, setTodos] = useState([]);
//   const [inputValue, setInputValue] = useState('');

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const addTodo = () => {
//     if (inputValue.trim() === '') return;
//     setTodos([...todos, inputValue]);
//     setInputValue('');
//   };

//   const removeTodo = (index) => {
//     const newTodos = [...todos];
//     newTodos.splice(index, 1);
//     setTodos(newTodos);
//   };

//   return (
//     <div>
//       <h1>Todo List</h1>
//       <div>
//         <input type="text" value={inputValue} onChange={handleInputChange} />
//         <button onClick={addTodo}>Add</button>
//       </div>
//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>
//             {todo}
//             <button onClick={() => removeTodo(index)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TodoList;
