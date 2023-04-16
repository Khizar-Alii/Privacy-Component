import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ShopIcon from "@mui/icons-material/Shop";
import AppleIcon from "@mui/icons-material/Apple";

function Footer() {
  return (
    <div>
      <div className="red"></div>

      <footer className="footer">
        <section className="leftsec">
          <h1>My Logo Image will be here</h1>
          <ul className="social-icons">
            <li>
              <InstagramIcon />
            </li>
            <li>
              <YouTubeIcon />
            </li>
            <li>
              <TwitterIcon />
            </li>
            <li>
              <WhatsAppIcon />
            </li>
          </ul>
          <p>&copy; 2023 Wefaq. All rights reserved.</p>
        </section>
        <section className="midsec">
          <div className="list1">
            <span className="helfulLinks">Helpfull Links</span>
            <ul className="helfulLinksul">
              <li>
                <a href="/">About us</a>
              </li>
              <li>
                <a href="/">Features</a>
              </li>
              <li>
                <a href="/">Faqs</a>
              </li>
              <li>
                <a href="/">Contacts</a>
              </li>
            </ul>
          </div>
          <div className="list2">
            <span className="legal">Legal</span>
            <ul className="legalul">
              <li>
                <a href="/">Terms</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
              <li>
                <a href="/">Help and Support</a>
              </li>
            </ul>
          </div>
        </section>
        <section className="rightsec">
          <span className="contact">Contact Us</span>
          <p className="email">E-mail : support@wefaq.app</p>
          <div className="appIcons">
            {/* <a href="/">
              <GetAppIcon className="appIcon" />
            </a> */}
            <div className="googelplay">
              <AppleIcon className="appIcon" />
              <p>
                Download on<h2>App Store</h2>
              </p>
            </div>
            <div className="googelplay">
              <ShopIcon className="appIcon" />
              <p>
                Get it on the <h2>Googel Play</h2>
              </p>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default Footer;
