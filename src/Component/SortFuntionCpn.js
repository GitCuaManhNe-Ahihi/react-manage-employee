import React, { Component } from 'react';

class SortFuntionCpn extends Component {
    constructor(props) {
      super(props);
      this.state ={
        valueSort:-1
      }
    }
    
    
    render() {
        
        return (
            <div className="form-group col-3">
            <select className="custom-select" name='valueSort' onChange={(e)=>this.props.sortElement(e.target.value) }>
              <option value={-1}>Sắp xếp</option> 
              <option value={0}>a-z</option>
              <option value={1}>z-a</option>
            </select>
          </div>
          
        );
    }
}

export default SortFuntionCpn;