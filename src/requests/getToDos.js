import axios from "axios";

export const getToDos = async () => {
  const response = await axios.get(
    "https://todo-backend-git-main-pniaczekszymons-projects.vercel.app/todo"
  );
  return response.data;
};
