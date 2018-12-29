import Link from 'next/link';
import css from 'styled-jsx/css'

const styles = css`
    h1, a {
        font-family: "Arial";
        font-size:40px;
    }

    ul {
        padding: 0;
    }

    li {
        list-style: none;
        margin: 5px 0;
    }

    a {
        text-decoration: none;
        color: blue;
    }

    a:hover {
        opacity: 0.6;
    }
`;


const Header = () => (
    <div>
        <Link href="/">
          <a className="anchor">Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <style jsx>{styles}</style>
    </div>
)

export default Header