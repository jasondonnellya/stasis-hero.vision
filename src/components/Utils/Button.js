const Button = ({ children, ...props }) => {
    const { buttonClasses, handler } = props
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
            onClick=
            {
                (e) => {
                    e.stopPropagation()
                    handler()
                }
            }
        >
            { children }
        </button>
    )
}

Button.defaultProps = {
    buttonClasses: '',
    handler: () => console.log('Button')
}

export default Button