export const Hamburger = ({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}) => {
  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`hamburger is-md ${isMenuOpen ? "is-active" : ""}`}
      onClick={handleClick}
    >
      <span className="hamburger-line"></span>
      <span className="hamburger-line"></span>
      <span className="hamburger-line"></span>
    </div>
  );
};
