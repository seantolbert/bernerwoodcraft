import React from "react";
import {cuttingBoards} from "../dummy/boards";

const ProductsPage: React.FC = () => {
  return (
    <div>
      <h2>Cutting Boards</h2>
      <ul>
        {cuttingBoards.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
