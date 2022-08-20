import {ADDTOBASKET, LOGINUSER, REMOVEFROMBASKET } from "./types"
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

export const userLogin = (user) => {
    return {
        type: LOGINUSER,
        payload:user
    }
}
