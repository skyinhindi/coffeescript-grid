import React, { useState } from "react";
import "../styles/Products.css";
import ProductCard from "../components/ProductCard";
import { jsPDF } from "jspdf";
import { logo_base_64, qr_base_64 } from "../assets/data";
import Moralis from "moralis";
import { useMoralis } from "react-moralis";

const getDate = () => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = today.getFullYear();
  today = dd + "/" + mm + "/" + yyyy;
  return today;
};

const Products = ({ products }) => {
  const { user } = useMoralis();

  const handleBuy = async (id, title) => {
    //Create invoice pdf to be saved as NFT
    const date = getDate();
    let shortTitle = title.substr(0, 50);
    shortTitle = shortTitle.substr(
      0,
      Math.min(shortTitle.length, shortTitle.lastIndexOf(" "))
    );

    const doc = new jsPDF();
    doc.addImage(logo_base_64, "png", 73, 5);
    doc.line(10, 20, 200, 20);
    doc.text(`Product ID: ${id}`, 10, 30);
    doc.text(`Product Name: ${shortTitle}`, 10, 40);
    doc.text(`Date of Purchase: ${date}`, 10, 50);
    doc.text(`Warranty Period: 6 months`, 10, 60);
    doc.text(`Owner: ${user.attributes.ethAddress}`, 10, 80);
    //doc.output("pdfobjectnewwindow");

    //Save invoice and metadata to IPFS
    const file = new Moralis.File("testNFT-acash1", doc.output("blob"));
    await file.saveIPFS();
    console.log(file.ipfs());
    const metadata = {
      transactionTitle: "",
      invoice: file.ipfs(),
    };
    const metadataFile = new Moralis.File("metadata.json", {
      base64: btoa(JSON.stringify(metadata)),
    });
    await metadataFile.saveIPFS();
    const metadataURI = metadataFile.ipfs();

    //Mint NFT
    const txn = await mintToken(metadataURI).then(
      console.log(`NFT Minted:${txn}`)
    );
  };

  const mintToken = async (_uri) => {
    const nft_contract_address = "0x0Fb6EF3505b9c52Ed39595433a21aF9B5FCc4431";
    const encodedFunction = window.ethereum.abi.encodeFunctionCall(
      {
        name: "mintToken",
        type: "function",
        inputs: [
          {
            type: "string",
            name: "tokenURI",
          },
        ],
      },
      [_uri]
    );

    const transactionParameters = {
      to: nft_contract_address,
      from: window.ethereum.selectedAddress,
      data: encodedFunction,
    };
    const txn = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    });
    return txn;
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
