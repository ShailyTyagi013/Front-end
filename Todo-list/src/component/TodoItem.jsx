import TodoItems from './TodoItems';
function TodoItem({todoItems}) {
 return (
    <>
    {todoItems.map(item => <TodoItems todoName={item.Name} 
    todoDate={item.Date}></TodoItems>)}
   
    </>
 )
}

export default TodoItem;