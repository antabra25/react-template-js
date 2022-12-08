const CheckBoxField = ({id, name, label, value, onCheckboxChange}) => {

    return (
        <div>
            <label htmlFor={id}>
                <input type="checkbox" id={id} name={name} value={value} onChange={onCheckboxChange}/>
                {label}
            </label>
        </div>
    )

}

export default CheckBoxField