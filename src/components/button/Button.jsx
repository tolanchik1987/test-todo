import React from "react";
import classes from "./Button.module.scss";

/**
 * Компонент принимающий пропсы
 * @param {string} color Цвет кнопки "Оранжевый" или "Голубой" или "Красный"
 * @param {string} children Название кнопки "Добавить" или "Изменить" или "Удалить"
 * @param {function} onClick  Функция в зависимиости от режима выполняет добавить или изменить выбранное задание
 * @returns Возвращает кнопку с названием "Добавить и цвет Голубой" или "Изменить и цвет Оранжевый" или "Удалить и цвет Красный"
 */
const Button = ({ color, children, onClick }) => {
   const className = `${classes.button} ${classes[`button_${color}`]}`; // Устанавливает стиль цвета кнопки

   return (
      <button className={className} onClick={onClick}>
         {children}  
      </button>
   );
};

export default Button;
