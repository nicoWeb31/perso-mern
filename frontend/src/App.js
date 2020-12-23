import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import About from "./pages/about/About";
import Service from "./pages/service/Service";

function App() {
    return (
        <Router>
            <div className="App">
                <Header />

                <main className="main">
                    <Route exact path="/" component={HomePage} />
                    <Route path="/about" component={About} />
                    <Route path='/service' component={Service} />
                </main>

                <Footer />
            </div>
        </Router>
    );
}

export default App;
