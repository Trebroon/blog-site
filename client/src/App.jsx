import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// styles & components
import './App.css'
import Navbar from './components/Navbar'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Dashboard from './pages/Dashboard/Dashboard'
import CreateBlog from './pages/CreateBlog/CreateBlog'
import EditBlog from './pages/EditBlog/EditBlog'
import BlogPage from './pages/BlogPage/BlogPage'

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/blog/:id' element={<BlogPage />} />
            <Route path='/blog/:id/edit' element={<EditBlog />} />
            <Route path='/createBlog' element={<CreateBlog />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;