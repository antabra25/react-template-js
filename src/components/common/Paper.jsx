const Paper = ({children, className, styles = ""}) => {

    return (
        <div className={`paper-container ${className}`} style={{...styles}}>
            <div className="paper">
                {children}
            </div>
        </div>
    )
}

export default Paper;