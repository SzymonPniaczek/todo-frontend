import { useParams } from "react-router-dom";
import { setDateAndTime } from "../helpers/setDateAndTime";
import { getOneToDo } from "../requests/getOneToDo.js";
import { deleteToDo } from "../requests/deleteToDo.js";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
//import { updateTodo } from "../requests/updateToDo.js";

function OneToDo() {
  const { id } = useParams();
  const [element, setElement] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getOneToDo(id).then((response) => setElement(response));
  }, []);

  // useEffect(() => {
  //   console.log(element);
  // }, [element]);

  return (
    <>
      {element.createdAt && (
        <div className={"otodoObject"}>
          <div className={"todoTitle"}>{element.title}</div>
          <div className={"todoCategory"}>{element.category}</div>
          <div className={"todoDescription"}>{element.description}</div>
          <div className={"todoCreatedAtDate"}>
            {setDateAndTime(element.createdAt).date}{" "}
            {setDateAndTime(element.createdAt).time}
          </div>
        </div>
      )}
      <button
        onClick={() => {
          navigate(`/todo/edit/${id}`, {});
        }}
      >
        edit
      </button>
      <button
        onClick={() =>
          deleteToDo(id).then((response) => {
            navigate("/");
            if (response.message) alert(response.message);
            if (response.error) alert(response.error.message);
          })
        }
      >
        delete
      </button>
    </>
  );
}

export default OneToDo;
