import Logo from './Logo';
import Dropdown from '../Utils/Dropdown';
import Button from '../Utils/Button';
import Link from '../Utils/Link';
import {
    openReddit,
    openTwitter,
    openGithub,
    openLink,
    globalSpacing
} from '../../js/utilities';
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
import { usePage, setPage } from '../../store/page'
import { useDispatch } from 'react-redux'

const AppBar = () => {
    const sharedClasses = `bg-tertiary mr-${globalSpacing}  shadow shadow-blue-400 hover:shadow-none`;
    const page = usePage()
    const dispatch = useDispatch()
    return (
        <div className="grid grid-cols-3 gap-4 background-primary">
            <div>
                <Logo />
                Debug: PAGE - { page }
            </div>
            <div className="col-span-2 justify-self-end lg:flex">
                <div className={ `flex items-center mb-2` }>

                    { page === 'UPDATE_USER' ? '' :
                    <Dropdown
                        buttonClasses={ `${sharedClasses}` }
                        label="User"
                        icon={ <FontAwesomeIcon icon={ faUser } className={ `mr-${globalSpacing}`} /> }
                    >
                        <Dropdown.Content>
                            <Link handler={ () => { dispatch(setPage('USER')) } }>
                                <FontAwesomeIcon icon={ faCircleInfo } className={ `mr-${globalSpacing}`} />
                                Details
                            </Link>
                            <br />
                            <Link handler={ () => { dispatch(setPage('UPDATE_USER')) }}>
                                <FontAwesomeIcon icon={ faSquarePen } className={ `mr-${globalSpacing}`} />
                                Change
                            </Link>
                        </Dropdown.Content>
                    </Dropdown> }

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
                            <Link handler={ () => openLink('https://stasishero.com/devlog/') }>
                                <FontAwesomeIcon icon={ faQuestion } className={ `mr-${globalSpacing}`} />
                                About
                            </Link>
                            <br />
                            <Link handler={ () => openLink('https://stasishero.com/devlog/') }>
                                <FontAwesomeIcon icon={ faNewspaper } className={ `mr-${globalSpacing}`} />
                                Latest News
                            </Link>
                            <br />
                            <Link handler={ openTwitter }>
                                <FontAwesomeIcon icon={ faTwitterSquare } className={ `mr-${globalSpacing}`} />
                                Twitter
                            </Link>
                            <br />
                            <Link handler={ openReddit }>
                                <FontAwesomeIcon icon={ faRedditSquare } className={ `mr-${globalSpacing}`} />
                                Reddit
                            </Link>
                            <br />
                            <Link handler={ openGithub }>
                                <FontAwesomeIcon icon={ faGithubSquare } className={ `mr-${globalSpacing}`} />
                                Change Log
                            </Link>
                        </Dropdown.Content>
                    </Dropdown>
                </div>
                
                <div className={ `flex items-center mb-2` }>
                    <Button
                        buttonClasses={ `
                            bg-red-600
                            text-white
                            px-2
                            h-8
                            text-xs
                            mr-${globalSpacing}
                            shadow-md
                            shadow-red-800
                            hover:shadow-none
                        ` }
                        handler={ openReddit }
                    >
                        <FontAwesomeIcon icon={ faBug } className={ `mr-${globalSpacing}`} />
                        Report a Bug
                    </Button>

                    <Button
                        buttonClasses={ `
                            bg-white
                            text-tertiary
                            px-2
                            h-8
                            text-xs
                            flex
                            items-center
                            shadow-md
                            shadow-gray-400
                            hover:shadow-none
                        ` }
                    >
                        <img src="/images/kofi.png" alt="KoFi logo" width="30" className={ `mr-${globalSpacing}`} />
                        Support
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default AppBar;