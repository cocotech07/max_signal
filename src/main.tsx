import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import {Provider} from "react-redux";
import store from "./Global/store.ts";
import {PersistGate} from "redux-persist/integration/react";
import "react-toastify/dist/ReactToastify.css";
import {persistStore} from "redux-persist";
import {ToastContainer} from "react-toastify";

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <ToastContainer />
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
);
