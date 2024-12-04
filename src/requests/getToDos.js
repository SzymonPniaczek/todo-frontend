import axios from "axios";

export const getToDos = async () => {
  const response = await axios.get(
    "https://todo-backend-one-ebon.vercel.app/todo"
  );
  return response.data;
};
