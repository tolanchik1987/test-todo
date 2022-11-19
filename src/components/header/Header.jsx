import React from "react";
import classes from "./Header.module.scss";

const Header = ({ todoCount }) => {
   const countName = (todoCount === 0 || todoCount > 4) ? 'задач' : todoCount === 1 ? 'задача' : (todoCount > 1 && todoCount <= 4) ? 'задачи' : ""
   return (
      <div className={classes.conteiner}>
         <h1>Всего {todoCount} {countName}</h1>
      </div>
   );
};

export default Header;
