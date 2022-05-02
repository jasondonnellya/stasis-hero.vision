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
        <div className="columns">
            <div className="column is-4">
                <Logo />
            </div>
            <div className="column is-8 has-text-right">
                <Dropdown
                    color="tertiary"
                    buttonClasses={ `mr-${globalSpacing}` }
                    dropdownClasses={ `has-text-left` }
                    dropdownContentClasses={ `p-2` }
                    label="User"
                    icon={ <FontAwesomeIcon icon={ faUser } className={ `mr-${globalSpacing}`} /> }
                >
                    <a><FontAwesomeIcon icon={ faCircleInfo } className={ `mr-${globalSpacing}`} />Details</a>
                    <br></br>
                    <a><FontAwesomeIcon icon={ faSquarePen } className={ `mr-${globalSpacing}`} />Change</a>
                </Dropdown>
                <Button
                    color="tertiary"
                    buttonClasses={ `mr-${globalSpacing}` }
                >
                    <FontAwesomeIcon icon={ faGlobe } className={ `mr-${globalSpacing}`} />
                    Who-Is
                </Button>
                <Dropdown
                    color="black"
                    buttonClasses={ `mr-${globalSpacing}` }
                    dropdownClasses={ `has-text-left` }
                    dropdownContentClasses={ `p-2` }
                    icon={ <FontAwesomeIcon icon={ faCaretDown } /> }
                >
                    <a href="https://stasishero.com/devlog" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={ faNewspaper } className={ `mr-${globalSpacing}`} />
                        Latest News
                    </a>
                    <br></br>
                    <a href="https://twitter.com/StasisHeroDev" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={ faTwitterSquare } className={ `mr-${globalSpacing}`} />
                        Twitter
                    </a>
                    <br></br>
                    <a href="https://www.reddit.com/r/StasisHero/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={ faRedditSquare } className={ `mr-${globalSpacing}`} />
                        Reddit
                    </a>
                    <br></br>
                    <a href="https://github.com/jasondonnellya/stasis-hero.vision/commits/master" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={ faGithubSquare } className={ `mr-${globalSpacing}`} />
                        Change Log
                    </a>
                </Dropdown>
                <Button
                    color="danger"
                    buttonClasses={ `is-small mr-${globalSpacing} mt-1` }
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