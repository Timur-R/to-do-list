import React from 'react';
import {useState} from "react";
import Header from "./Header";
import Form from "./Form";
import Todos from "./Todos";
function App(props) {
    const [todos, setTodos] = useState([
        {
            text: "Сделать домашку",
            favorite: false,
        },
        {
            text: "ТИмур сделай доп дз",
            favorite: true,
        },
        {
            text: "Выучить javaScript",
            favorite: false,
        }

    ]);
    const [text, setText] =useState("");
        const deleteTodo = (indexRemoving) => {
            const filtered = todos.filter((todo, index) => {
                if (index === indexRemoving) {
                    return false;

                }
                return true;
            });

            setTodos(filtered);
        };
    const makeFavorite = (indexRemoving) => {
        const newTodos = todos.map((item,  index) =>{
       if(indexRemoving === index) {
           return {
               ...item,
               favorite: !item.favorite
           }
       }return item;
       });
        setTodos(newTodos)
    }



    const newTodos = todos.map((todo, index) =>{



        return(
            <div className={`todo ${todo.favorite ? `selected` : ''}`}>
                <div className={"favorite"}>
                    <button onClick={() => makeFavorite(index)}>★</button>
                </div>
                <div className={"todo-text"}>
                    {todo.text}
                </div>
                <div className={"action"}>
                    <button onClick={() => deleteTodo(index)}>✖</button>
                </div>

            </div>)

    });

    const addTodo = () =>{
        setTodos([ {
            text: text,
            favorite: false
        },
            ... todos
        ]);
        setText("")
    }
    return (
        <div className="app">
           <Header />
         <Form text={text} setText={setText}
         addTodo={addTodo}/>

           <Todos todos={todos}
                  makeFavorite={makeFavorite}
                  deleteTodo={deleteTodo}/>

        </div>
    );
};





    export default App;
