import Logo from './Logo';
import Dropdown from '../Utils/Dropdown';
import Button from '../Utils/Button';

import {
    openReddit,
    openTwitter,
    openGithub,
    openLink,
    globalSpacing
} from '../../js/utilities.js';
import { getPage } from '../../js/page.js';

import {
    faUser,
    faCircleInfo,
    faSquarePen,
    faGlobe,
    faCaretDown,
    faQuestion,
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
    const sharedClasses = `bg-tertiary mr-${globalSpacing}`;
    return (
        getPage() === 'home' ?
        <div className="grid grid-cols-3 gap-4 background-primary">
            <div>
                <Logo />
            </div>
            <div className="col-span-2 flex items-center justify-self-end">
                <Dropdown
                    buttonClasses={ `${sharedClasses}` }
                    label="User"
                    icon={ <FontAwesomeIcon icon={ faUser } className={ `mr-${globalSpacing}`} /> }
                >
                    <Dropdown.Content>
                        <Button>
                            <FontAwesomeIcon icon={ faCircleInfo } className={ `mr-${globalSpacing}`} />
                            Details
                        </Button>
                        <br />
                        <Button>
                            <FontAwesomeIcon icon={ faSquarePen } className={ `mr-${globalSpacing}`} />
                            Change
                        </Button>
                    </Dropdown.Content>
                </Dropdown>

                <Button
                    buttonClasses={ `${sharedClasses}` }
                >
                    <FontAwesomeIcon icon={ faGlobe } className={ `mr-${globalSpacing}`} />
                    Who-Is
                </Button>

                <Dropdown
                    buttonClasses={ `${sharedClasses}` }
                    icon={ <FontAwesomeIcon icon={ faCaretDown } /> }
                >
                    <Dropdown.Content>
                        <Button handler={ () => openLink('https://stasishero.com/devlog/') }>
                            <FontAwesomeIcon icon={ faQuestion } className={ `mr-${globalSpacing}`} />
                            About
                        </Button>
                        <br />
                        <Button handler={ () => openLink('https://stasishero.com/devlog/') }>
                            <FontAwesomeIcon icon={ faNewspaper } className={ `mr-${globalSpacing}`} />
                            Latest News
                        </Button>
                        <br />
                        <Button handler={ openTwitter }>
                            <FontAwesomeIcon icon={ faTwitterSquare } className={ `mr-${globalSpacing}`} />
                            Twitter
                        </Button>
                        <br />
                        <Button handler={ openReddit }>
                            <FontAwesomeIcon icon={ faRedditSquare } className={ `mr-${globalSpacing}`} />
                            Reddit
                        </Button>
                        <br />
                        <Button handler={ openGithub }>
                            <FontAwesomeIcon icon={ faGithubSquare } className={ `mr-${globalSpacing}`} />
                            Change Log
                        </Button>
                    </Dropdown.Content>
                </Dropdown>

                <Button
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