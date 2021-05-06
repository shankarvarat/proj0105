const initialSate = {
    cardData: []

}

export default function cardItems(state=initialSate, action) {
    switch (action.type) {
        case "ADD_TO_CARD":
            return {
                ...state,
                cardData: action.data
            }
            break
        default:
            return state
    }
}