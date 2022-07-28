import { useWeb3ExecuteFunction } from "react-moralis";
import Moralis from "moralis";
import Warranty from "../Warranty.json";

//Rinkeby contract address: 0x491F4f144B777E3DD464930211906C5dbB9015Ad
//Ropsten contract address : 0x9e6062148fD8A12f22Ae047841a5D7FF95a3dcB0

const mintToken = async (metadataURI, user, price) => {
  const web3Provider = await Moralis.enableWeb3();
  const ethers = Moralis.web3Library;

  const options = {
    contractAddress: "0x9e6062148fD8A12f22Ae047841a5D7FF95a3dcB0",
    functionName: "payToMint",
    abi: [
      {
        inputs: [
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "string",
            name: "metadataURI",
            type: "string",
          },
        ],
        name: "payToMint",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "payable",
        type: "function",
      },
    ],
    params: {
      recipient: user.attributes.ethAddress,
      metadataURI: metadataURI,
    },
    msgValue: Moralis.Units.ETH(price),
  };

  const transaction = await Moralis.executeFunction(options);

  return "success";
};

export default mintToken;
