import React from "react";
import * as dayjs from "dayjs";
import checked from "../../../assets/images/checked.png";
import classes from "../todoItem/ToDoItem.module.scss";
import Button from "../../button/Button";

/**
 * Компонент принимающий пропсы с функциями
 * @param {function} todo Задание
 * @param {function} deleteTodo Функция для удаления выбранного задания
 * @param {function} checkTodo Функция устанавливает какое задание отмечено или наоборот
 * @param {function} selectTodoIdForEdit Функция устанавлевает какое задание выбранно что бы его отредактировать
 */
const ToDoItem = ({ todo, deleteTodo, checkTodo, selectTodoIdForEdit }) => {
   return (
      <div className={classes.conteiner}>
         <div className={classes.todo__conteiner}>
            <div className={classes.img_checked__conteiner}>
               <div
                  onClick={() => checkTodo(todo.id)}
                  className={classes.img__checked}
               >
                  {todo.checked && <img src={checked} alt="" />}
               </div>
               <h2
                  onClick={() => checkTodo(todo.id)}
                  className={
                     !todo.checked
                        ? classes.todo_notChecked
                        : classes.todo_checked
                  }
               >
                  {todo.name}
               </h2>
               {todo.checked && (
                  <b className={classes.checked_visible_text}>
                     Задание выполнено или дата завершения истекла!
                  </b>
               )}
            </div>
            <div className={classes.todo__item}>
               <table
                  className={
                     !todo.checked ? classes.notChecked : classes.checked
                  }
               >
                  <thead>
                     <tr>
                        <td className={classes.td_header}>Заголовок</td>
                        <td className={classes.td_header}>Описание</td>
                        <td className={classes.td_header}>Дата завершения</td>
                        <td className={classes.td_header}>Файл</td>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td className={classes.td_body}>{todo.name}</td>
                        <td className={classes.td_body}>{todo.description}</td>
                        <td className={classes.td_body}>
                           {dayjs(todo.date).format("DD-MM-YYYY")}
                        </td>
                        <td className={`${classes.td_body} ${classes.file}`}>
                           {todo.file}
                        </td>
                     </tr>
                  </tbody>
               </table>
            </div>
            <div className={classes.todo_item_button_container}>
               <Button
                  color="orange"
                  onClick={() => selectTodoIdForEdit(todo.id)}
               >
                  Изменить
               </Button>
               <Button color="red" onClick={() => deleteTodo(todo.id)}>
                  Удалить
               </Button>
            </div>
         </div>
      </div>
   );
};

export default ToDoItem;
