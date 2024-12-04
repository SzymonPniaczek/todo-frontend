import axios from "axios";

export const updateTodo = async (id, todo) => {
  const response = await axios.put(
    `https://todo-backend-one-ebon.vercel.app/${id}`,
    todo
  );
  return await response.data;
};
