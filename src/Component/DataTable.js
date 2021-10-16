import React, { Component } from 'react';

import DataTableRow from './DataTableRow';
class DataTable extends Component {
 constructor(props) {
   super(props);
   this.state={
     indexRepair:-2
   }
 }
 

    setIndex  = (v,id,n,t,a) => {
      this.setState({indexRepair:v});
      if(v === -1)
      { console.log(a)
        this.props.changeEmp(n,t,a,id)
      }
    }

    checkData  = () => {
      if (this.props.data.length)
      {
        return
      }
      else
      {
        return (
          <tr>
          <td colSpan={5}>
            <p className='fas fa-sad-cry' >Sorry can't find data!</p>
            </td>
            </tr>
        )
      }
    }

    render() {
        return (
        <div style={{flex:'1'}}>
        <table className="table table-striped   table-hover ">
          <thead className="thead-inverse">
      <tr>
        <th>Stt</th>
        <th>Tên</th>
        <th>Số điện thoại</th>
        <th>Quyền</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     { this.props.data.map((value,key)=>
      {    if(key=== this.state.indexRepair)
            return  <DataTableRow index={key+1} name={value.name} tel={value.tel} authority={value.authority} statusRe ={true} setStatus = {(v,id,n,t,a)=> this.setIndex(v,id,n,t,a)} id={value.id} > </DataTableRow>
            else
          {
            return  <DataTableRow index={key+1} name={value.name} tel={value.tel} authority={value.authority} statusRe ={false} setStatus = {(v,id,n,t,a)=> this.setIndex(v,id,n,t,a)} id={value.id} deleteEmp = {(i)=>this.props.deleteEmp(i)}> </DataTableRow>
          }
        })
      }
     
      {this.checkData()}
    </tbody>
  </table>
</div>

        );
    }
}

export default DataTable;