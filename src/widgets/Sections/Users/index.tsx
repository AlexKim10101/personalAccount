import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import { Box, Button } from "@mui/material";
import { ReactComponent as ArrowIcon } from "@assets/icons/arrow-icon.svg";
import { ReactComponent as TrashIcon } from "@assets/icons/svg/trash.svg";

import "./user.css";
import { IAccountData } from "types";
import { Form } from "@components/Form";
import { DeleteUser } from "@components/DeleteUser";

type EditableListProps = {
	users: IAccountData[];
	handleOpen: (content: React.ReactNode) => void;
	handleClose: () => void;
	deleteUser?: (id: string) => void;
};

const User: React.FC<EditableListProps> = ({
	users,
	deleteUser,
	handleOpen,
	handleClose,
}) => {
	return (
		<div className="users-section">
			<div className="users-section-title">Список пользователей</div>
			<Button
				variant="contained"
				onClick={() => {
					handleOpen(
						<>
							<div className="modal-title">Добавление пользователя</div>
							<Form
								submitBtnText="Сохранить"
								closeModal={() => handleClose()}
								enableNameField
								requiredNameField
								enableResetBtn
								onSave={data => console.log(data)}
							/>
						</>
					);
				}}
				className="domen-btn orange-btn"
				disableRipple
				disableElevation
			>
				<div className="link-content">Добавить пользователя</div>
				<div className="link-content">
					<ArrowIcon />
				</div>
			</Button>
			<ol className="user-list">
				{users.map(item => (
					<li key={item.id} className="user-list-item">
						<div className="user-list-item-content">
							<div className="user-title">{item.email}</div>
							<div className="user-btn-wrapper">
								<Button
									variant="contained"
									onClick={() => {
										handleOpen(
											<DeleteUser
												title={item.email}
												onDelete={() => console.log("delete", item.email)}
												closeModal={handleClose}
											/>
										);
									}}
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
										<TrashIcon />
									</Box>
								</Button>
							</div>
						</div>
					</li>
				))}
			</ol>
		</div>
	);
};

export default User;
