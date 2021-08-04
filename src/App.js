import "./App.css";
import Login from "./Components/Login/Login";

const handleFacebookLogin = (event) => {
  event.preventDefault();
};

const handleGoogleLogin = (event) => {
  event.preventDefault();
};

function App() {
  return (
    <div className="app">
      <div className="app__login">
        <Login
          onFacebookLogin={handleFacebookLogin}
          onGoogleLogin={handleGoogleLogin}
        />
      </div>
    </div>
  );
}

export default App;
