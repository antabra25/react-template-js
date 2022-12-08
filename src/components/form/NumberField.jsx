import React from 'react';

const NumberField = ({label, name, id, value, onChange, error}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                value={value}
                onChange={onChange}
                name={name}
                id={id}
                type="number"
                className="form-control"
            />
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
}

export default NumberField;