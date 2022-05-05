import { useState } from 'react';
import Button from './Button.js';
import { globalSpacing } from '../../js/utilities.js';

const Dropdown = ({ children, ...props }) => {
    const { buttonClasses, label, icon } = props
    const [active, setActive] = useState(false);
    return (
        <>
            <div onBlur={ (e) => {
                        if (!e.currentTarget.contains(e.relatedTarget)) {
                            setActive(false)
                        }
                    }
                }>
                <Button
                    buttonClasses={ buttonClasses }
                    handler={ () => setActive(!active) }
                >
                    { icon }
                    { label }
                </Button>
                {
                    active ?
                        <div>
                            { children }
                        </div>
                    : ''
                }
            </div>
        </>
    )
}

Dropdown.Content = ({ children }) => {
    return (
        <>
            <div
                className={
                    `
                    absolute
                    mt-${globalSpacing}
                    rounded
                    text-black
                    `
                }
                style={
                    {
                        background: 'url(https://img.freepik.com/free-vector/white-background-with-zigzag-pattern-design_1017-33197.jpg?w=2000)',
                    }
                }
            >
                <div
                    className={
                        `
                        rounded
                        backdrop-blur-sm
                        `
                    }
                >
                    { children }
                </div>
            </div>
        </>
    )
}

export default Dropdown