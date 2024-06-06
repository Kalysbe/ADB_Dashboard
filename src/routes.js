/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Material Dashboard 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import Declaration from "layouts/declaration";
import EditBlog from "layouts/Blog"
import Notifications from "layouts/clients";
import Profile from "layouts/profile";
import Users from "layouts/users";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

//dashboard
import DeclarationTypes from "layouts/declaration/declarationTypes"
import Form_102_4 from "layouts/declaration/102_4";

import AddPost from "layouts/addPost";

import Home from "layouts/main/Home";
import Blog from "layouts/main/Blog";
import FullPost  from "layouts/main/FullPost";
import Contacts from "layouts/main/Contacts"

import TaxCar from "layouts/main/Taxes/TaxCar";
import TaxHome from "layouts/main/Taxes/TaxHome";
import TaxNoHome from "layouts/main/Taxes/TaxNoHome";
import TaxPlace from "layouts/main/Taxes/TaxPlace";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Главная",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    title:'12',
    component: <Dashboard />,
    role:[1,2,5]
  },
  {
    type: "collapse",
    name: "Пользователи",
    key: "users",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/users",
    component: <Users />,
    role:[1]
  },
  {
    type: "collapse",
    name: "Блог",
    key: "allposts",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/allposts",
    component: <EditBlog />,
    role:[1],

  },
  {
    type: "collapse",
    name: "Расчет налогов",
    key: "billing",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/billing",
    component: <Billing />,
    role:[1,2]
  },
  {
    type: "collapse",
    name: "Клиенты",
    key: "clients",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/clients",
    component: <Notifications />,
    role:[1]
  },
  {
    type: "collapse",
    name: "Справочник",
    key: "tables",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/tables",
    component: <Tables />,
    role:[1,2]
  },
  {
    type: "collapse",
    name: "Декларация",
    key: "declaration",
    icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
    route: "/declaration",
    component: <Declaration />,
    role:[1,2]
  },





  {
    key: "add-post",
    route: "/add-post", 
    component: <AddPost />,
    role:[1]
  },
  {
    key: "editpost",
    route: "/posts/:id/edit", 
    component: <AddPost />,
    role:[1]
  },
  {
    type: "collapse",
    name: "Налоговый кодекс",
    key: "codex",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/codex",
    component: <Profile />,
    role:[1,2,5]
  },
  {
  
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
    role:[1]
  },
  {

    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
    role:[1]
  },
  {
    
    name: "Main",
    key: "main",
    route: "/",
    component: <Home />,
    role:[1]
  },
  {
    name: "Blog",
    key: "main",
    route: "/blog",
    component: <Blog />,
    role:[1]
  },
  {
    name: "Contacts",
    key: "contacts",
    route: "/contacts",
    component: <Contacts />,
    role:[1]
  },
  {
    name: "TaxCar",
    key: "taxcar",
    route: "/taxcar",
    component: <TaxCar />,
    role:[1]
  },
  {
    name: "TaxHome",
    key: "taxhome",
    route: "/taxhome",
    component: <TaxHome />,
    role:[1]
  },
  {
    name: "TaxNoHome",
    key: "taxnohome",
    route: "/taxnohome",
    component: <TaxNoHome />,
    role:[1]
  },
  {
    name: "taxplace",
    key: "taxplace",
    route: "/taxplace",
    component: <TaxPlace />,
    role:[1]
  },
  {
    name: "addpost",
    key: "fullpost",
    route: "/posts/:id",
    component: <FullPost />,
    role:[1]
  },

  {
    name: "Создание декларации",
    key: "declaration_form",
    icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
    route: "/declaration/types",
    component: <DeclarationTypes />,
    role:[1,2]
  },

  {
    name: "Создание декларации",
    key: "declaration_form",
    icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
    route: "/declaration/102_4",
    component: <Form_102_4 />,
    role:[1,2]
  },
  {
    name: "Редактирование декларации",
    key: "declaration_form",
    icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
    route: "/declaration/102_4/:id",
    component: <Form_102_4 />,
    role:[1,2]
  },
];

export default routes;
