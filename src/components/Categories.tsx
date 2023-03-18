import { FC, useEffect, useState } from "react";
import { Categoris, Category } from "../constants/types";
import Cats from "./Cats";

const Categories: FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>({
    id: 0,
    name: 'Choose Category',
  });
  const [categories, setCategories] = useState<Categoris>([]);
  const fetchCategories = () => {
    fetch("https://api.thecatapi.com/v1/categories")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCategories(data);
      });
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <div className="category-container">
        {categories?.map((category) => (
          <div key={category.id} className="category">
            <button onClick={() => setActiveCategory(category)}>{category.name}</button>
          </div>
        ))}
      </div>
      <Cats categoryId={activeCategory.id.toString()} categoryName={activeCategory.name} />
    </>
  );
};

export default Categories;
