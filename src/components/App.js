import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";

function App() {

  return (
    <div style={{ fontFamily: 'Avenir' }}>
       <Router>
        {/* <AuthProvider> */}
          <Routes>
            {/* <Route path="/chats" component={Chats} />*/}
            <Route path="/" element={<Login/>} /> 
          </Routes> 
        {/* </AuthProvider> */}
      </Router>
    </div>
  );
}

export default App;
