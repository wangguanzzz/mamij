import AV from "../../components/UI/AV";
import Product from "../../models/product";

export const SET_PRODUCTS = "SET_PRODUCTS";

export const setProducts = () => {
  return async dispatch => {
    const res = [];
    const query = new AV.Query("Product");
    query.equalTo("ownerId", "system");
    const products = await query.find();

    products.forEach(prd => {
      const temp = new Product(
        prd.id,
        prd.get("ownerId"),
        prd.get("title"),
        prd.get("imageUrl"),
        +prd.get("price"),
        prd.get("description")
      );
      res.push(temp);
    });

    dispatch({ type: SET_PRODUCTS, products: res });
  };
};
