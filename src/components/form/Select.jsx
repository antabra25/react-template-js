import React from 'react';

const Select = ({label, name, id, options}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <select name={name} id={id} className="form-control">
                {options.map(option => (
                    <option key={option.id} value={option}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );
}