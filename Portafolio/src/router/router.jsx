import { createBrowserRouter } from "react-router-dom";
import Layout from '../layouts/Main.jsx'


const routers = createBrowserRouter([
    {
        path:'/', element: <Layout/>,
        children:[
            {}
        ]
    }
])

export default routers