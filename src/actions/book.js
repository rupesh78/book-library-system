export const addNewBook = (books_info) => {
    return   (dispatch) => {
        dispatch({type:'ADD_BOOK',payload:books_info  })

    }
}

export const searchKeyword = (keyword) => {
    return   (dispatch) => {
        dispatch({type:'SEARCH_BOOK',payload:keyword  })

    }
}

export const editBook = (books_info) => {
    return   (dispatch) => {
        dispatch({type:'EDIT_BOOK',payload:books_info  })

    }
}
export const resetSearch = () => {
    return   (dispatch) => {
        dispatch({type:'RESET_SEARCH'})

    }
}




