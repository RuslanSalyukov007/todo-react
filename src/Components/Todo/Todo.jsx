import { useState, useRef, useEffect } from 'react';
import TodoList from '../TodoList/TodoList';
import send from './../../../public/img/send4.svg'
import './style.scss'

let count = 0;

const Todo = () => {


    const [todos, setTodos] = useState([])
    const inputRef = useRef(null)

    const add = () => {
        if(inputRef.current.value === '') {
            let message = 'Введите название'
            alert(message)
        }
        else {
            setTodos([...todos,{no: count++, text: inputRef.current.value, display: ''}])
            inputRef.current.value = ''
            inputRef.current.focus()
        }
    }

    useEffect(()=> {
        setTimeout(()=> {
            localStorage.setItem('todos', JSON.stringify(todos))
        },100)
    },[todos]);

    useEffect(()=> {
        setTodos(JSON.parse(localStorage.getItem('todos')))
    },[])

    return ( 
        <div>

            <div className="todo">
                <h1 className="todo__title">My ToDo</h1>
                
                <form action="" className='form'>
                    <div className="form__group">
                        <input ref={inputRef} type="text" className='input' placeholder='ToDo List Description'/>
                        <img onClick={()=>{add()}} src={send} alt="" />
                    </div>
                </form>


                <div className="todo__list">
                    {todos.map((item, index)=>{
                        return <TodoList key={index} setTodos={setTodos} no={item.no} text={item.text} display={item.display} />
                    })}
                </div>
            </div>

        </div> 
    );
}
 
export default Todo;