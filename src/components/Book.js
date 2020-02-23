import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import classes from '../global.scss';
import { addNewBook } from '../actions/book';


class Book extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            email:'', password:''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange= (e)=>{
        let name = e.target.name;
        this.setState({[name]:e.target.value});
    }

    handleSubmit(e){

        e.preventDefault();
        const { isbn,book_title,description,pages,author } = this.state;
        const books_info =  { isbn,book_title,description,pages,author}
        if(isbn && book_title){
            this.props.addBook(books_info);
        }
        document.getElementById('bookfrm').reset();
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
                    <input type="text" name="isbn" required placeholder="ISBN*" onChange={this.handleChange.bind(this)} className={classes.customfild} />
                </div>
                <div className={classes.box}>
                    <label> Book Title: </label>
                    <input type="text" name="book_title" required placeholder="Book Title*" onChange={this.handleChange.bind(this)} className={classes.customfild}/>
                </div> 
                <div className={classes.box}>
                    <label> Book Description: </label>
                    <textarea  name="description"  placeholder="Book Description" onChange={this.handleChange.bind(this)}  className={classes.customfild} style={{height:"100px"}}></textarea>
                </div>  
                <div className={classes.box}>
                    <label> Count: </label>
                    <input type="text" name="pages"  placeholder="Book Pages" onChange={this.handleChange.bind(this)} className={classes.customfild}/>
                </div> 
                <div className={classes.box}>
                    <label> Book Author: </label>
                    <input type="text" name="author" required placeholder="Book Author*" onChange={this.handleChange.bind(this)} className={classes.customfild} />
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
        addBook: (books_info) => {
            dispatch(addNewBook(books_info))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Book)