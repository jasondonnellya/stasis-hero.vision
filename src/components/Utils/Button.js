const Button = ({ ...props }) => {
    const { children, color, buttonClasses, handler } = props
    return (
        <button
            className={
                `button is-${color} ${buttonClasses}`
            }
            onClick={ handler }
        >
            { children }
        </button>
    )
}

export default Button