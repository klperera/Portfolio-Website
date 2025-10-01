import { Briefcase, Code, GraduationCap, Home, Mail, User } from "lucide-react";

export const sections = [
    "hero",
    "projects",
    "skills",
    "education",
    "about",
    "contact",
];


export const navItems = [
    { id: "hero", label: "Home", icon: Home },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "skills", label: "Skills", icon: Code },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "about", label: "About", icon: User },
    { id: "contact", label: "Contact", icon: Mail },
];

export const socialItems = [
    { label: "GitHub", link: "https://github.com/klperera" },
    { label: "LinkedIn", link: "https://linkedin.com/in/klperera" },
    { label: "Email", link: "mailto:kalpa@example.com" },
  ];