const Link = ({ children, ...props }) => {
    const { handler } = props
    return (
        <button
            className={
                `
                    transition
                    hover:-translate-x-1
                    hover:text-secondary
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

export default Link