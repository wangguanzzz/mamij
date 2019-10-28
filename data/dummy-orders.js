import Order from "../models/order";

const ORDERS = [
  new Order(
    "o1",
    "adq",
    "月子蒸",
    "https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_1280.jpg",
    new Date(),
    "IN_PROCESS"
  ),
  new Order(
    "o2",
    "adq",
    "汗蒸",
    "https://cdn.pixabay.com/photo/2015/10/03/02/14/pen-969298_1280.jpg",
    new Date(),
    "FINISHED"
  )
];

export default ORDERS;
