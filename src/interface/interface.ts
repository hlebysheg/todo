
export interface iTodosElem{
    todo: string
    isComplete: boolean
}

export interface iTodos {
    todos: Array<Array<iTodosElem>>
}

export interface iTodosPage {
    todos: Array<iTodosElem>
    onEntPress: Function
    onDelPress: Function
    isCompleteSet: Function
}

export interface iTodo{
    todo: string
    id: number
    isComplete: boolean
    onDelPress: Function
    isCompleteSet: Function
}

export type MyOption = {label: string, value: string}
