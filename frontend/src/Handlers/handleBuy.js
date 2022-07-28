import Moralis from "moralis";
import { jsPDF } from "jspdf";
import { logo_base_64, qr_base_64 } from "../assets/data";
import mintToken from "./mintToken";

const getDate = () => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = today.getFullYear();
  today = dd + "/" + mm + "/" + yyyy;
  return today;
};

const handleBuy = async (id, title, user, contractProcessor) => {
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
  await mintToken(metadataURI, contractProcessor);
};

export default handleBuy;
