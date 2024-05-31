import React, { useEffect, useState } from "react";
import ProductService from "@services/products";
import { IProduct } from "src/interfaces/common";
import ProductCard from "@components/common/ProductCard";

const Products = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const products = await ProductService.getProducts();
    if (products) {
      setProducts(products);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {products.map((obj, i) => {
          return (
            <ProductCard isCart={false} product={obj} key={`product-${i}`} />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
