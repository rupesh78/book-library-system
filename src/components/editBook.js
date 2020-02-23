import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import classes from '../global.scss';
import { editBook,addNewBook } from '../actions/book';

class Book extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            email:'', password:'',
            isbn:'',book_title:'',author:'',description:'',price:'',pages:'',language:''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        const {id} = this.props.match.params
        
        let index= this.props.books.findIndex( (book,i,arr) => (book.isbn===id) )
        
        let Book = this.props.books[index];
        this.setState({id:id})
        this.setState({isbn:Book.isbn,book_title:Book.book_title,description:Book.description,pages:Book.pages,author:Book.author})
    }

    handleChange= (e)=>{
        let name = e.target.name;
        this.setState({[name]:e.target.value});
        
    }

    handleSubmit(e){
        e.preventDefault();
        const { isbn,book_title,description,pages,author } = this.state;
        const books_info =  { isbn,book_title,description,pages,author }
        if(isbn && book_title){
            this.props.edit(books_info);
        }
        this.props.history.push('/');
    }

    render(){
   
        return(
            
            <div className={[classes.formArea,classes.form_bar].join(' ')}>
                <div className={classes.container}>
                <div className={[classes.sub,classes.book ].join(' ')}>
                <Link to="/"  className={classes.backBtn}> &nbsp;&lt; Back &nbsp; </Link>

                <form method="post" onSubmit={this.handleSubmit} id="bookfrm">
                <div className={classes.box}>
                    <label> ISBN NO: </label>
                    <input type="text" name="isbn" required placeholder="ISBN*" onChange={this.handleChange.bind(this)} className={classes.customfild}  value={this.state.isbn} disabled ="disabled"/>
                </div>
                <div className={classes.box}>
                    <label> Book Title: </label>
                    <input type="text" name="book_title" required placeholder="Book Title*" onChange={this.handleChange.bind(this)} className={classes.customfild} value={this.state.book_title}/>
                </div> 
                <div className={classes.box}>
                    <label> Book Description: </label>
                    <textarea  name="description"  placeholder="Book Description" value={this.state.description} onChange={this.handleChange.bind(this)}  className={classes.customfild} style={{height:"100px"}}></textarea>
                </div>  
                <div className={classes.box}>
                    <label> Count: </label>
                    <input type="text" name="pages"  placeholder="Book Pages" onChange={this.handleChange.bind(this)} className={classes.customfild} value={this.state.pages}/>
                </div> 
                <div className={classes.box}>
                    <label> Book Author: </label>
                    <input type="text" name="author" required placeholder="Book Author*" onChange={this.handleChange.bind(this)} className={classes.customfild} value={this.state.author}/>
                </div> 
                <div>
                    <input type="submit" name="btnsubmit" value="submit" className={classes.btn}/>
                </div>
                </form>
            </div>  
            </div> 
            </div> 
        )
    }
}

const mapStateToProps = (state) =>{
    return{
         books:state.books   
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        edit: (books_info) => {
            dispatch(editBook(books_info))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Book)