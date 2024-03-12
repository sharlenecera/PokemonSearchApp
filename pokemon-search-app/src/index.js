import React from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./app/App";

import { store } from "./app/store";

const root = createRoot(document.getElementById('root'));

const render = () => {
    root.render(
        <React.StrictMode>
            <App 
              state={store.getState()}
              dispatch={store.dispatch}
            />
        </React.StrictMode>
    );
};
store.subscribe(render);
render();

