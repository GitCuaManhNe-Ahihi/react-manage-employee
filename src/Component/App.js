

import '../App.css';
import Addbtn from './Addbtn';
import AddEmployeeCpn from './AddEmployeeCpn';
import DataTable from './DataTable';
import Header from './Header'; 
import SearchArea from './SearchArea';
import SortFuntionCpn from './SortFuntionCpn';
import React, { Component } from 'react';
import data from '../data.json'
import { v4 as uuidv4 } from 'uuid';

 

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      status:false,
      dataSearch:'',
      datas:[],
      statusSearch:false,
      statusRepairRow:true,
  }
}

componentWillMount() {
  if(localStorage.getItem("userData")=== null)
  {
    localStorage.setItem("userData",JSON.stringify(data))
    this.setState({datas:JSON.parse(localStorage.getItem("userData"))});
  }
  else
  {
    this.setState({datas:JSON.parse(localStorage.getItem("userData"))});
  }
}

  switchStatusBtn = () => {
    this.setState({status:!this.state.status});
  }
  resultdataSearch = (data) => {
    this.setState({dataSearch:data});
    this.setState({ statusSearch:true});
  }
  goHomedataSearch = () => {
    this.setState({ statusSearch:false});
  }
  createNewEmp  = (n,t,a) => {
    var item = {}
    item.id = uuidv4()
    item.name=n
    item.tel=t
    item.authority=a
    var items = this.state.datas
    items.push(item)
    this.setState(
      {datas:items}
    );
    localStorage.setItem("userData",JSON.stringify(this.state.datas))
  }
  changeEmp  = (n,t,a,i) => {
   this.state.datas.forEach((item)=>{
      if(item.id === i)
      {
        item.name =n
        item.tel= t
        item.authority=a
      }
    })
    localStorage.setItem("userData",JSON.stringify(this.state.datas))
  }
  deleteEmp  = (i) => {
    var item = this.state.datas.filter(item => item.id!== i)
    this.setState(
      {datas:item}
    );
    localStorage.setItem("userData",JSON.stringify(item))
  }

  sortElement  = (e) => {
    var items = this.state.datas
    if(e==='1')
    {
      items.sort((a,b)=>
          { var la =  a.name.split(' ')
            var lb =  b.name.split(' ')
            if ( la[la.length-1]>lb[lb.length-1]){
              return -1;
            }
            if (la[la.length-1]<(lb[lb.length-1])){
              return 1;
            }
            return 0;
          })
    }
    else{
      if(e==='0')
      {
        items.sort((a,b)=>
          { var la =  a.name.split(' ')
            var lb =  b.name.split(' ')
            if ( la[la.length-1]<lb[lb.length-1]){
              return -1;
            }
            if (la[la.length-1]>(lb[lb.length-1])){
              return 1;
            }
            return 0;
          })
      }
    }
    console.log(e)
    this.setState({
      datas:items
    });
  }
  // renderElement = () => {
  //   return(
  //     <div >
  //     <Header></Header>
  //     <div className='container'>
  //      <div className='row'>
  //          <SearchArea></SearchArea>
  //          <SortFuntionCpn></SortFuntionCpn>
  //          <Addbtn trangthai = {()=>this.switchStatusBtn()} value1 ={this.state.status}></Addbtn>
  //          <div className="col-12 display-2">
  //        <hr />
  //        </div>
  //      </div>
     
  //      <div className='row'>
  //      <DataTable></DataTable>
  //      <AddEmployeeCpn trangthai = {()=>this.switchStatusBtn2()} value1 ={this.state.status}></AddEmployeeCpn>
  //      </div>
  //     </div>
  //     </div>
  //   )
  // }
  showResultSearch = () => {
    if(this.state.statusSearch)
    {
      return <DataTable data = {this.state.datas.filter((a)=>{
        var b = a.name.split(" ")
        return (b[b.length-1]).toLowerCase().search(this.state.dataSearch.toLowerCase())+1
      })} ></DataTable>
    }else
    {
      return <DataTable data = {this.state.datas} changeEmp ={(n,t,a,i)=>this.changeEmp(n,t,a,i)} deleteEmp ={(i)=>this.deleteEmp(i)} ></DataTable>
    }
  }

  render() {
    return (
  
      <div className="App">
        
      <Header></Header>
      <div className='container'>
      <div className='row'>
          <SearchArea  resultdata ={(data)=>this.resultdataSearch(data)} goback={()=>this.goHomedataSearch() } statusButton={this.state.statusSearch}></SearchArea>
          <SortFuntionCpn  sortElement= {(e)=> this.sortElement(e)}></SortFuntionCpn>
          <Addbtn trangthai = {()=>this.switchStatusBtn()} value1 ={this.state.status}></Addbtn>
          <div className="col-12 display-2">
        <hr />
        </div>
      </div>
    
      <div className='row'>
      <div className="col-12" style={{display:'flex'}}>
      {this.showResultSearch()}
      <AddEmployeeCpn value1 ={this.state.status} create ={(n,t,a)=>this.createNewEmp(n,t,a)} ></AddEmployeeCpn>
      </div>
      </div>
      </div>
      </div>
);
   
  }
}

export default App;
