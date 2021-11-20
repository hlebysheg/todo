import React, {useState} from "react";
import {iTodo} from "../../../interface/interface";
import TD from './todos.module.css'

export const Todo: React.FC<iTodo> = ({todo, onDelPress, id, isCompleteSet, isComplete}: iTodo) => {

    const delClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        onDelPress(id)
    }

    const setStyle = () => {
        isCompleteSet(id)
    }

    const style = isComplete?TD.complete: ''//complete style
    return (
        <div className={TD.container+ ' ' + style} onClick={setStyle}>
            {todo}
            <button className="action-button second" onClick={delClick}>
                <span className="icon"><span className="mif-cross"></span></span>
            </button>

        </div>
    )
}

