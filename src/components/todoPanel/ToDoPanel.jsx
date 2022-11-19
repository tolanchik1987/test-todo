import React from "react";
import Button from "../button/Button";
import classes from "./ToDoPanel.module.scss";

/**
 * Начальное значение заданиямя
 * @type {{
 *		name: string,
 *		description: string,
 *		date: string,
 *		file: string,
 * }}
 */
const DEFAULT_TODO = { name: "", description: "", date: "", file: "" };

const ToDoPanel = ({ mode, addTodo, changeTodo, editTodo }) => {
   const isEdit = mode === "edit"; // Проверяем режим на редактироване 
   const [todo, setTodo] = React.useState(isEdit ? editTodo : DEFAULT_TODO); // Выбранное задание взависимости от режима

   /**
    * Функция в зависимиости от режима выполняет добавить или изменить выбранное задание
    * @return {{
 	 * 	id: number,
	 *		name: string,
	 *		description: string,
	 *		date: string,
	 *		file: string,
	 * }} Возвращает измененное или добавленное задание
    */
   const onClick = () => {
      if (isEdit) {
         return changeTodo(todo);
      }
      addTodo(todo);
      setTodo(DEFAULT_TODO);
   };

   /**
    * Функция по изменению значений полей задания
    * @param {event} e Событие элемента поля задания
    */
   const onChange = (e) => {
      const { value, name } = e.target;
      setTodo({ ...todo, [name]: value });
   };

   return (
      <div className={classes.todo_panel_container}>
         <div className={classes.fields_container}>
            <div className={classes.field_container}>
               <label htmlFor="name">
                  <div>Задание</div>
                  <input
                     autoComplete="off"
                     id="name"
                     value={todo.name}
                     onChange={onChange}
                     name="name"
                     placeholder="Введите название задания!"
                  />
               </label>
            </div>
            <div className={classes.field_container}>
               <label htmlFor="description">
                  <div>Описание</div>
                  <input
                     autoComplete="off"
                     id="description"
                     value={todo.description}
                     onChange={onChange}
                     name="description"
                     placeholder="Введите описание!"
                  />
               </label>
            </div>
            <div className={classes.field_container}>
               <label htmlFor="date">
                  <div>Дата завершения</div>
                  <input
                     autoComplete="off"
                     id="date"
                     value={todo.date}
                     onChange={onChange}
                     name="date"
                     placeholder="Введите дату в формате ДД-ММ-ГГГГ!"
                  />
               </label>
            </div>
            <div className={classes.field_container}>
               <label htmlFor="file">
                  <div>Файл</div>
                  <input
                     className={classes.file}
                     id="file"
                     onChange={onChange}
                     name="file"
                     placeholder="Выберите файл!"
                     type="file"
                  />
               </label>
            </div>
         </div>
         <div className={classes.button_container}>
            {!isEdit && (
               <Button color="blue" onClick={onClick}>
                  Добавить
               </Button>
            )}
            {isEdit && (
               <Button color="orange" onClick={onClick}>
                  Изминить
               </Button>
            )}
         </div>
      </div>
   );
};

export default ToDoPanel;
