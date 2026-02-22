import { ReactNode } from "react";
import "./WorkNavbarLink.scss";

type WorkNavbarLinkProps = {
	children: ReactNode;
	id: number;
	isActive: boolean;
	onClick: (id: number) => void;
};

const WorkNavbarLink = ({
	children,
	id,
	isActive,
	onClick,
}: WorkNavbarLinkProps) => {
	return (
		<li
			className={`workNavbarLink ${isActive ? "workNavbarLink--active" : ""}`}
			onClick={() => onClick(id)}
		>
			{children}
		</li>
	);
};

export default WorkNavbarLink;
