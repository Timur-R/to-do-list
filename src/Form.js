import React from 'react';

function Form(props) {
    return (
        <div className={"form"}>
            <input placeholder={"Введите текст"}
                   type={"text"}
                   value={props.text}
                   onChange={(e) =>props.setText(e.target.value)}/>
            <button onClick={props.addTodo}>Добавить</button>
        </div>    );
}

export default Form;