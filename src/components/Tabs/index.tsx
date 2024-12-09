import React, { useState } from "react";
import { Tabs, Tab, Box, Divider } from "@mui/material";

import "./tabs.css";

interface CustomTabsProps {
	tabs: string[];
	activeTab: number;
	setActiveTab: (index: number) => void;
}

const CustomTabs: React.FC<CustomTabsProps> = ({
	tabs,
	activeTab,
	setActiveTab,
}) => {
	// const [activeTab, setActiveTab] = useState(0);

	return (
		<div>
			<Tabs
				value={activeTab}
				onChange={(_, newValue) => setActiveTab(newValue)}
				variant="fullWidth"
				sx={{
					".MuiTabs-indicator": {
						display: "none",
					},
				}}
			>
				{tabs.map((tab, index) => (
					<Tab
						key={index}
						label={tab}
						className="tabs-with-divider"
						disableRipple
						sx={{
							fontFamily: "Manrope",
							fontWeight: activeTab === index ? "600" : "200",
							transition: "none",
						}}
					/>
				))}
			</Tabs>
		</div>
	);
};
export default CustomTabs;
