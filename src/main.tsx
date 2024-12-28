import { createBrowserRouter } from './router/createBrowserRouter.ts'
import { RouterProvider } from './router/routerProvider.tsx'
import { ProductList } from './pages/ProductList.tsx'
import { AddProduct } from './pages/AddProduct.tsx'
import { createRoot } from 'react-dom/client'
import { Product } from './pages/Product.tsx'
import './index.css'

const routes = createBrowserRouter([
  { path: "/", element: <ProductList /> },
  { path: "/add", element: <AddProduct /> },
  { path: "/product/:id", element: <Product /> }
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={routes} />
) 
