"use client";
import React from "react";
import { navItems, socialItems } from "../data/data";
import StaggeredMenu from "./StaggeredMenu/StaggeredMenu";

const Header = () => {
  // Transform navItems to StaggeredMenu format
  const menuItems = navItems.map((item) => ({
    label: item.label,
    ariaLabel: `Navigate to ${item.label} section`,
    link: `#${item.id}`,
  }));

  const handleMenuOpen = () => {
    document.body.style.overflow = "hidden";
  };

  const handleMenuClose = () => {
    document.body.style.overflow = "unset";
  };

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      <StaggeredMenu
        position="right"
        colors={["#000000", "#1a1a1a", "#333333"]}
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        logoUrl="/next.svg"
        menuButtonColor="#000000"
        openMenuButtonColor="#ffffff"
        accentColor="#5227FF"
        changeMenuColorOnOpen={true}
        onMenuOpen={handleMenuOpen}
        onMenuClose={handleMenuClose}
        className="pointer-events-auto"
      />
    </div>
  );
};

export default Header;
