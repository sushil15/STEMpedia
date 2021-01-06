import React from 'react';
import {connect} from 'react-redux';
import "../style.css";

const CompA=(props)=>{
    return(
        <div className="input">
          <input  type="text" value={props.name}  placeholder="Enter Your Name" onChange={(val)=>{props.changeName(val.target.value)}}/>
        </div>
    );
}

const mapSateToProps=(state)=>{
    return {
      name:state.name,
    }
  }

const mapDispatchToProps=(dispatch)=>{
    return{
     changeName:(name)=>{dispatch( {type:'CHANGE_NAME',payload:name})}
   }
 }

export default connect(mapSateToProps,mapDispatchToProps)(CompA);