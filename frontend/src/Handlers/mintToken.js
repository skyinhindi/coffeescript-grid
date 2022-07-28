import { useWeb3ExecuteFunction } from "react-moralis";
import Moralis from "moralis";

const mintToken = async (_uri, contractProcessor) => {
  await Moralis.enableWeb3();

  const options = {
    contractAddress: "0x491F4f144B777E3DD464930211906C5dbB9015Ad",
    functionName: "payToMint",
    abi: [
      {
        inputs: [{ type: "string", name: "metadataURI" }],
        name: "payToMint",
        outputs: [
          { internalType: "string", type: "string", name: "newItemId" },
        ],
        stateMutability: "payable",
        type: "function",
      },
    ],
    params: {},
    msgValue: Moralis.Units.ETH(0.01),
  };

  await contractProcessor.fetch({ params: options });

  return "success";
};

export default mintToken;
