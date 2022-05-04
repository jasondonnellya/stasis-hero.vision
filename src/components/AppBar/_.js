import Logo from './Logo';
// import Dropdown from '../Utils/Dropdown';
import Button from '../Utils/Button';

import {
    openReddit,
    globalSpacing
} from '../../js/utilities.js';
import { getPage } from '../../js/page.js';

import {
    /*
    faUser,
    faCircleInfo,
    faSquarePen,
    */
    faGlobe,
    /*
    faCaretDown,
    faNewspaper,
    */
    faBug
} from "@fortawesome/free-solid-svg-icons";

/*
import {
    faTwitterSquare,
    faRedditSquare,
    faGithubSquare
} from "@fortawesome/free-brands-svg-icons";
*/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const AppBar = () => {
    return (
        getPage() === 'home' ?
        <div className="grid grid-cols-3 gap-4 background-primary">
            <div>
                <Logo />
            </div>
            <div className="col-span-2 flex items-center justify-self-end">
                <Button
                    buttonClasses={ `bg-tertiary text-white mr-${globalSpacing}` }
                >
                    <FontAwesomeIcon icon={ faGlobe } className={ `mr-${globalSpacing}`} />
                    Who-Is
                </Button>
                <Button
                    color="red-500"
                    buttonClasses={ `bg-red-600 text-white px-2 h-8 text-xs` }
                    handler={ openReddit }
                >
                    <FontAwesomeIcon icon={ faBug } className={ `mr-${globalSpacing}`} />
                    Report a Bug
                </Button>
            </div>
        </div> : ''
    )
}

export default AppBar;