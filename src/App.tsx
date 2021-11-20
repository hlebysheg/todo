import React, {useEffect, useState} from 'react';
import './App.css';
import {Head} from "./Component/head/head";
import {TodoPage} from "./Component/todoPage/todoPage";
import {iTodos, MyOption} from "./interface/interface";
import Select from "react-select";

const options = [
    { value: '0', label: 'Понедельник' },
    { value: '1', label: 'Вторник' },
    { value: '2', label: 'Среда' },
    { value: '3', label: 'Четверг' },
    { value: '4', label: 'Пятница' },
    { value: '5', label: 'Суббота' },
    { value: '6', label: 'Воскресенье' },
]

const getTodos = () => {
    if(window.localStorage.getItem('Todos') !== null){
        return JSON.parse(window.localStorage.getItem('Todos') as string)
    }
    else {
        return { todos:[[], [], [],[],[],[],[]] }
    }
}

const App: React.FC = () => {

    useEffect(() => {
        setTodos(getTodos())
    }, []);

    //7-days todos variant
    const [todos, setTodos] = useState<iTodos>({
        todos:[[], [], [],[],[],[],[]]
    })

    const [day, setDay] = useState<number>(0)

    const onEntPress = (todo: string, numArray: number=day) => {
        setTodos(prevState => ({
            todos: prevState.todos.map((el, id)=>{
                return id === numArray? [...prevState.todos[numArray], {todo: todo, isComplete: false}]: el
            })
        }))
        localStorage.setItem('Todos', JSON.stringify(todos))//добавить добавление в стор для всех екшенов
    }

    const onDelPress = (id: number, numArray: number=day) => {
        setTodos(prevState => ({
            todos: prevState.todos.map((el, idAr)=>{
                return idAr === numArray? prevState.todos[numArray].filter((el, idd)=>{
                    return idd != id
                }): el
            })
        }))
    }

    const isCompleteSet = (id: number, numArray: number=day) => {
        setTodos(prevState => ({
            todos: prevState.todos.map((el, idAr)=>{
                return idAr === numArray? prevState.todos[numArray].map((el, idd)=>{
                    return idd === id? {todo: el.todo, isComplete: !el.isComplete}: el
                }): el
            })
        }))
    }

    const selectDay = (selected: MyOption| null) => {
        if(selected !== null){
            setDay(Number(selected.value))
        }
    }

    return (
        <>
            <Head/>
            <Select options={options} onChange={selectDay} isSearchable={false}/>
            <TodoPage todos = {todos.todos[day]} onEntPress = {onEntPress} onDelPress = {onDelPress} isCompleteSet = {isCompleteSet}/>
        </>
    );
}

export default App;
