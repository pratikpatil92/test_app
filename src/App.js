import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import PageRoutes from "./PageRoutes";
import store from "./redux/store";
import "./style/style.css";
import "react-toastify/dist/ReactToastify.css";



function App() {
  return (
    <Provider store={store}>
      
      <BrowserRouter>
          <PageRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
