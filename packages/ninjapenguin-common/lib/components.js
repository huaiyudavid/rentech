/*
This file centralizes all our custom component overrides. 
*/

import CustomLogo from "./components/CustomLogo.jsx";
import CustomNewsletter from "./components/CustomNewsletter.jsx";
import CustomPostsItem from "./components/CustomPostsItem.jsx";
import CustomFooter from "./components/CustomFooter.jsx";

// Telescope.components.Logo = CustomLogo;
Telescope.components.Newsletter = CustomNewsletter;
Telescope.components.CustomPostsItem = CustomPostsItem;

Telescope.components.Footer = CustomFooter;
