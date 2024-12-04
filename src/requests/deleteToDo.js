import axios from "axios";

export const deleteToDo = async (id) => {
  const response = await axios.delete(
    `https://todo-backend-one-ebon.vercel.app/todo/${id}`
  );
  return response.data;
};
