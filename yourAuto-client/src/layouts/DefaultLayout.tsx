import { Outlet } from "react-router-dom";
import { layoutProps } from "../Types/layoutProps";

export const DefaultLayout: React.FC<layoutProps> = ({ children }) => {
	return (
		<div>
			<Outlet />
			{children}
		</div>
	);
};
