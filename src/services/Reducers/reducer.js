import ADD_TO_CART from "../constants"

const initialSate = {
    cardData: []

}

export default function cardItems(state = initialSate, action) {
    switch (action.type) {
        case ADD_TO_CART:
            console.warn("Reducer Data:", action)
            return {
                ...state,
                cardData: action.data
            }
            break
        default:
            return state
    }
}