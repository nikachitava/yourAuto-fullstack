import { layoutProps } from "../Types/layoutProps";

const DashboardLayout: React.FC<layoutProps> = ({ children }) => {
	return (
		<div>
			DashboardLayout
			{children}
		</div>
	);
};

export default DashboardLayout;
