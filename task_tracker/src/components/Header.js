import Button from "./Button"

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="submit"/>
    </header>
  );
};

Header.defaultProps = {
  title: "Hello",
};
export default Header;
