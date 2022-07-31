import Moralis from "moralis";

const verifyOwnership = async (tokenID) => {
  const options = {
    address: "0x9e6062148fD8A12f22Ae047841a5D7FF95a3dcB0",
    token_id: tokenID,
    chain: "ropsten",
  };
  const tokenIdOwners = await Moralis.Web3API.token.getTokenIdOwners(options);
  const owner = tokenIdOwners.result[0].owner_of;
  const current = localStorage.getItem("eth_address");

  if (owner == current) return true;
  else return false;
};
