import utilities from "./tailwind.json";
import Login from "./pages/Login";
import Success from "./pages/Success";
import { Provider } from "react-redux";
import store from "./redux/index";
import {
  useNavigate,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
export default function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}
