import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { getOneToDo } from "../requests/getOneToDo.js";
import { setDateAndTime } from "../helpers/setDateAndTime.js";
import { updateTodo } from "../requests/updateToDo.js";

function EditToDo() {
  const { id } = useParams();

  const [todo, setTodo] = useState({});
  const [updatedTodo, setUpdatedTodo] = useState({});

  const titleRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();

  const navigate = useNavigate();

  const apply = () => {
    setUpdatedTodo(() => {
      return {
        title: titleRef.current.value,
        description: descriptionRef.current.value,
        category: categoryRef.current.value,
      };
    });
  };

  useEffect(() => {
    if (updatedTodo.title) {
      updateTodo(todo._id, updatedTodo).then((response) => {
        if (response.error) {
          alert(`Error updating todo: ${response.error}`);
          return;
        }
        setUpdatedTodo({});
        navigate(`/todo/${id}`);
      });
    }
  }, [updatedTodo]);

  useEffect(() => {
    getOneToDo(id).then((response) => setTodo(response));
  }, []);

  return (
    todo.title && (
      <div className={"otodoObject"}>
        <div className={"todoTitle"}>
          <input type={"text"} defaultValue={todo.title} ref={titleRef} />
        </div>
        <div className={"todoCategory"}>
          <input type={"text"} defaultValue={todo.category} ref={categoryRef} />
        </div>
        <div className={"todoDescription"}>
          <input
            type={"text"}
            defaultValue={todo.description}
            ref={descriptionRef}
          />
        </div>
        <div className={"todoCreatedAtDate"}>
          {setDateAndTime(todo.createdAt).date}{" "}
          {setDateAndTime(todo.createdAt).time}
        </div>
        <button onClick={() => apply()}>apply</button>
      </div>
    )
  );
}

export default EditToDo;
