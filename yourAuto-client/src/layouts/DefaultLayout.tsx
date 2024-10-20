import { Outlet } from "react-router-dom";
import { layoutProps } from "../Types/layoutProps";
import NavBar from "@/components/custom/NavBar";

export const DefaultLayout: React.FC<layoutProps> = ({ children }) => {
	return (
		<section className="min-h-screen bg-red-400">
			<NavBar />
			<Outlet />
			{children}
		</section>
	);
};
