import React from "react";
import { ReactComponent as ArrowIcon } from "@assets/icons/arrow-icon.svg";
import "./deleteUser.css";

type IDeleteUser = {
	title: string;
	closeModal: () => void;
	onDelete: () => void;
};

export const DeleteUser: React.FC<IDeleteUser> = ({
	title,
	onDelete,
	closeModal,
}) => {
	return (
		<div className="delete-container">
			<div className="delete-text">
				{`Вы уверены, что хотите удалить пользователя `}
				<span>{title}</span>
				{` ?`}
			</div>
			<div className="delete-btn-wrapper">
				<button
					className="form-button"
					type="button"
					onClick={() => {
						onDelete();
						closeModal();
					}}
				>
					<div className="link-content">Удалить</div>
					<div className="link-content">
						<ArrowIcon />
					</div>
				</button>

				<button
					className="form-button form-button-grey"
					type="button"
					onClick={() => closeModal()}
				>
					<div className="link-content">Отменить</div>
				</button>
			</div>
		</div>
	);
};
