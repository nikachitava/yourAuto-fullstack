import { layoutProps } from "../Types/layoutProps";

const DashboardLayout: React.FC<layoutProps> = ({ children }) => {
	return (
		<div>
			<Outlet />
			{children}
		</div>
	);
};

export default DashboardLayout;
