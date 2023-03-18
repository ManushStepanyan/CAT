import { FC } from "react";
import Cats from "./Cats";

const CategoryItems: FC<{categoryId: string}> = ({categoryId}) => {
  return (
      <Cats categoryId={categoryId} categoryName="from suspend" />
  );
};

export default CategoryItems;
