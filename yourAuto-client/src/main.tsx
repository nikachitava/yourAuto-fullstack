import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import PagesRouter from "./PagesRouter";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<PagesRouter />
	</StrictMode>
);
