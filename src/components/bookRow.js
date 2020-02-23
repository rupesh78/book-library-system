import React from 'react';
import { Link } from "react-router-dom";
import classes from '../global.scss';

class BookRow extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <React.Fragment>
                    <div className={classes.tr} key={this.props.ind}>
                     <div className={classes.isbn}><span>{this.props.bookr.isbn}</span></div>
                     <div className={classes.title}><span>{this.props.bookr.book_title}</span></div>
                     <div className={classes.description}><span>{this.props.bookr.description}</span></div>
                     <div className={classes.author}><span>{this.props.bookr.author}</span></div>
                     <div className={classes.action}><Link to={`/editBook/${(this.props.bookr.isbn)}`}>Edit</Link></div>
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

export default BookRow