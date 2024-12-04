import axios from "axios";

export const getOneToDo = async (id) => {
  const reponse = await axios.get(
    `https://todo-backend-one-ebon.vercel.app/todo/${id}`
  );
  return reponse.data;
};
