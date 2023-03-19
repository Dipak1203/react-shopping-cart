const reducer = (state,action) =>{
    if(action.type==="REMOVE_ITEM"){
        return {
            ...state,
            item: state.item.filter((ele) =>{
                return ele.id !== action.payload;
            })
        }
    }

    if(action.type==="CLEAR_ALL"){
        return {...state,item:[]}
    }
    return state;
}

export default reducer;