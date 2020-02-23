import React from 'react';
import { connect } from 'react-redux';
import classes from '../global.scss';
import BookRow from './bookRow';

class BookList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
           
           isbn:'', book_title:'', description:'',
           category:'', price:'', pages:'', language:'' 
        }
    }

    render(){
            const books = this.props.books;
            const filterbook  = this.props.filterbook;
        return(
            <React.Fragment>
                <div  className={classes.container}>
                <h2>Book Listing </h2>
                    <div className={classes.tr}>
                        <div className={classes.isbn}><strong>ISBN</strong></div>
                        <div className={classes.title}><strong>Title</strong></div>
                        <div className={classes.description}><strong>Description</strong></div>
                        <div className={classes.author}><strong>Author</strong></div>
                        <div className={classes.action}><strong>Action</strong></div>
                    </div>
                   { filterbook=='undefined' || filterbook=='' ? books.map( (book,i) =>(
                      <BookRow bookr={book} ind={i} key={i}/>
                   )) : filterbook.map( (book,i) =>(
                    <BookRow bookr={book} ind={i} key={i}/>
                 ))}
                </div>    
            </React.Fragment>    
        )
    }
}

const mapStateToProps = (state) =>{
    return{
         books:state.books,
         filterbook:state.filterbook      
    }
}

export default connect(mapStateToProps)(BookList)