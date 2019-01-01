import Link from 'next/link';
import css from 'styled-jsx/css';

const Styles = css`
    .header {
        display: flex;
        background-color: #005593;
    }

    .logo {
        margin-right: 10px;
    }
    
    ul {
        padding: 0;
        display: flex;
    }

    li {
        list-style: none;
    }

    span {
        text-decoration: none;
        color: white;
        cursor:pointer;
    }

    span:hover {
        opacity: 0.6;
    }
`;


const Header = () => (
    <div className="header">
        <img className="logo" src="https://via.placeholder.com/65x65.png?text=LOGO" />
        <ul>
            <li>
                <Link href="/">
                    <span>Home</span>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <span>About</span>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <span>Contact</span>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <span>Privacy Policy</span>
                </Link>
            </li>
        </ul>
        
        <style jsx>{Styles}</style>
    </div>
)

export default Header