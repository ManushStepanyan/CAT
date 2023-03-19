import { FC } from "react";
import Cats from "./Cats";

const CategoryItems: FC<{ categoryId: number; categoryName: string }> = ({
  categoryId,
  categoryName,
}) => {
  return <Cats categoryId={categoryId} categoryName={categoryName} />;
};

export default CategoryItems;
