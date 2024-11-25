import Link from 'next/link';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="social">
          <ul>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      <div className="copyRight">
        <p>&copy; 2024 CARS24. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
