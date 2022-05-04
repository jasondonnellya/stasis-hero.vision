import Logo from './Logo';
import Dropdown from '../Utils/Dropdown';
import Button from '../Utils/Button';

import {
    openReddit,
    globalSpacing
} from '../../utilities.js';
import { getPage } from '../../page.js';

import {
    faUser,
    faCircleInfo,
    faSquarePen,
    faGlobe,
    faCaretDown,
    faNewspaper,
    faBug
} from "@fortawesome/free-solid-svg-icons";

import {
    faTwitterSquare,
    faRedditSquare,
    faGithubSquare
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const AppBar = () => {
    return (
        getPage() === 'home' ?
        <div className="grid grid-cols-3 gap-4 background-primary">
            <div>
                <Logo />
            </div>
            <div className="col-span-2 text-right flex">
                <Button
                    color="tertiary"
                    textColor="white"
                    buttonClasses={ `mr-${globalSpacing}` }
                >
                    <FontAwesomeIcon icon={ faGlobe } className={ `mr-${globalSpacing}`} />
                    Who-Is
                </Button>
                <Button
                    color="red-500"
                    textColor="white"
                    buttonClasses={ `mr-${globalSpacing} mt-1` }
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