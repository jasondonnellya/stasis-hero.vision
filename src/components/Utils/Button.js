const Button = ({ children, ...props }) => {
    const { buttonClasses, handler } = props
    return (
        <button
            className={
                `
                transition
                py-2
                px-4
                rounded
                hover:opacity-75
                hover:translate-y-1
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