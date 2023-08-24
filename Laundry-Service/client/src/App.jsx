import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import AdminDashboard from "./Components/Admin_Dashboard/Admindashboard"

// import React router dom
import{
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

// Creating a router
const router = createBrowserRouter([
  {
  path:'/',
  element:<div><Login/></div>
},
{
  path:'/register',
  element:<div><Register/></div>
},
{
  path:'/dashboard',
  element:<div><Dashboard/></div>
},
{
  path: '/Admin_Dashboard',
  element:<div><AdminDashboard/></div>
}
])
function App() {
  return (
   <div>
    <RouterProvider router={router}/>
    </div>
    )
}

export default App;
