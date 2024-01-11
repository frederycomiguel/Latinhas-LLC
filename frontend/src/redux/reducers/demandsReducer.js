const initialState = [];

const demandsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_DEMANDS_SUCCESS':
            return action.payload;
        case 'CREATE_DEMAND_SUCCESS':
            return [...state, action.payload];
        case 'UPDATE_DEMAND_SUCCESS':
            return state.map((demand) => (demand.id === action.payload.id ? action.payload : demand));
        case 'DELETE_DEMAND_SUCCESS':
            return state.filter((demand) => demand.id !== action.payload);
        default:
            return state;
    }
};

export default demandsReducer;
