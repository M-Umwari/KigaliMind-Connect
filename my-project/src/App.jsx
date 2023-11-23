import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import Support from './components/Support'
import Login from './components/Login'
import Topics from './components/Topics';
import Resources from './components/Resources';
import Home from './components/Home';
import Anxiety from './components/Anxiety';
import Loneliness from './components/Loneliness';
import ADHD from './components/ADHD';
import Depression from './components/Depression';
import Stress from './components/Stress';

export default function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path="/login" element={<Login />} />
      <Route path='/' element={<Home />} />
      <Route path="/support" element={<Support />} />
      <Route path="/resources" component={<Resources />} />
      <Route path="/topics" element={<Topics />} />
      <Route path="/topics/anxiety" element={<Anxiety />} />
      <Route path='/topics/loneliness' element={<Loneliness />} />
      <Route path='/topics/adhd' element={<ADHD />} />
      <Route path='/topics/depression' element={<Depression />} />
      <Route path='/topics/stress' element={<Stress />} />
    </Route>
  ))
  return (
    <RouterProvider router={router} />
  )
}

