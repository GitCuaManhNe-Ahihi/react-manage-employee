import React, { Component } from 'react';

class Addbtn extends Component {
    render() {
        if(!this.props.value1)
        {
            return (
            
                <div className="col-3">
                <div className="btn btn-block btn-outline-info" onClick={()=>this.props.trangthai()}>Thêm Nhân Viên</div>
                </div>
            );
        }
        else{
            return (   
                <div className="col-3">
                    <div className="btn btn-block btn-outline-danger" onClick={()=>this.props.trangthai()}>Đóng lại</div>
                </div>)
        }
    }
}

export default Addbtn;