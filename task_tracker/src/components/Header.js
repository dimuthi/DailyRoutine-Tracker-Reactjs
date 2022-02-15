import Button from "./Button";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("click");
  };
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="submit" onClick={onClick} />
    </header>
  );
};

Header.defaultProps = {
  title: "Hello",
};
export default Header;
