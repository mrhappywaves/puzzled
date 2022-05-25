import React, {useState} from 'react';
import { Link } from 'react-router-dom';
// import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


const Header = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <div className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='navbar-brand'>
                <Link className='navbar-brand' to='/'>
                    <img src='https://www.kindpng.com/picc/m/419-4193772_jigsaw-puzzles-set-computer-icons-transparent-puzzle-piece.png' className='d-inline-block logo' alt='logo' style={{height: '55px'}} />
                    The Puzzle
                </Link>
            </div>

            <div className='nav-menu' onClick={handleClick}>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/home' className='nav-link'>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/about' className='nav-link'>About</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/login' className='nav-link'>Login</Link>
                    </li>
                </ul>
            </div>

           {/* <UncontrolledDropdown className='px-3 nav-link'>
               <DropdownToggle caret>
                   Menu
               </DropdownToggle>
               <DropdownMenu>
                   <DropdownItem to='/login'>Login</DropdownItem>
                   <DropdownItem>Profile</DropdownItem>
               </DropdownMenu>
           </UncontrolledDropdown> */}
          

            
        </div>
    )
}

export default Header;