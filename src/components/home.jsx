import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getToDos } from "../requests/getToDos";
import { setDateAndTime } from "../helpers/setDateAndTime";
import { updateTodo } from "../requests/updateToDo.js";

function Home() {
  const navigate = useNavigate();
  const [todo, setTodo] = useState([]);
  //const [toupdate, setToupdate] = useState({});
  const [searchParam, setSearchParam] = useState("");
  const searchCategoryRef = useRef();

  useEffect(() => {
    getToDos().then((response) => {
      setTodo(response);
      //setRecivedData(response);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   updateTodo(toupdate.id, { isDone: toupdate.isDone });
  // }, [toupdate]);

  useEffect(() => {
    console.log("todo: ", todo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todo]);

  const sortData = async (cat, param) => {
    const response = await getToDos();
    setTodo([...response.filter((element) => element[cat].includes(param))]);
  };

  return (
    <div className={"todosContainer"}>
      <div className={"searchForm"}>
        <input
          className={"sortInput"}
          type={"text"}
          placeholder={"search"}
          value={searchParam}
          onChange={(e) => setSearchParam(() => e.target.value)}
        />
        <select
          className={"sortSelect"}
          name="categpry"
          ref={searchCategoryRef}
        >
          <option value="title">title</option>
          <option value="category">category</option>
          <option value="description">description</option>
        </select>
        <button
          className={"sortButton"}
          onClick={() => sortData(searchCategoryRef.current.value, searchParam)}
        >
          sort
        </button>
        <button
          className={"resetButton"}
          onClick={() => getToDos().then((res) => setTodo(res))}
        >
          reset
        </button>
      </div>

      {todo.length > 0 ? (
        todo.map((element, k) => (
          <div className={"todoWrapper"} key={k}>
            <div
              className={"todoObject"}
              onClick={() => navigate(`/todo/${element._id}`)}
            >
              <div className={"todoTitle"}>{element.title}</div>
              <div className={"todoCategory"}>{element.category}</div>
              <div className={"todoDescription"}>{element.description}</div>
              <div className={"todoCreatedAtDate"}>
                {setDateAndTime(element.createdAt).date}{" "}
                {setDateAndTime(element.createdAt).time}
              </div>
            </div>
            <input
              type="checkbox"
              name="isCOmpleted"
              id="isCOmpleted"
              defaultChecked={element.isDone} //checked={}
              onChange={(e) => {
                //setToupdate({ id: element._id, isDone: e.target.checked });
                updateTodo(element._id, { isDone: e.target.checked });
              }}
            />
          </div>
        ))
      ) : (
        <h1>Nothing found</h1>
      )}
    </div>
  );
}

export default Home;
