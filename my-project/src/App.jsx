import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from 'react-router-dom';
import'./index.css'
import Support from './components/Support'
import Login from './components/Login'
import Topics from './components/Topics';
import Resources from './components/Resources';
import Home from './components/Home';

export default function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path="/login" element={<Login />} />
      <Route path='/home' element={<Home/>} />
      <Route path="/support" element={<Support />} />
      <Route path="/resources" component={<Resources/>} />
      <Route path="/topics" element={<Topics />}>
      </Route>
    </Route>
  ))
  return (
    <RouterProvider router={router} />
  )
}

