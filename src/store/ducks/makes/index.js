const MakesTypes = {
    GET_MAKES_REQUEST: "GET_MAKES_REQUEST",
    GET_MAKES_SUCCESS: "GET_MAKES_SUCCESS",
    GET_MAKES_FAILURE: "GET_MAKES_FAILURE"
}

const INITIAL_STATE = {
   data: [ { ID: 0, Name: '' } ]
}

const makesReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case MakesTypes.GET_MAKES_REQUEST: 
            return { ...state, loading: true }
        case MakesTypes.GET_MAKES_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case MakesTypes.GET_MAKES_FAILURE: 
            return { ...state, loading: false }
        default: 
            return state
    }
}

export default makesReducer

export const Creators = {
    request: () => ({ type: MakesTypes.GET_MAKES_REQUEST }),
    success: (data) => ({ type: MakesTypes.GET_MAKES_SUCCESS, data }),
    failure: () => ({ type: MakesTypes.GET_MAKES_FAILURE })
}