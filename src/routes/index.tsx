import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Resume from "../pages/Resume/Resume";
import Work from "../pages/Work/Work";
import ContactPage from "../pages/ContactPage/ContactPage";

export default function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/resume" element={<Resume />} />
			<Route path="/work" element={<Work />} />
			<Route path="/contact" element={<ContactPage />} />
		</Routes>
	);
}