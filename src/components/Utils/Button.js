const Button = ({ ...props }) => {
    const { children, color, textColor, buttonClasses, handler } = props
    return (
        <button
            className={
                `
                py-2
                px-4
                rounded
                bg-${color}
                hover:opacity-75
                text-${textColor}
                text-red-100
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