import Link from "next/link";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="footer__row">
          <div className="footer__left">
            © {year} Copyright. All Rights reserved.
          </div>
          <div className="footer__right">
            <div className="footer-menu">
              <div className="footer-menu__item">
                <Link href="/privacy">Privacy Policy</Link>
              </div>
              <div className="footer-menu__item">
                <Link href="/contacts">Contact Us</Link>
              </div>
              <div className="footer-menu__item">
                <Link href="/dmca">DMCA Disclaimer</Link>
              </div>
              <div className="footer-menu__item">
                <Link href="/terms">Terms & Conditions</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
