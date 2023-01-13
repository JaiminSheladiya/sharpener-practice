import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const res = await fetch(
              "https://react-http-8f419-default-rtdb.firebaseio.com/cart.json"
            );
            if (!res.ok) throw new Error('Could not fetch cart data!')
            
            const data = await res.json()
            return data
        }
        try {
            
            const cartData = await fetchData();
            console.log(cartData)
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      )
            
        } catch (error) {
             dispatch(
               uiActions.showNotification({
                 status: "error",
                 title: "Error!",
                 message: "Fetching cart data failed.",
               })
             );
        }
    }
}


export const sendCartData = (cartData) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data.",
      })
    );
    const res = await fetch(
      "https://react-http-8f419-default-rtdb.firebaseio.com/cart.json",
      {
        method: "PUT",
        body: JSON.stringify(cartData),
      }
    );

    if (!res.ok) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed.",
        })
      );
    }

    dispatch(
      uiActions.showNotification({
        status: "success",
        title: "Success!",
        message: "Sent cart data successfully!",
      })
    );

    const data = await res.json();
  };
};
