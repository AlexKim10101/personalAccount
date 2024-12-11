import React, { useState, useRef, useEffect } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { ReactComponent as EditIcon } from "@assets/icons/svg/editIcon.svg";
import { ReactComponent as CancelIcon } from "@assets/icons/svg/Cancel.svg";
import { ReactComponent as ApproveIcon } from "@assets/icons/svg/Approve.svg";
import "./domens.css";

type DataItem = {
	id: string;
	title: string;
	value: string;
};

type EditableListProps = {
	items: DataItem[];
	onSave?: (id: string, newValue: string) => void;
};

const EditableList: React.FC<EditableListProps> = ({ items, onSave }) => {
	const [editState, setEditState] = useState<Record<string, string | null>>(
		() => items.reduce((acc, item) => ({ ...acc, [item.id]: null }), {})
	);
	const [activeEditor, setActiveEditor] = useState<string | null>(null);

	const inputRefs = useRef<Record<string, HTMLInputElement | null>>(
		Object.fromEntries(items.map(item => [item.id, null]))
	);

	const handleEdit = (id: string) => {
		setActiveEditor(id);
		setEditState(prev => ({
			...prev,
			[id]: items.find(item => item.id === id)?.value || "",
		}));
	};

	const handleSave = (id: string) => {
		if (onSave && editState[id] !== null) {
			onSave(id, editState[id]!);
		}
		setEditState(prev => ({ ...prev, [id]: null }));
		setActiveEditor(null);
	};

	const handleCancel = (id: string) => {
		setEditState(prev => ({ ...prev, [id]: null }));
		setActiveEditor(null);
	};

	const handleChange = (id: string, newValue: string) => {
		setEditState(prev => ({ ...prev, [id]: newValue }));
	};

	useEffect(() => {
		if (activeEditor) {
			inputRefs.current[activeEditor]?.focus();
		}
	}, [activeEditor]);

	return (
		<div className="domen-list">
			{items.map(item => (
				<div key={item.id} className="domen-list-item">
					<Typography variant="h6" sx={{ width: "100%" }}>
						{item.title}
					</Typography>
					<TextField
						value={
							editState[item.id] !== null ? editState[item.id]! : item.value
						}
						onChange={e => handleChange(item.id, e.target.value)}
						disabled={editState[item.id] === null}
						size="small"
						inputRef={ref => (inputRefs.current[item.id] = ref)}
						sx={{
							maxWidth: 340,
							fontSize: "1rem",
							flexGrow: 1,
						}}
					/>
					{editState[item.id] === null ? (
						<div className="domen-btn-wrapper">
							<Button
								variant="contained"
								color="primary"
								disableRipple
								disableElevation
								onClick={() => handleEdit(item.id)}
								disabled={activeEditor !== null}
								className="domen-btn"
							>
								<Box
									sx={{
										width: 24,
										height: 24,
										borderRadius: "50%",
										backgroundColor: "white",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									<EditIcon />
								</Box>
							</Button>
						</div>
					) : (
						<div className="domen-btn-wrapper">
							<Button
								variant="contained"
								onClick={() => handleSave(item.id)}
								className="domen-btn"
								disableRipple
								disableElevation
							>
								<Box
									sx={{
										width: 24,
										height: 24,
										borderRadius: "50%",
										backgroundColor: "white",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									<ApproveIcon />
								</Box>
							</Button>
							<Button
								variant="outlined"
								onClick={() => handleCancel(item.id)}
								className="domen-btn"
								disableRipple
								disableElevation
							>
								<Box
									sx={{
										width: 24,
										height: 24,
										borderRadius: "50%",
										backgroundColor: "white",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									<CancelIcon />
								</Box>
							</Button>
						</div>
					)}
				</div>
			))}
		</div>
	);
};

export default EditableList;
