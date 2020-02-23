import React from 'react';
import Search from './Search';
import BookList from './bookList';

class Home extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
            const books = this.props.books;
            const filterbook  = this.props.filterbook;
            
        return(
            <React.Fragment>
               <Search/>
               <BookList/>
            </React.Fragment>    
        )
    }
}

export default Home