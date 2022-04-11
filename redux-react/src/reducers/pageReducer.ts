const pageReducer = (state = false, action: any) => {
    switch(action.type) {
        case "NAVIGATE":
            return state = action.payload
        default:
            return state;
    }
}

export default pageReducer;