import React from "react";
import Header from "./components/header/Header";
import classes from "./App.module.scss";
import ToDoPanel from "./components/todoPanel/ToDoPanel";
import ToDoListt from "./components/todoList/ToDoListt";
import { getCheckedDate } from "./components/utils/getCheckedDate.js";

/**
 * Начальное значение листа с заданиями
 * @type {{
 * 	id: number,
 *		name: string,
 *		description: string,
 *		date: string,
 *		file: string,
 *		checked: boolean,
 * }[]}
 */
const DEFAULT_TODO_LIST = [
   {
      id: 1,
      name: "Задание 1",
      description: "Описание 1",
      date: "10-12-22",
      file: "C:/fakepath/6372969_loading_refresh_refresh button_reload_repeat_icon.png",
      checked: false,
   },
   {
      id: 2,
      name: "Задание 2",
      description: "Описание 2",
      date: "12-12-22",
      file: "C:/fakepath/markul_-_strely_(feat._tosya_chaikina)_muzati.net.mp3",
      checked: true,
   },
   {
      id: 3,
      name: "Задание 3",
      description: "Описание 3",
      date: "11-01-23",
      file: "",
      checked: false,
   },
];

const App = () => {
   const [todoIdForEdit, setTodoIdForEdit] = React.useState(null); // Устанавлевает id задания
   const [todos, setTodos] = React.useState(DEFAULT_TODO_LIST); // Устанавлевает список заданий

	/**
	 * Функция устанавлевает какое задание выбранно что бы его отредактировать
	 * @param {number} id Уникальный id выбранного задания
	 */
   const selectTodoIdForEdit = (id) => {
      setTodoIdForEdit(id);
   };

	/**
	 * Функция для удаления выбранного задания
	 * @param {number} id Уникальный id выбранного задания
	 */
   const deleteTodo = (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
   };

	/**
	 * Функция добавляет в конец списка новое задание
	 * @param {string} name Заголовок задания
	 * @param {string} description Описание задания
	 * @param {string} date Дата завершения задания
	 * @param {string} file Прикрепленный файл
	 */
   const addTodo = ({ name, description, date, file }) => {
      setTodos([
         ...todos,
         {
            id: todos[todos.length - 1].id + 1,
            description,
            name,
            date,
            file,
            checked: false,
         },
      ]);
   };

   getCheckedDate(todos); // Вызываем функцию для проверки прошедших дат

	/**
	 * Функция устанавливает какое задание отмечено или наоборот
	 * @param {number} id Уникальный id отмеченного задания
	 * @return {{
 	 * 	id: number,
	 *		name: string,
	 *		description: string,
	 *		date: string,
	 *		file: string,
	 *		checked: boolean,
	 * }} Задание каторое отмечено или наоборот
	 */
   const checkTodo = (id) => {
      setTodos(
         todos.map((todo) => {
            if (todo.id === id) {
               return { ...todo, checked: !todo.checked };
            }
            return todo;
         })
      );
   };

	/**
	 * Функция устанавливает какое задание надо изменить
	 * @param {string} name Заголовок задания
	 * @param {string} description Описание задания
	 * @param {string} date Дата завершения задания
	 * @param {string} file Прикрепленный файл
	 * @return {{
 	 * 	id: number,
	 *		name: string,
	 *		description: string,
	 *		date: string,
	 *		file: string,
	 * }} Измененное задание
	 */
   const changeTodo = ({ name, description, date, file }) => {
      setTodos(
         todos.map((todo) => {
            if (todo.id === todoIdForEdit) {
               return { ...todo, name, description, date, file };
            }
            return todo;
         })
      );
      setTodoIdForEdit(null);
   };

   return (
      <div className={classes.app_container}>
         <div className={classes.container}>
            <Header todoCount={todos.length} />
            <ToDoPanel mode="add" addTodo={addTodo} changeTodo={changeTodo}/>
            <ToDoListt
               todoIdForEdit={todoIdForEdit}
               todos={todos}
               deleteTodo={deleteTodo}
               checkTodo={checkTodo}
               selectTodoIdForEdit={selectTodoIdForEdit}
               changeTodo={changeTodo}
            />
         </div>
      </div>
   );
};

export default App;
