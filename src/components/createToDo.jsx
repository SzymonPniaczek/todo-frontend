import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function CreateToDo() {
  const title = useRef();
  const description = useRef();
  const category = useRef();
  const navigate = useNavigate();

  const addToDo = () => {
    const newToDo = {
      title: title.current.value,
      description: description.current.value,
      category: category.current.value,
      username: "admin1",
      isDone: false,
    };
    axios
      .post(
        "https://todo-backend-git-main-pniaczekszymons-projects.vercel.app/todo",
        newToDo
      )
      .then(() => {
        navigate("/");
        alert("succesfull added new todo");
      });
  };

  return (
    <div className={"formContainer"}>
      <input type={"text"} placeholder={"title"} ref={title} />
      <input type={"text"} placeholder={"description"} ref={description} />
      <input type={"text"} placeholder={"category"} ref={category} />
      <button onClick={() => addToDo()}>ADD </button>
    </div>
  );
}

export default CreateToDo;
