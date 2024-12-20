import React, { useState, forwardRef } from "react";
import { useForm, Controller } from "react-hook-form";
import {
	Button,
	InputBase,
	InputBaseProps,
	FormControl,
	FormHelperText,
	InputAdornment,
	IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { ReactComponent as ArrowIcon } from "@assets/icons/arrow-icon.svg";

import { styled } from "@mui/material/styles";

import "./form.css";
import { IRule, ISubmitBtnText } from "types";
import { transformToRegExp } from "utils/parserValidationRule";

const StyledInput = styled(InputBase)(() => ({
	position: "relative",
	width: "100%",
	border: `1px solid #838383`,
	borderRadius: "4px",
	padding: "5px 10px",
	fontSize: "1rem",
	fontFamily: "inherit",
	backgroundColor: "white",
}));

const StyledLabel = styled("label")(() => ({
	position: "absolute",
	top: -24,
	left: 5,
	fontSize: "1rem",
	fontFamily: "inherit",
	color: "#838383",
}));

interface CustomInputProps extends InputBaseProps {
	label?: string;
	helperText?: string;
	error?: boolean;
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
	({ label, helperText, error, ...props }, _ref) => {
		return (
			<FormControl fullWidth className="form-textfield">
				{label && <StyledLabel>{label}</StyledLabel>}
				<StyledInput {...props} />
				{helperText && (
					<FormHelperText
						error={error}
						sx={{
							position: "absolute",
							bottom: "-24px",
							left: "5px",
							margin: 0,
						}}
					>
						{helperText}
					</FormHelperText>
				)}
			</FormControl>
		);
	}
);

export type IFormData = {
	email: string;
	password: string;
	name: string;
};

export type IFieldType = "email" | "password" | "name";

export type IFormField = {
	id: IFieldType;
	label: string;
	validationRules: IRule;
};

type IFormProps = {
	enableResetBtn?: boolean;
	defaultValues?: IFormData;
	submitBtnText: ISubmitBtnText;
	closeModal?: () => void;
	onSave?: (data: IFormData) => void;
	formFields?: IFormField[];
};

export const Form: React.FC<IFormProps> = ({
	submitBtnText,
	enableResetBtn = false,
	defaultValues = { email: "", password: "", name: "" },
	closeModal,
	onSave,
	formFields = [],
}) => {
	const {
		control,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<IFormData>({
		defaultValues,
		shouldUnregister: false,
		mode: "onSubmit",
	});
	const [showPassword, setShowPassword] = useState(false);

	const onSubmit = (data: IFormData) => {
		onSave && onSave(data);
		closeModal && closeModal();
	};

	const handleReset = () => {
		reset(defaultValues);
		closeModal && closeModal();
	};

	return (
		<form className="form" onSubmit={handleSubmit(onSubmit)}>
			{formFields.map(formField => {
				return (
					<Controller
						name={formField.id}
						control={control}
						rules={transformToRegExp(formField.validationRules) as any}
						render={({ field }) => (
							<CustomInput
								{...field}
								label={formField.label}
								fullWidth
								type={
									formField.id === "password"
										? showPassword
											? "text"
											: "password"
										: "text"
								}
								error={!!errors[formField.id]}
								helperText={errors[formField.id]?.message}
								endAdornment={
									formField.id === "password" && (
										<InputAdornment position="end">
											<IconButton
												onClick={() => setShowPassword(prev => !prev)}
												edge="end"
											>
												{showPassword ? <VisibilityOff /> : <Visibility />}
											</IconButton>
										</InputAdornment>
									)
								}
							/>
						)}
					/>
				);
			})}

			<div className="form-btn-wrapper">
				<button className="form-button" type="submit">
					<div className="link-content">{submitBtnText}</div>
					<div className="link-content">
						<ArrowIcon />
					</div>
				</button>
				{enableResetBtn && (
					<button
						className="form-button form-button-grey"
						type="button"
						onClick={() => handleReset()}
					>
						<div className="link-content">Отменить</div>
					</button>
				)}
			</div>
		</form>
	);
};

// <Controller
// 				name="email"
// 				control={control}
// 				rules={emailRule}
// 				render={({ field }) => (
// 					<CustomInput
// 						{...field}
// 						label="E-mail"
// 						fullWidth
// 						error={!!errors.email}
// 						helperText={errors.email?.message}
// 					/>
// 				)}
// 			/>

// 			<Controller
// 				name="password"
// 				control={control}
// 				rules={passwordRule}
// 				render={({ field }) => (
// 					<CustomInput
// 						{...field}
// 						label="Пароль"
// 						fullWidth
// 						type={showPassword ? "text" : "password"} //
// 						error={!!errors.password}
// 						helperText={errors.password?.message}
// 						endAdornment={
// 							<InputAdornment position="end">
// 								<IconButton
// 									onClick={() => setShowPassword(prev => !prev)}
// 									edge="end"
// 								>
// 									{showPassword ? <VisibilityOff /> : <Visibility />}
// 								</IconButton>
// 							</InputAdornment>
// 						}
// 					/>
// 				)}
// 			/>

// 			{enableNameField && (
// 				<Controller
// 					name="name"
// 					control={control}
// 					rules={nameRule}
// 					render={({ field }) => (
// 						<CustomInput
// 							{...field}
// 							label="ФИО (необязательное поле)"
// 							error={!!errors.name}
// 							helperText={errors.name?.message}
// 						/>
// 					)}
// 				/>
// 			)}
