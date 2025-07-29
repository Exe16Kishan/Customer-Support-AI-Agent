import { state } from "../state/stateAnnotion";

export const conditionalNode = async (state:state) => {
    switch (state.query.includes("email")) {
        case true:
            return "emaill"
    
        default:
            return "solutionn"
    }
}

