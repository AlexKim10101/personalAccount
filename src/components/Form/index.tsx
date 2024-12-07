import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
	Button,
	InputBase,
	InputBaseProps,
	FormControl,
	FormHelperText,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import "./form.css";

const StyledInput = styled(InputBase)(({ theme }) => ({
	position: "relative",
	width: "100%",
	border: `1px solid #838383`, // Цвет рамки
	borderRadius: theme.shape.borderRadius,
	padding: "5px 10px",
	fontSize: "1rem",
	fontFamily: "inherit",
	backgroundColor: "white",
}));

const StyledLabel = styled("label")(({ theme }) => ({
	position: "absolute",
	top: -24,
	left: 5,
	fontSize: "1rem",
	fontFamily: "inherit",

	color: theme.palette.text.secondary,
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
};

type IFormProps = {};

const Form: React.FC<IFormProps> = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();

	const onSubmit = (data: FormData) => {
		console.log("onSubmit", data);
	};

	return (
		<form className="form" onSubmit={handleSubmit(onSubmit)}>
			<Controller
				name="email"
				control={control}
				defaultValue=""
				rules={{
					required: "Email is required",
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
					required: "Password is required",
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

			<Button type="submit" variant="contained" color="primary">
				Войти
			</Button>
		</form>
	);
};

export default Form;
