import {createRoot} from "react-dom/client";

import App from "./components/App.jsx";

const domMode = document.getElementById("root");

const root = createRoot(domMode);

root.render(<App />);