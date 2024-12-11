import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import { Box, Button } from "@mui/material";
import { ReactComponent as ArrowIcon } from "@assets/icons/icon1.svg";
import { ReactComponent as TrashIcon } from "@assets/icons/svg/trash.svg";

import "./user.css";

type UserItem = {
	id: string;
	title: string;
};

type EditableListProps = {
	users: UserItem[];
	deleteUser?: (id: string) => void;
};

const User: React.FC<EditableListProps> = ({ users, deleteUser }) => {
	return (
		<div className="users-section">
			<div className="users-section-title">Список пользователей</div>
			<Link to="/login" className="link link-orange link-min-width">
				<div className="link-content">Продлить лицензию</div>
				<div className="link-content">
					<ArrowIcon />
				</div>
			</Link>
			<ol className="user-list">
				{users.map(item => (
					<li key={item.id} className="user-list-item">
						<div className="user-list-item-content">
							<div className="user-title">{item.title}</div>
							<div className="user-btn-wrapper">
								<Button
									variant="contained"
									onClick={() => {
										console.log("delete user");
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
