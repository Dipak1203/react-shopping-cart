const reducer = (state,action) =>{
    if(action.type==="REMOVE_ITEM"){
        return {
            ...state,
            item: state.item.filter((ele) =>{
                return ele.id !== action.payload;
            })
        }
    }
    return state;
}

export default reducer;