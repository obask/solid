import { hydrate } from "xolid/web";
import App from "./components/App";

// entry point for browser
hydrate(() => <App/>, document);
