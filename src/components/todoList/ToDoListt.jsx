import React from "react";
import ToDoPanel from "../todoPanel/ToDoPanel";
import ToDoItem from "./todoItem/ToDoItem";

/**
 * Компонент принимающий пропсы с функциями
 * @param {function} todos Список заданий
 * @param {function} todoIdForEdit Функция устанавлевает какое задание выбранно что бы его отредактировать
 * @param {function} changeTodo Функция устанавливает какое задание надо изменить
 * @param {function} deleteTodo Функция для удаления выбранного задания
 * @param {function} checkTodo Функция устанавливает какое задание отмечено или наоборот
 * @param {function} selectTodoIdForEdit Функция устанавлевает какое задание выбранно что бы его отредактировать
 */
const ToDoListt = ({
   todos,
   todoIdForEdit,
   changeTodo,
   deleteTodo,
   checkTodo,
   selectTodoIdForEdit,
}) => {
   return (
      <div>
         {todos.map((todo) => {
            if (todo.id === todoIdForEdit)
               return (
                  <ToDoPanel
                     key={todo.id}
                     mode="edit"
                     changeTodo={changeTodo}
                     editTodo={todo}
                  />
               );
            return (
               <ToDoItem
                  key={todo.id}
                  todo={todo}
                  deleteTodo={deleteTodo}
                  checkTodo={checkTodo}
                  selectTodoIdForEdit={selectTodoIdForEdit}
               />
            );
         })}
      </div>
   );
};

export default ToDoListt;
