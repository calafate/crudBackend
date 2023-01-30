import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import AllBlogs from './components/AllBlogs';
import CreateBlog from './components/CreateBlog';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      {/* <h1>MY BLOG</h1> */}
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element= {<AllBlogs/>} exact />
          <Route path="/createblog" element= {<CreateBlog/>} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
