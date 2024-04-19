import {RouterProvider, createBrowserRouter} from "react-router-dom"
import LandingPage from "./pages/landingpage/LandingPage";
import LoginPage from "./pages/loginpage/LoginPage";
import DealersPage from "./pages/dealerspage/DealersPage";

const router = createBrowserRouter ([
 {path: "/", element: <LandingPage/>},
 {path: "/login", element: <LoginPage/>},
 {path: "/dealerspage", element: <DealersPage/>}
])

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
