import React, { useEffect, useState } from "react";
import axiosInstance from "./helpers/axiosInstance";

const Viewproducts = () => {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/products")
      .then(x => setProducts(x.data))
      .catch(err => err);
  }, []);
  return (
    <div>
      <div id="container">
        {products.map(x => {
          return (
            <div id="cards">
              <img
                style={{ height: "200px", width: "200px" }}
                src={x.paddr}
                alt=""
              />
              <h3>Product Name : {x.pname}</h3>
            ₹  <h3 style={{ textAlign: "center" }}>Product Desc : {x.pdesc}</h3>
              <h3>Product Price. : Rs .{x.pprice}</h3>
              <h3>Product Qty : {x.pqty}</h3>
              <div>
                <button>EDIT</button>
                <button>DELETE</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Viewproducts;
