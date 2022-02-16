import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Login} from "./Login";
import PostPage from './PostPage'
import '../App.css'

function App() {
  return (
    <div className='App' style={{ fontFamily: 'Avenir' }}>
      <h1>hello</h1>
      <BrowserRouter>
       <Routes>
        {/* <AuthProvider> */}
            {/* <Route path="/chats" component={Chats} />*/}
            <Route path="/" element={<Login/>} />
            
            <Route path="post" element={<PostPage/>} />
        {/* </AuthProvider> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
