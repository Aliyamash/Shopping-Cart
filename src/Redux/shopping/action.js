import { ADD_TO_CARD , INCREMENT , DECREMENT, REMOVE_PRODUCT, CLEAR_CARD} from "./actionType"

export const cardAction = (product) => {
    return {
        type : ADD_TO_CARD , 
        payload : product
    }
}
export const increment = (productId) => {
    return {
        type : INCREMENT , 
        payload : productId
    }
}
export const decrement = (productId) => {
    return {
        type : DECREMENT , 
        payload : productId
    }
}
export const removeProduct = (productId) => {
    return {
        type : REMOVE_PRODUCT , 
        payload : productId
    }
}
export const clearCard = () => {
    return {
        type : CLEAR_CARD 
    }
}
