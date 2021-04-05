import React, { useEffect, useState } from "react";
import { formatApis } from "./utils";
import { apisMock } from "./mock";
import "./App.css";
import { Categories, ContentApis, Filters } from "./components";

function App() {
  const [apis, setApis] = useState([]);
  const [params, setParams] = useState({});
  const [categorySelected, setCategory] = useState("");

  const selectCategory = (category) => {
    setCategory(category);
  };

  const selectFilter = (e) => {
    setParams((oldParams) => {
      return { ...oldParams, [e.target.name]: e.target.value };
    });
  };

  useEffect(() => {
    setApis(formatApis(apisMock));
  }, []);

  return (
    <div>
      <div>
        <div style={{ maxWidth: 1200, width: "100%", margin: "0 auto 10px" }}>
          <div className="flex">
            <Categories selectCategory={selectCategory} activeCategory={categorySelected} />
            <ContentApis apis={apisMock} />
            <Filters selectFilter={selectFilter} params={params} />
          </div>
        </div>
      </div>
      <div style={{ background: "#fff" }}>Footer</div>
      <button
        onClick={() => {
          window.scroll({
            top: 0,
            behavior: "smooth",
          });
        }}
        style={{ position: "fixed", right: 20, bottom: 20 }}
      >
        ^
      </button>
    </div>
  );
}

export default App;
