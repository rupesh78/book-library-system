const iState = {
    books:[ 
        {
            isbn:"100",
            book_title:"Glynnis",
            description:'Glynnis Campbell is a USA Today bestselling author of swashbuckling action-adventure romance. She’s the wife of a rock star, and the mother of two young adults, but she’s also been a ballerina, a typographer, a film composer, a piano player, a singer in an all-girl rock band, and a voice in those violent video games you won’t let your kids play.',
            pages:345, 
            author:"Veronica"
        },
        {   
            isbn:"101",
            book_title:"Aliebn" ,
            description:'Jonathan Sun is the author behind @jonnysun. He is an architect, designer, engineer, artist, playwright, and comedy writer. His work across multiple disciplines broadly addresses narratives of human experience.', 
            pages:445,
            author:"Veronica"
        }
 ],
    filterbook:[]
}
const reducer = (state=iState, action) => {
   
    switch(action.type){
        case 'ADD_BOOK':
            return {
                ...state,
                books:[action.payload,...state.books]
            };
        case 'EDIT_BOOK': { 
            const editb = state.books.map( (book,i)=>{
                if(action.payload.isbn==book.isbn) {  return { ...book, ...action.payload} } else{
                    return { ...book}
                }
            })
            return {
            ...state,
            books:editb
        };
    };
        case 'SEARCH_BOOK':{
            const val = action.payload;
                const filterbook = state.books.filter( (book,i)=>{
                    if(book.isbn.toLowerCase()===val.toLowerCase() ||  book.book_title.toLowerCase()===val.toLowerCase() || book.author.toLowerCase()===val.toLowerCase()){
                        return {...book}
                    }
                })
               
            return {
                ...state,
                filterbook:filterbook
            };
        }
        case 'RESET_SEARCH':{
            return { ...state, filterbook:[] };
        }

    }
    return state;
}
export default reducer;