import "./App.css";
import { Router, Switch, Route, Link } from "react-router-dom";
import FeedPage from "./pages/FeedPage";
import DetailedPage from "./pages/DetailedPage";
import AboutPage from "./pages/AboutPage";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Switch>
        <Route path="/feed" component={FeedPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/articles/:id" component={DetailedPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
