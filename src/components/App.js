import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";

function App() {
  return (
    <div className="App">
       <Router>
        {/* <AuthProvider> */}
          <Routes>
            {/* <Route path="/chats" component={Chats} />*/}
            <Route path="/" component={Login} /> 
          </Routes> 
        {/* </AuthProvider> */}
      </Router>
    </div>
  );
}

export default App;
