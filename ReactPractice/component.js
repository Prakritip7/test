import {useState} from 'react'; 
function createInitialsTodos(){ 
    const initialTodos =[]; 
    for(let i=0; i<50; i++)
    { 
        initialTodos.push({
            id:i, 
            text: 'Item'+(i+1)

        });
    }
    return initialTodos;

}
export default funcion TodoList(){ 
    const [todos, setTodos]=useState(createInitialTodos); 
    cost [text, setText]=useState('');
    return (
<>
<input value={text}
onChange={e=>setText(e.target.value)} />
<button onClick={()=>{
    setText(''); 
    setTodos([{
        id:todos.length; 
        text:text
    },..
    ]);
}}>Add</button>

<ul>
{todos.map(item=>
    (
        <li key={item.id}>
        {item.text}
        </li>
    )}
    </ul>
    </>
    );
}