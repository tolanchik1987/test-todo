import * as dayjs from "dayjs";

/**
 * Функция устанавлевает что задание выполнено если дата истекла и они будут омечены
 * @param {{
 * 	id: number,
 *		name: string,
 *		description: string,
 *		date: string,
 *		file: string,
 *		checked: boolean,
 * }[]} todos Массив всех заданий
 * @return {{}} Задние у которых дата истекла будут отмечены
 */
export const getCheckedDate = (todos) => {
   todos &&
      todos.map((todo) => {
         if (dayjs(new Date()) >= dayjs(todo.date)) {
            return (todo.checked = true);
         }
         return todo;
      });
};
