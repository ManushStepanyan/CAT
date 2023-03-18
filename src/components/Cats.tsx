import { FC, useEffect, useState } from "react";
import { Cat, Cates } from "../constants/types";

const Cats: FC<{categoryId: string, categoryName: string}> = ({categoryId, categoryName}) => {
  const [cats, setCats] = useState<Cates>([]);
  const fetchCats = () => {
    return fetch(
      `https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${categoryId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "text/plain",
        },
      }
    )
  };

  useEffect(() => {
    fetchCats().then((response) => {
      return response.json();
    })
    .then((data) => {
      setCats(data);
    });;
  }, [categoryId]);


  const onHandleClick = () => {
    fetchCats().then((response) => {
      return response.json();
    })
    .then((data) => {
      setCats((prevCats) => [...prevCats, ...data]);
    });;
  };

  return (
    <span className="cats-container">
      <h1>{categoryName}</h1>
      <article className="cats">
        {cats.map((cat: Cat) => (
          <img key={cat.id} src={cat.url} alt="error" />
        ))}
      </article>
      {
        +categoryId ? <button type="submit" onClick={onHandleClick} className='load-more'>
          Load More Cats
        </button> : null
      }
    </span>
  );
};

export default Cats;
