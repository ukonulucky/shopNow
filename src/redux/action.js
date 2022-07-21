import {ADDTOBASKET, REMOVEFROMBASKET } from "./types"
export const addToBasket = (addInfo) => {
    return {
        type: ADDTOBASKET,
        payload: addInfo
    }
}
export const removeFromBasket = (removeInfo) => {
    return {
        type: REMOVEFROMBASKET,
        payload:removeInfo
    }
}