import { createBrowserRouter } from '@router/createBrowserRouter.ts'
import { RouterProvider } from '@router/router-provider.tsx'
import { ProductList } from '@pages/product-list.tsx'
import { AddProduct } from '@pages/add-product.tsx'
import { createRoot } from 'react-dom/client'
import { Product } from '@pages/product.tsx'
import { Provider } from './provider.tsx'
import './index.css'

const routes = createBrowserRouter([
  { path: "/", element: <ProductList /> },
  { path: "/add", element: <AddProduct /> },
  { path: "/product/:id", element: <Product /> }
])

createRoot(document.getElementById('root')!).render(
  <Provider>
    <RouterProvider router={routes} />
  </Provider>
) 
