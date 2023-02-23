import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {

    const [{ basket, user }] = useStateValue();
    

    const login = () => {
        if (user) {
            auth.signOut();
        }
    
    };
        return (

            <nav className='header'>
                <Link to='/'>
                    <img className='header__logo ' alt='sorryreactdeveloper@gmail.com'
                        src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
                    />
                </Link >
      
                <div className='header__search'>
                    <input className='header__SearchInput' />
                    <SearchIcon className='header__searchIcon' />
                </div>

                <div className='header__nav'>
                    <Link to={!user && '/login'} className='header__link'>
                        <div onClick={login} className='header__option'>
                            <span className='header__optionLineOne'>Hello {user }</span>
                            <span className='header__optionLineTwo'>{user ? 'Sign out' : 'Sign In'}</span>
                        </div>
                    </Link>

                    <Link to='/' className='header__link'>
                        <div className='header__option'>
                            <span className='header__optionLineOne'>Returns</span>
                            <span className='header__optionLineTwo'>& Orders</span>
                        </div>
                    </Link>

                    <Link to='/' className='header__link'>
                        <div className='header__option'>
                            <span className='header__optionLineOne'>Your</span>
                            <span className='header__optionLineTwo'>Prime</span>
                        </div>
                    </Link>

                    <Link to='/checkout' className='header__link'>
                        <div className='header_optionBasket'>
                            <ShoppingCartIcon />
                            <span className='header__optionLineTwo header__optionCount'>{basket?.length}</span>
                        </div>

                    </Link>

    

                </div>
            
        
          
            </nav>
        )
    }

export default Header;