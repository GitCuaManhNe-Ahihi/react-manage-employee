import React, { Component } from 'react';

class AddEmployeeCpn extends Component {
    constructor(props) {
        super(props);
        this.state ={
            name:'',
            tell:'',
            author:0
        }
    }
    setValue  = (e) => {
       
        this.setState({[e.target.name]:e.target.value});
    }
    
 
    ShowBtn = () => {
        if(this.props.value1)
        {
                return(
                <div className='col-4'>
                    <form>
                      <div className="card text-left">
                    <div className="card-body">
                    <h4 className="card-title text-center ">Thêm nhân viên</h4>
                    <div className="form-group btn-group col-12">
                        <label     className="col-4">Tên</label>
                        <input type="text" className="form-control col-8" name='name' onChange={(e)=>this.setValue(e)} />
                    </div>
                    <div className="form-group btn-group col-12">
                        <label     className="col-4 ">Số điện thoại</label>
                        <input type="text" className="form-control col-8" name='tell'onChange={(e)=>this.setValue(e)}  />
                    </div>
                    <div className="form-group col-12">
                        <select className="custom-select" name='author'  onChange={(e)=>this.setValue(e)} >
                        <option value={1}>Admin</option>
                        <option value={0}>Member</option>
                        </select>
                    </div>
                    <div className="btn-group col-12">
                        <input type="reset" className="btn btn-info" onClick={(n,t,a)=>this.props.create(this.state.name,this.state.tell,this.state.author)}  value ="Thêm"/>
                    </div>
                    </div>
                </div>
                </form>
                </div>
                  
                  
                )
            

        }
        else
        {
            return <div></div>
        }
     
    }
    render() {
        return   this.ShowBtn()

    }
}

export default AddEmployeeCpn;