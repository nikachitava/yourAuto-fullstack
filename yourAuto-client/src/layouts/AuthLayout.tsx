import { layoutProps } from "../Types/layoutProps";

const AuthLayout: React.FC<layoutProps> = ({ children }) => {
	return (
		<div>
			AuthLayout
			{children}
		</div>
	);
};

export default AuthLayout;
