import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Route, Routes } from "react-router-dom";
import { AppState, Category } from "../constants/types";
import { setAllCategories, setCategory } from "../store/actions";
import Cats from "./Cats";
import Home from "./Home";

const Categories: FC = () => {
  const categories = useSelector((state: AppState) => state.allCategories);
  const category = useSelector((state: AppState) => state.category);
  const dispatch = useDispatch();

  const fetchCategories = () => {
    fetch("https://api.thecatapi.com/v1/categories")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(setAllCategories(data));
      });
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const onHandleCategoriesClick = (category: Category) => {
    dispatch(setCategory(category));
  };

  return (
    <>
      <div className="category-container">
        {categories?.map((category) => (
          <div key={category.id} className="category">
            <Link to={`/${category.name}`}>
              <button
                onClick={() => onHandleCategoriesClick(category)}
                className="category-button"
              >
                {category.name}
              </button>
            </Link>
          </div>
        ))}
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path={`/${category.name}`}
          element={
            <Cats categoryId={category.id} categoryName={category.name} />
          }
        />
      </Routes>
    </>
  );
};

export default Categories;
