import { useState } from 'react';
import Button from './Button.js';
const Dropdown = ({ children, ...props }) => {
    const { color, buttonClasses, dropdownClasses, dropdownContentClasses, label, icon } = props
    const [active, setActive] = useState(false);
    return (
        <>
            <div className={`dropdown ${active ? 'is-active' : ''} ${dropdownClasses}`}>
                <div className="dropdown-trigger">
                    <Button color={ color } buttonClasses={ buttonClasses } handler={ () => setActive(!active) }>
                        { icon }
                        { label }
                    </Button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                    <div className={ `dropdown-content ${dropdownContentClasses}` }>
                        { children }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dropdown