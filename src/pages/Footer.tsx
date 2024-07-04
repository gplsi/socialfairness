const Footer = () => {
  return (
    <>
      <footer className="site-footer text-light">
        <div className="container">
          <div className="site-footer-inner">
            <div className="brand footer-brand"></div>
            <ul className="footer-links list-reset">
              <li>
                <a href="https://gplsi.dlsi.ua.es">GPLSI</a>
              </li>
              <li>
                <a href="https://sinai.ujaen.es/">SINAI</a>
              </li>
              <li>
                <a href="https://socialfairness.gplsi.es">SocialFairness</a>
              </li>
            </ul>
            <ul className="footer-social-links list-reset"></ul>
            <div className="footer-copyright">
              © 2023 SocialFairness | Powered by GPLSI and SINAI
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
