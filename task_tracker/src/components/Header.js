import Button from "./Button";

const Header = ({ title, onShow, buttonText }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={`${!buttonText ? "green" : "red"}`}
        text={!buttonText ? "Add" : "Cancel"}
        onClick={onShow}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Hello",
};
export default Header;
