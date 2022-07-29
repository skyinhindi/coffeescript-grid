import Moralis from "moralis";

const Orders = Moralis.Object.extend("Orders");

const getDate = () => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = today.getFullYear();
  today = dd + "/" + mm + "/" + yyyy;
  return today;
};

export const saveOrder = (hash, tokenId, title, price) => {
  const order = new Orders();

  order.set("WarrantyAddress", hash);
  order.set("TokenId", tokenId);
  order.set("Title", title);
  order.set("Date", getDate());
  order.set("Price", price);

  order.save().then(
    (order) => {
      return true;
    },
    (error) => {
      console.log(error);
      return false;
    }
  );
};

//returns array with all orders, to access use results[i].attributes.propertyName
export const getOrders = async () => {
  const query = new Moralis.Query(Orders);
  const results = await query.find();
  const orders = results.map((result) => result.attributes);
  // console.log(orders);
  return orders;
};
