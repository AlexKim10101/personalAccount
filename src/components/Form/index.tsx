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
import { ReactComponent as ArrowIcon } from "@assets/icons/icon1.svg";

import { styled } from "@mui/material/styles";

import "./form.css";
import { ISubmitBtnText } from "types";

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
			<FormControl fullWidth>
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

type FormData = {
	email: string;
	password: string;
	name: string;
};

type IFormProps = {
	enableNameField?: boolean;
	requiredNameField?: boolean;
	enableResetBtn?: boolean;
	defaultValues?: FormData;
	submitBtnText: ISubmitBtnText;
	closeModal?: () => void;
	onSave?: (data: FormData) => void;
};

export const Form: React.FC<IFormProps> = ({
	submitBtnText,
	enableNameField = false,
	requiredNameField = false,
	enableResetBtn = false,
	defaultValues = { email: "", password: "", name: "" },
	closeModal,
	onSave,
}) => {
	const {
		control,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<FormData>({
		defaultValues,
		shouldUnregister: false,
		mode: "onSubmit",
	});
	const [showPassword, setShowPassword] = useState(false);
	const onSubmit = (data: FormData) => {
		onSave && onSave(data);
	};

	const handleReset = () => {
		reset(defaultValues);
	};

	return (
		<form className="form" onSubmit={handleSubmit(onSubmit)}>
			<Controller
				name="email"
				control={control}
				defaultValue=""
				rules={{
					required: "Обязательное поле",
					pattern: {
						value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
						message: "Invalid email format",
					},
				}}
				render={props => (
					<CustomInput
						{...props.field}
						label="E-mail"
						fullWidth
						error={!!errors.email}
						helperText={errors.email?.message}
					/>
				)}
			/>

			<Controller
				name="password"
				control={control}
				defaultValue=""
				rules={{
					required: "Обязательное поле",
					minLength: {
						value: 6,
						message: "Password must be at least 6 characters",
					},
				}}
				render={props => (
					<CustomInput
						{...props.field}
						label="Пароль"
						fullWidth
						type={showPassword ? "text" : "password"}
						error={!!errors.password}
						helperText={errors.password?.message}
						endAdornment={
							<InputAdornment position="end">
								<IconButton
									onClick={() => setShowPassword(prev => !prev)}
									edge="end"
								>
									{showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						}
					/>
				)}
			/>

			{enableNameField && (
				<Controller
					name="name"
					control={control}
					defaultValue=""
					rules={{
						maxLength: {
							value: 50,
							message: "Name must be less than 50 characters",
						},
					}}
					render={({ field }) => (
						<CustomInput
							{...field}
							label="ФИО (необязательное поле)"
							error={!!errors.name}
							helperText={errors.name?.message}
						/>
					)}
				/>
			)}
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
