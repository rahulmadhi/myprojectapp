import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosInstance from "./helpers/axiosInstance";

const Addproducts = () => {
  let navigate = useNavigate();
  let [products, setProducts] = useState({});

  let handleChange = e => {
    setProducts({ ...products, [e.target.name]: e.target.value });
  };

  let handleSubmit = e => {
    e.preventDefault();
    let payload = products;
    axiosInstance.post("/products", payload);
    toast.success(`Product added successfully`);
   
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <h2>ADD PRODUCT </h2>
        <div className="items">
          <label htmlFor="pname"> Product Name :</label>
          <input
            required
            id="pname"
            type="text"
            name="pname"
            onChange={handleChange}
          />
        </div>
        <div className="items">
          <label htmlFor="pdesc"> Product Description :</label>
          <input
            required
            id="pdesc"
            type="text"
            name="pdesc"
            onChange={handleChange}
          />
        </div>
        <div className="items">
          <label htmlFor="pprice"> Product Price :</label>
          <input
            required
            id="pprice"
            type="text"
            name="pprice"
            onChange={handleChange}
          />
        </div>
        <div className="items">
          <label htmlFor="pqty"> Product Quantitty :</label>
          <input
            required
            id="pqty"
            type="text"
            name="pqty"
            onChange={handleChange}
          />
        </div>
        <div className="items">
          <label htmlFor="paddr"> Product Image Address :</label>
          <input
            required
            id="paddr"
            type="text"
            name="paddr"
            onChange={handleChange}
          />
        </div>

        <div className="items">
          <button>ADD PRODUCT</button>
          <button>CANCEL</button>
        </div>
      </form>
    </div>
  );
};

export default Addproducts;
