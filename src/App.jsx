import RoutesMain from "./Routes";
import { Provider } from "./Context/AuthContext";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Provider>
          <RoutesMain />
        </Provider>
        <ToastContainer theme='dark' autoClose='1500' />
      </header>
    </div>
  );
}

export default App;
