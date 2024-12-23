import React from "react";
import { PrimaryButton } from "@components/CustomButton";
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
				<PrimaryButton
					type="button"
					onClick={() => {
						onDelete();
						closeModal();
					}}
					className="orange-button"
				>
					<div className="link-content">Удалить</div>
					<div className="link-content">
						<ArrowIcon />
					</div>
				</PrimaryButton>

				<PrimaryButton
					type="button"
					onClick={() => closeModal()}
					className="grey-button"
				>
					<div className="link-content">Отменить</div>
				</PrimaryButton>
			</div>
		</div>
	);
};
