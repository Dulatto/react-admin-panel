import Home from './pages/home/Home';
import Products from './pages/products/Products';
import Users from './pages/users/Users';

import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from 'react-router-dom';

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />,
        },
        {
            path: 'users',
            element: <Users />,
        },
        {
            path: 'products',
            element: <Products />,
        },
    ]);
    return <RouterProvider router={router} />;
}

export default App;
