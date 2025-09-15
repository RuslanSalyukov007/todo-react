import cross from './../../../public/img/svgicons/cross.svg'
import check from './../../../public/img/svgicons/check.svg'
import './style.scss'

const TodoList = ({setTodos, no, text, display}) => {


    const deleteBtn = (no) => {
       let data = JSON.parse(localStorage.getItem('todos'))
       data = data.filter((todo)=>todo.no!==no)
       setTodos(data) 
    }

    const toggle = (no) => {
        let data = JSON.parse(localStorage.getItem('todos'))
        for(let i = 0; i < data.length; i++) {
            if(data[i].no===no) {
                if(data[i].display === '') {
                    data[i].display = 'task__done'
                }
                else {
                    {
                        data[i].display = ''
                    }
                }
                break;
            }
        }
        setTodos(data)
    }

    return ( 
    <div>
        <div className={`todo__list-container ${display}`}>
            {display === '' ? <img src={cross} alt="" onClick={()=>{deleteBtn(no)}}/> : <img src={check} alt="" />}
            <h2 className="todo__list-title" onClick={()=>{toggle(no)}} >{text}</h2>
        </div>
    </div> 
    );
}
 
export default TodoList;