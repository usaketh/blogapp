import './App.css';
import {  Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Create from './Pages/Create';
import Home from './Pages/Home';
import SignUp from './Pages/Signup';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='signup' element={<SignUp/>}/>
      <Route path='addpost' element={<Create/>}/>
    </Route>
  )
)


function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
