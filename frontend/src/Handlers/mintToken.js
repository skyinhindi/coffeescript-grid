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

export default mintToken;
