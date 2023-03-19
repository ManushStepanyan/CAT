import { FC, lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../constants/types";
import { clearCats, setPage } from "../store/actions";

const CatItem = lazy(() => import("./CatItem"));

const Cats: FC<{categoryId: number, categoryName: string}> = ({categoryId, categoryName}) => {
  const page = useSelector((state: AppState)  => state.page);
  const category = useSelector((state: AppState)  => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearCats());
  }, [category]);

  const onHandleClick = () => {
    dispatch(setPage(page + 1));
  };

  return (
    <span className="cats-container">
      <Suspense fallback={<div>Loading</div>}>
				<CatItem />
			</Suspense>
      {
        categoryId ? <button type="submit" onClick={onHandleClick} className='load-more'>
          Load More Cats
        </button> : null
      }
    </span>
  );
};

export default Cats;
