export const totalPrice = (data) => {
  var price = 0;

  for (let i = 0; i < data?.length; i++) {
    price += Number(data[i].price);
  }
  return price;
};

export const isLogin = () => {
  let token = localStorage.getItem("token");

  if (token) {
    return true;
  } else {
    return false;
  }
};
