import { Outlet } from "react-router-dom";
import { layoutProps } from "../Types/layoutProps";

const AuthLayout: React.FC<layoutProps> = ({ children }) => {
	return (
		<div>
			<Outlet />
			{children}
		</div>
	);
};

export default AuthLayout;
