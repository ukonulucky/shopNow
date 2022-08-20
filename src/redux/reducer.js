import { ADDTOBASKET, LOGINUSER, REMOVEFROMBASKET } from "./types";
import { addToBasket, removeFromBasket } from "./action";

const initialState = {
    loading: false,
    users: [
        {
            title: "SUPCASE [Unicorn Beetle Pro] Series Case for Galaxy Watch 4 Classic [46mm] 2021 Release, Rugged Protective Case with Strap Bands",
            price:"15000",
            rating:5 ,
            img: "watch",
            id:Math.random()
        },
        {
            title:"A4 Fashion Hollow Breathable Business Leather Shoes-866 Black Hollow",
            price:"17000",
            rating:5,
            img: "shoe",
            id:Math.random()
        },
        {
            title: "SHARE THIS PRODUCT Backpack Waterproof Shoulder Bag For Men, Multifunctional Short Travel Accessory Bag With Lock",
            price:"19000",
            rating:5 ,
            img: "schoolBag",
            id:Math.random()
        },
        {
            title:"RCA RFR741-BLACK Apartment Size-Top Freezer-2 Door Fridge-Adjustable Thermostat Control-Black-7.5 Cubic Feet",
            price:"66900",
            rating:4,
            img: "fridge",
            id:Math.random() 
        },
        {
            title: "Chrysolite Designs Super Numbers Casual Polo Bundle - Wine, Grey, Navyblue, Red.",
            price:"11095",
            rating:5,
            img:"cloth"
        },
        {
        title:"SHARE THIS PRODUCT Polystar 40 INCH SMART CURVED LED TV + Free Wall Bracket 2021 MODEL",
        price:"133000",
        rating:5,
        img: "television",
        id:Math.random()
        }
    ],
    error: "",
    cart: [],
    itemAdded: [],
    userLogin:""
}

export const stateReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDTOBASKET:
            return {
           ...state, itemAdded:[...state.itemAdded,action.payload]
       }   
           break;
   
       case REMOVEFROMBASKET:
            const itemIndex = state.itemAdded.findIndex((i,j) => {
             return  i.id === action.payload.id
            });
            console.log(itemIndex)
            const newitemAdded = [...state.itemAdded]
            if (itemIndex >= 0) {
                newitemAdded.splice(itemIndex, 1)
                console.log(newitemAdded)
            } else {
                console.warn(`cant remove item with the index ${action.payload.id} because it is not found in the basket`)
            }
            return {
                ...state,
                itemAdded: newitemAdded
            }
            break;
        case LOGINUSER:
            console.log(action.paylaod)
            return {
                ...state, userLogin: action.payload
            }
       default: return state
           break;
   }
}
