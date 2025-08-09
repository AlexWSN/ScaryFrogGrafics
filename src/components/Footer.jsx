import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-orange-500 text-center py-4 mt-12 border-t border-orange-600">
      <p className="text-sm select-none">
        © {new Date().getFullYear()} ScaryFrogGraphics. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
