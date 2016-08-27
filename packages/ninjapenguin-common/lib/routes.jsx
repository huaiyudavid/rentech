/*
A new custom route for our custom page. 
Browse to http://localhost:3000/my-custom-route to see it.
*/

import ContactUs from './components/ContactUs.jsx';

Telescope.routes.add({name:"contact", path:"contactUs", component:ContactUs});
