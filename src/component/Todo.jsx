// import { clear } from "@testing-library/user-event/dist/clear";
import React, { useState } from "react";
import style from "../component/todo.module.css";
const Todo = () => {
  let [input, setInput] = useState("");
  let [items, setItems] = useState([]);

  //! adding
  let addItem = () => {
    if (!input) {
    } else {
      setItems([...items, input]);
      setInput("");
    }
  };
  //!updating
  let change = name => {
    setInput(name);

    let updateValue = items.filter(m => m!= name);
    setItems(updateValue);
  };

  //!delete
  let deleteItem = ind => {
    console.log(ind);
    const update = items.filter((m, i) => ind !== i);
    setItems(update);
  };

  //! clear
  let clear = () => {
    setItems([]);
  };

  let Icon = (name, i) => {
    console.log(name);
    return <i class="fa-light fa-pen-to-square"></i>;
  };
  return (
    <section className={style.main}>
      <article className="child">
        <main className={style.card}>
          <h1>Todo App</h1>
          <div className={style.addItem}>
            <input
              type="text"
              placeholder="Add-item "
              value={input}
              onChange={e => setInput(e.target.value)}
            />
            <span>
              <i
                className="fa-solid fa-plus"
                title="Add item"
                onClick={addItem}
              ></i>
            </span>
          </div>
          <div className={style.showItem}>
            {items.map((ele, i) => {
              return (
                <div
                  className={style.each}
                  key={i}
                  onClick={() => Icon(ele, i)}
                >
                  <h3>{ele}</h3>
                  <div>
                    <span onClick={() => change(ele, i)}>
                      <i class="fa-solid fa-pen" title="Edit"></i>
                    </span>
                    <span>
                      <i
                        className="fa-solid fa-trash-can"
                        title="Delete Item"
                        onClick={() => deleteItem(i)}
                      ></i>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={style.btn}>
            {items.length == 0 ? (
              <span></span>
            ) : (
              <h1>{`You have ${items.length} pending Tasks`}</h1>
            )}
            <button onClick={clear}>Check List</button>
          </div>
        </main>
      </article>
    </section>
  );
};

export default Todo;
