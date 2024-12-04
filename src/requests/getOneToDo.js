import axios from "axios";

export const getOneToDo = async (id) => {
  const reponse = await axios.get(
    `https://todo-backend-git-main-pniaczekszymons-projects.vercel.app/todo/${id}`
  );
  return reponse.data;
};
