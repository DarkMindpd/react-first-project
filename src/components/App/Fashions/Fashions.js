import { useEffect } from "react";
import { useState } from "react";
import Product from "./Product/Product";

const Fashions = ({ products }) => {
  return (
    <>
      <div className="mt-16">
        <h3 className="text-gray-600 text-2xl font-medium">Fashions</h3>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
          {products.map((e, i) => {
            return <Product key={i} product={e} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Fashions;
