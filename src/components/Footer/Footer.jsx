import React from "react";

import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      CopyrightÂ© {currentYear} by Abani All rights reserved.
    </footer>
  );
}

export default Footer;
