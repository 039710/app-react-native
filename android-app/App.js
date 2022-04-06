import Home from "./pages/Home";
import Success from "./pages/Success";
import { Provider } from "react-redux";
import store from "./redux/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Router>
    </Provider>
  );
}
