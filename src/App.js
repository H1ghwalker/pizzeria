import React from "react";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";
import "./scss/app.scss";

function App() {
  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    fetch("https://65070a693a38daf4803f07a0.mockapi.io/pizzas")
      .then((response) =>  response.json())
      .then((array) => {
        setPizzas(array);
      });
  }, []); // [] that means when first rendering 

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">All pizzas</h2>
          <div className="content__items">
            {pizzas.map((obj) => (
              <PizzaBlock key={obj.id} {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
