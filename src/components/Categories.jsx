import React from "react";

function Categories() {
  const [activeCategory, setActiveCategory] = React.useState(0);

  const onClickCategory = (index) => {
    setActiveCategory(index);
  };

  let categories = [
    "All",
    "Vegetarian",
    "Mexicana",
    "Cheesebugrer",
    "Meaty",
    "BBQ",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((value, i) => (
          <li
            onClick={() => onClickCategory(i)}
            className={activeCategory === i ? "active" : ""}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
