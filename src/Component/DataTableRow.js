import React, { Component } from 'react';

class DataTableRow extends Component {
  constructor(props) {
    super(props);
    this.state ={
      defName:this.props.name,
      defTel:this.props.tel,
      author2:1
    }
  }
    
    stopE  = (e) => {
      e.preventDefault()
    }
  
    checkAuthority = () => {
      if(this.props.authority)
      {
          return "admin"
      }
      return "member"

    }
    RepairValue  = (e) => {
      this.setState(
        {[e.target.name]:e.target.value}
      );
      } 
    

    render() {    
      if(!this.props.statusRe)
      {
       return(
        <tr>
        <td>
        {this.props.index}
       </td>
       <td>{this.props.name}</td>
       <td>{this.props.tel}</td>
       <td>{this.checkAuthority()}</td>
       <td>
        <div className="btn-group">
          <div className="btn btn-warning fas fa-edit" onClick={(v,id,n,t,a)=>this.props.setStatus(this.props.index-1,this.props.id,this.state.defName,this.state.defTel,this.state.author2)}>
            Sửa
          </div>
          <div className="btn btn-danger fas fa-trash-alt" onClick={(i)=>this.props.deleteEmp(this.props.id)}>
            Xóa
          </div>
        </div>
      </td>
      </tr>
       )}
       else
       {
        return(<tr>
          <td>
          {this.props.index}
         </td>
         <td>
         <div className="form-group col-12"><input type="text" defaultValue={this.state.defName} onChange={(e)=>this.RepairValue(e)} className="form-control" name="defName"  aria-describedby="helpId" placeholder /></div>
        </td>
         <td><div className="form-group col-12"><input type="text" defaultValue={this.state.defTel} onChange={(e)=>this.RepairValue(e)} className="form-control" name="defTel" aria-describedby="helpId" placeholder /></div></td>
         <td><div className="form-group col-12">
                        <select className="custom-select" name='author2'   onChange={(e)=>this.RepairValue(e)} >
                        <option value={1}>Admin</option>
                        <option value={0}>Member</option>
                        </select>
                    </div></td>
         <td>
          <div className="btn-group">
            <div className="btn btn-success fas fa-edit"  onClick={(v,id,n,t,a)=>this.props.setStatus(-1,this.props.id,this.state.defName,this.state.defTel,this.state.author2)
            }>
              Sửa
            </div>
            <div className="btn btn-secondary fas fa-trash-alt" onClick={(e)=>this.stopE(e)} style={{opacity:'0.5'}}>
              Xóa
            </div>
          </div>
        </td>
      </tr>)
       }

    }
}


export default DataTableRow;