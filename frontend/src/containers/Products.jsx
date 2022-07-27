import React, { useState } from "react";
import "../styles/products.css";
import ProductCard from "../components/ProductCard";
import { jsPDF } from "jspdf";
import logo_base_64 from "../assets/data";
import Moralis from "moralis";

const Products = ({ products }) => {
  const handleBuy = async () => {
    //Create invoice pdf to be saved as NFT
    const doc = new jsPDF();
    doc.addImage(logo_base_64, "png", 10, 5);
    doc.text("Product Name: xyz", 10, 30);
    doc.text("Date of Purchase:" + new Date().toString(), 10, 40);
    doc.output("pdfobjectnewwindow");

    //Save file to IPFS
    const file = new Moralis.File("testNFT-acash1", doc.output("blob"));
    // await file.saveIPFS();
    // console.log(file.ipfs());

    //Mint NFT
  };

  return (
    <div className="products-view-container">
      {products.length === 0 ? (
        <div className="products-notFound">
          {"No products are available! Come back later :)"}
        </div>
      ) : (
        products.map((product) => {
          return (
            <ProductCard
              product={product}
              key={product.id}
              handleBuy={handleBuy}
            />
            // <h2 key={product.id}> {product.title}</h2>
          );
        })
      )}
    </div>
  );
};

export default Products;
