import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import classes from '../global.scss';
import { searchKeyword,resetSearch } from '../actions/book';

class Search extends React.Component {

    constructor(props){
        super(props);
        this.state = { keyword:''}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSearchReset = this.handleSearchReset.bind(this);
    }
    handleSearchReset = (e)=>{
        document.getElementById("searchfrm").reset();
        this.props.resetSearch();
    }
    handleChange= (e)=>{
        this.setState({keyword:e.target.value});
    }
    handleSubmit(e){
        e.preventDefault();
        const  data  = this.state.keyword;
        if(data) this.props.setKeyword(data);
    }

    render(){
        return(
            <div className={classes.formArea}>
                <div className={classes.container}>
                <div className={classes.subBtn}>
                    <Link to="/book" className={classes.addBtn}>Add New Book</Link>
                </div>
                    <div className={[classes.sub, classes.search].join(' ')}>
                        <form method="post"  onSubmit={this.handleSubmit}  id="searchfrm" >
                        <label> Search Keyword: </label>
                            <input className={classes.customfild} type="text" name="keyword" required placeholder="Keyword*" onChange={this.handleChange} valeu={this.state.keyword} />
                            <input type="submit" className={classes.btn} name="btnsubmit" value="Find Books" />
                            <input type="button" className={classes.btn} onClick={this.handleSearchReset} value="Reset Search"/>
                        </form>
                    </div>
                </div> 
            </div>    
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setKeyword: (data) => {
            dispatch(searchKeyword(data))
        },
        resetSearch:()=>dispatch(resetSearch())
    }
}

export default connect(null,mapDispatchToProps)(Search)