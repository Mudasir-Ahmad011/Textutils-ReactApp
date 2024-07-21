import React from 'react'

export default function Alert(props) {

  const Capitalize = (type)=>{
    let lower = props.alert.type.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    props.alert &&
    <div>
        <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{Capitalize(props.alert.type)}</strong> : {props.alert.message}
        </div>
    </div>
  )
}
