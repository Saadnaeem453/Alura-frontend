import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
// import { Login } from "./Pages/Login";
// import { Signup } from "./Pages/Signup";
// import "./index.css";
// import { ForgetPassword } from './Pages/ForgetPassword';
// import { Dashboard } from './Pages/Dashboard';
// import { ActivateAccount } from './Pages/ActivateAccount';
// import { PanelLayout } from './Components/PanelLayout';
// import { Leads } from './Pages/Leads';
// import { Assistant } from './Pages/Assistant';
// import { CallLogs } from './Pages/CallLogs';
// import { Settings } from './Pages/Settings';
// import { Profile } from './Pages/Profile';
// import { LoginChecker } from './Components/LoginChecker';
// import { Files } from './Pages/Files';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  // {
  //   path: "/login",
  //   element: (
  //     <LoginChecker allowedUser='not-logged-in'>
  //       <Login />
  //     </LoginChecker>
  //   ),
  // },
  // {
  //   path: "/signup",
  //   element: (
  //     <LoginChecker allowedUser='not-logged-in'>
  //       <Signup />
  //     </LoginChecker>
  // ),
  // },
  // {
  //   path: "/forget-password",
  //   element: <LoginChecker allowedUser='not-logged-in'>
  //     <ForgetPassword />
  //   </LoginChecker>,
  // },
  // {
  //   path: "/activate-account",
  //   element: <ActivateAccount />,
  // },
  {
    path: "/user",
    element: (
      // <LoginChecker allowedUser='logged-in'>
        <PanelLayout />
      // {/* </LoginChecker> */}
    ),
    children: [
      {
        path: "dashboard",
        element: <Dashboard />
      },
     
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <HelmetProvider>

    <RouterProvider router={router} />
  </HelmetProvider>

  </StrictMode>,
);
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import Home from './pages/Home';
import { PanelLayout } from './pages/PanelLayout';
import Dashboard from './pages/Dashboard';

