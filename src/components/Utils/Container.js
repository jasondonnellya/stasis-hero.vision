const Container = ({ children, className }) => {
    return (
        <div
            className={
                `
                container
                mx-auto
                terminal-container
                `
                + className
            }>
            <div
                className="terminal"
            >
                { children }
            </div>
        </div>
    )
}

export default Container;