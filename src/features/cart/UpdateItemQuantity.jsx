/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import {
  decreaseItemQuantity,
  getCurrentQuantityById,
  increaseItemQuantity,
} from "./cartSlice";

function UpdateItemQuantity({ pizzaId }) {
  const dispatch = useDispatch();
  const itemQuantity = useSelector(getCurrentQuantityById(pizzaId));
  //   console.log(itemQuantity);

  return (
    <div className="  flex items-center gap-1 md:gap-3">
      <Button
        type="round"
        onClick={() => {
          dispatch(decreaseItemQuantity(pizzaId));
        }}
      >
        -
      </Button>
      <p>{itemQuantity}</p>
      <Button
        type="round"
        onClick={() => {
          dispatch(increaseItemQuantity(pizzaId));
        }}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
