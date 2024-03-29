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

export const saveOrder = (hash, tokenId, title, price, imageURI) => {
  const order = new Orders();

  const username = localStorage.getItem("username");

  order.set("UserName", username);
  order.set("WarrantyAddress", hash);
  order.set("TokenId", tokenId);
  order.set("Title", title);
  order.set("Date", getDate());
  order.set("Price", price);
  order.set("ImageUri", imageURI);

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
export const getOrders = async (user) => {
  const username = localStorage.getItem("username");

  const query = new Moralis.Query(Orders);
  query.equalTo("UserName", username);
  const results = await query.find();
  const orders = results.map((result) => result.attributes);
  // console.log(orders);
  return orders;
};
