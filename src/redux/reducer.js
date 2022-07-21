import { ADDTOBASKET, REMOVEFROMBASKET } from "./types";
import { addToBasket, removeFromBasket } from "./action";

const initialState = {
    data: [],
    itemAdded: [],
    itemRemoved:[]
}

export const stateReducer = (action, state = initialState) => {
   switch (action.type) {
       case addToBasket: return {
           ...state, itemAdded:[...state.itemAdded,action.payload]
       }   
           break;
   
       case removeFromBasket:
           const itemIndex = state.itemAdded.findIndex(action.payload.index);
           const itemAdded = itemAdded.splice(itemIndex, 1)
           return {
               ...state,
               itemAdded: [...itemAdded]
           }
           break;
       default: return state
           break;
   }
}
