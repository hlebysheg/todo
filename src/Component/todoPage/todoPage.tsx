import React, {useState} from "react";
import * as events from "events";
import {iTodosPage, MyOption} from "../../interface/interface";
import {Todo} from "./todos/Todos";
import Select from "react-select";

export const TodoPage: React.FC<iTodosPage> = ({todos, onEntPress, onDelPress, isCompleteSet}: iTodosPage) => {
    const [val, setVal] = useState<string>('')
    const [isError, setIsError] = useState<boolean>(false)

    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        setVal(e.currentTarget.value)
    }

    const enterDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter'){
            if(val != ''){
                onEntPress(val)
                setIsError(false)
            }
            else {
                setIsError(true)
            }
            setVal('')
        }
    }

    const el = todos.map((el, id) =>  <Todo todo={el.todo} key={id} id = {id} onDelPress={onDelPress} isComplete={el.isComplete} isCompleteSet = {isCompleteSet}/>)
    return (
        <div>
            <input className={''} type="text" data-role="input" data-prepend="Todo: " value={val} onChange={onChange} onKeyDown={enterDown} onClick={()=>setIsError(false)}/>
            {isError?<div className={'text-center fg-red'}>{'Вы не ввели Todo'}</div>:<div className={'text-center fg-black'}>{'Введите TODO'}</div>}
            {el}
        </div>
    )
}