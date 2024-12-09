import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
	Button,
	InputBase,
	InputBaseProps,
	FormControl,
	FormHelperText,
} from "@mui/material";
import { ReactComponent as ArrowIcon } from "@assets/icons/icon1.svg";

import { styled } from "@mui/material/styles";

import "./form.css";

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

const CustomInput: React.FC<CustomInputProps> = ({
	label,
	helperText,
	error,
	...props
}) => {
	return (
		<FormControl fullWidth>
			{label && <StyledLabel>{label}</StyledLabel>}
			<StyledInput {...props} />
			{helperText && (
				<FormHelperText
					error={error}
					sx={{ position: "absolute", bottom: "-24px", left: "5px", margin: 0 }}
				>
					{helperText}
				</FormHelperText>
			)}
		</FormControl>
	);
};

// Описание данных формы
type FormData = {
	email: string;
	password: string;
	name?: string;
};

type IFormProps = {
	enableNameField?: boolean;
};

const Form: React.FC<IFormProps> = ({ enableNameField = false }) => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();

	const onSubmit = (data: FormData) => {
		if (enableNameField) {
			console.log("onSubmit: registration", data);
		} else {
			console.log("onSubmit: login", data);
		}
	};

	const btnText = enableNameField ? "Зарегистрироваться" : "Войти";

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
				render={({ field }) => (
					<CustomInput
						{...field} // включает value, onChange, onBlur и name
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
				render={({ field }) => (
					<CustomInput
						{...field}
						label="Пароль"
						fullWidth
						type="password"
						error={!!errors.password}
						helperText={errors.password?.message}
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

			<button className="button" type="submit">
				<div className="link-content">{btnText}</div>
				<div className="link-content">
					<ArrowIcon />
				</div>
			</button>
		</form>
	);
};

export default Form;
