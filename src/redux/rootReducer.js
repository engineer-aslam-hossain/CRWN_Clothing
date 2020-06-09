import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import cartReducer from "../redux/cart/cartReducers";
import directoryReducer from "./directory/directoryReducer";
import shopReducer from "./shop/shopReducer";
export default combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});
