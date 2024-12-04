import axios from "axios";

export const deleteToDo = async (id) => {
  const response = await axios.delete(
    `https://todo-backend-git-main-pniaczekszymons-projects.vercel.app/todo/${id}`
  );
  return response.data;
};
