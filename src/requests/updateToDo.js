import axios from "axios";

export const updateTodo = async (id, todo) => {
  const response = await axios.put(
    `https://todo-backend-git-main-pniaczekszymons-projects.vercel.app/todo/${id}`,
    todo
  );
  return await response.data;
};
