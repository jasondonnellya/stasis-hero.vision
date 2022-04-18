const Container = ({ children, className }) => {
    return (
        <div className={"container terminal-container " + className}>
            <div className="terminal">
                { children }
            </div>
        </div>
    )
}

export default Container;