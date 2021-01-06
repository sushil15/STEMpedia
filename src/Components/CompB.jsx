import React from 'react';
import {connect} from 'react-redux';
import "../style.css";

const CompB=(props)=>{
    return(
    <div className="result">
      <h3>{props.name}</h3>
    </div>  
    );
}

const mapSateToProps=(state)=>{
    return {
      name:state.name,
    }
  }
  
export default connect(mapSateToProps,null)(CompB);