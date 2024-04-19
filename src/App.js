import {RouterProvider, createBrowserRouter} from "react-router-dom"
import LandingPage from "./pages/landingpage/LandingPage";
import LoginPage from "./pages/loginpage/LoginPage";

const router = createBrowserRouter ([
 {path: "/", element: <LandingPage/>},
 {path: "/login", element: <LoginPage/>}
])

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
