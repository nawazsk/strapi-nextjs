import Header from './Header';
import CustomHead from "./CustomHead";
import css from 'styled-jsx/css';

const Styles = css`
  .container {
      width: 1000px;
      margin: 0 auto;
  }
`;

const Layout = (props) => (
  <div className="container">
    <CustomHead />
    <Header />
    {props.children}
    <style jsx>{Styles}</style>
  </div>
)

export default Layout