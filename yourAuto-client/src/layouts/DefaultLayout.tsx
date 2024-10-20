import { layoutProps } from "../Types/layoutProps";

export const DefaultLayout: React.FC<layoutProps> = ({ children }) => {
	return (
		<div>
			DefaultLayout
			{children}
		</div>
	);
};
