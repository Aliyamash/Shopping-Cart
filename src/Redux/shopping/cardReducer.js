import {
  ADD_TO_CARD,
  INCREMENT,
  DECREMENT,
  REMOVE_PRODUCT,
  CLEAR_CARD,
} from "./actionType";

const updateLocalStorageKoni = (card) => {
    localStorage.setItem('shopping-card' , JSON.stringify(card))
}

const initialState = {
  card: localStorage.getItem('shopping-card') ? JSON.parse(localStorage.getItem('shopping-card')) : []
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CARD:
        
      const hasProduct = state.card.find((p) => p.id === action.payload.id)
        ? true
        : false;
      state.card = hasProduct
        ? state.card.map((p) =>
            p.id === action.payload.id ? { ...p, qtity: p.qtity + 1 } : p
          )
        : [...state.card, { ...action.payload, qtity: 1 }];
        updateLocalStorageKoni(state.card)
      return {
        ...state,
        card: state.card,
      };
    case INCREMENT:
      state.card = state.card.map((p) =>
        p.id === action.payload ? { ...p, qtity: p.qtity + 1 } : p
      );
      updateLocalStorageKoni(state.card)
      return {
        ...state,
        card: state.card,
      };
    case DECREMENT:
      const product = state.card.find((p) => p.id === action.payload);
      state.card =
        product.qtity > 1
          ? state.card.map((p) =>
              p.id === action.payload ? { ...p, qtity: p.qtity - 1 } : p
            )
          : state.card;
          updateLocalStorageKoni(state.card)
      return {
        ...state,
        card: state.card,
      };
    case REMOVE_PRODUCT:
      state.card = state.card.filter((p) => p.id !== action.payload);
      updateLocalStorageKoni(state.card)
      return {
        ...state,
        card: state.card,
      };
    case CLEAR_CARD:
     
    updateLocalStorageKoni([])
    return {
        ...state,
        card: [],
      };

    default:
      return state;
  }
};

export default cardReducer;
