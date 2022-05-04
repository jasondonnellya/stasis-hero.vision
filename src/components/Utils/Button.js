const Button = ({ ...props }) => {
    const { children, buttonClasses, handler } = props
    return (
        <button
            className={
                `
                py-2
                px-4
                rounded
                hover:opacity-75
                ${buttonClasses}
                `
            }
            onClick={ handler }
        >
            { children }
        </button>
    )
}

export default Button