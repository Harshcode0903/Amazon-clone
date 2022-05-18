import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function App() {
  const [{ user }, dispatch] = useStateValue(); //data layer
  //piece of code which runs based on a given condition
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user is logged in...
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged Out...
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      //any cleanup operations go in here
      unsubscribe();
    };
  }, []);
  console.log(user);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            exact
            path="/checkout"
            element={
              <h1>
                <Header /> <Checkout />
              </h1>
            }
          />

          <Route exact path="/login" element={<Login />} />
          <Route
            exact
            path="/"
            element={
              <div>
                <Header /> <Home />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

/* <Route exact path="/about" element={<About mode={mode} />}  />
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/> }  /> */
