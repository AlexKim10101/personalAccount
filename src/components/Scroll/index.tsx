import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToHash = () => {
	const location = useLocation();

	useEffect(() => {
		if (location.hash) {
			const target = document.querySelector(location.hash);
			if (target) {
				target.scrollIntoView({ behavior: "smooth" });
			}
		}
	}, [location]);

	return null;
};

export default ScrollToHash;
