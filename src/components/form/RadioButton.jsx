import React from 'react';

const RadioButton = ({name, id, value, label, onChange}) => {

    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input type="radio" id={id} value={value} name={name} onChange={onChange}/>
        </div>
    )
}

export default RadioButton;