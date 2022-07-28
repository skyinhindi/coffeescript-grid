import Moralis from "moralis";

const transferOwnership = ( tokenId, recipient ) => {
    const options = {
        type: "erc721",
        receiver: recipient,
        contractAddress: "0x9e6062148fD8A12f22Ae047841a5D7FF95a3dcB0",
        tokenId: tokenId,
      };

      try {
        const transaction = await Moralis.transfer(options);
        console.log(transaction);
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
}

export default transferOwnership;