import React, { Component } from 'react';

class SearchArea extends Component {
    constructor(props) {
        super(props);
        this.state ={
            datainput:''
        }
    }
    isChange = (e) => {
        this.setState({datainput:e.target.value});
    }
    back  = () => {
        if(!this.props.statusButton )
            return <button type="submit" className="btn btn-primary col-3" onClick={() => this.props.resultdata(this.state.datainput)}>Submit</button>
        else
            return (
                 <div className=' row col-6'>
                    <button type="submit" className="btn btn-primary col-6" onClick={() => this.props.resultdata(this.state.datainput)}>Submit</button>
                    <button type="submit" className="btn btn-outline-danger col-6" onClick={() => this.props.goback()}>Go Home</button>     
                 </div>  
            ) 
    }
    render() {
        return (
            <div className="form-group col-6 ">
            <div className="btn-group col-12">
                <input type="text" className="form-control col-6" onChange={(e)=>this.isChange(e)} aria-describedby="helpId" placeholder="nhập nội dung cần tìm kiếm" />
                {this.back()}
            </div>
            </div>

        );
    }
}

export default SearchArea;