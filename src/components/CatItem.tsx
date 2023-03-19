import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppState, Cat } from "../constants/types";
import { setCats } from "../store/actions";

const CatItem: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const page = useSelector((state: AppState) => state.page);
  const cats = useSelector((state: AppState) => state.cats);
  const category = useSelector((state: AppState) => state.category);

  const fetchCats = () => {
    fetch(
      `https://api.thecatapi.com/v1/images/search?limit=10&page=${page}&category_ids=${category.id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "text/plain",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(setCats(data));
      });
  };

  useEffect(() => {
    fetchCats();
  }, [category, page]);

  return (
    <>
      <button className= "go-back" type="button" onClick={() => navigate('..')}> &lt; Go back</button>
      <article className="cats">
        {cats.map((cat: Cat) => (
          <img key={cat.id} src={cat.url} alt="error" />
        ))}
      </article>
    </>
  );
};

export default CatItem;
