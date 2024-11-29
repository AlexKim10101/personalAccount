import React, { useRef } from "react";
import {
	Box,
	Button,
	Card,
	CardContent,
	Typography,
	IconButton,
} from "@mui/material";

const CardGallery = () => {
	const scrollContainerRef = useRef<HTMLDivElement>(null);

	const scrollLeft = () => {
		if (scrollContainerRef.current) {
			scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
		}
	};

	const scrollRight = () => {
		if (scrollContainerRef.current) {
			scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
		}
	};

	return (
		<Box sx={{ position: "relative", padding: "20px", textAlign: "center" }}>
			<Box
				ref={scrollContainerRef}
				sx={{
					display: "flex",
					overflowX: "auto",
					scrollBehavior: "smooth",
					gap: 2,
					"&::-webkit-scrollbar": { display: "none" }, // Скрытие скроллбара
				}}
			>
				{[...Array(5)].map((_, index) => (
					<Card key={index} sx={{ minWidth: 300, flexShrink: 0 }}>
						<CardContent>
							<Typography variant="h5" component="div">
								Карточка {index + 1}
							</Typography>
							<Typography variant="body2">
								Это содержимое карточки {index + 1}.
							</Typography>
						</CardContent>
					</Card>
				))}
			</Box>

			<Box
				sx={{ display: "flex", justifyContent: "center", marginTop: 2, gap: 1 }}
			>
				<IconButton
					onClick={scrollLeft}
					aria-label="scroll left"
					color="primary"
				>
					left
				</IconButton>
				<IconButton
					onClick={scrollRight}
					aria-label="scroll right"
					color="primary"
				>
					right
				</IconButton>
			</Box>
		</Box>
	);
};

export default CardGallery;
