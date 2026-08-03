import { Outlet } from "react-router-dom";
import { ScrollToTop } from "./ScrollToTop";
import { BackToTop } from "./BackToTop";

export function AppLayout() {
	return (
		<>
			<ScrollToTop />
			<BackToTop />
			<Outlet />
		</>
	);
}
