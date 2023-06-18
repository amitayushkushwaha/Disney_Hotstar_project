// redux actions adding and deleting 
export const add_Movie = (movie) => {
    return {
        type : "ADD_MOVIE",
        payload : movie
    }
}

export const del_Movie = (movie) => {
    return {
        type : "DEL_MOVIE",
        payload : movie
    }
}