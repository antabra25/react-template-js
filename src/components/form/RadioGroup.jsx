const RadioGroup = ({title, children}) => {
    return (
        <div>
            <h3>{title}</h3>
            <div className="radio-group-body">
                {children}
            </div>
        </div>
    )

}

export default RadioGroup;