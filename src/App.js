import {RouterProvider, createBrowserRouter} from "react-router-dom"
import LandingPage from "./pages/landingpage/LandingPage";
import LoginPage from "./pages/loginpage/LoginPage";
import DealersDetails from "./pages/dealerspage/DealersDetails";
import DealerCard from "./pages/dealerspage/DealerCard";
import SignUp from "./pages/loginpage/SignUp";
import Register from "./pages/loginpage/Register";

const router = createBrowserRouter ([
 {path: "/", element: <LandingPage/>},
 {path: "/login", element: <LoginPage/>},
 {path: "/dealersdetails", element: <DealersDetails/>},
 {path: "/dealercard", element: <DealerCard/>},
 {path: "/signup", element: <SignUp/>},
 {path: "/register", element: <Register/>},
])

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
