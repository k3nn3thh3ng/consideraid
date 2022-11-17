import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FormHelperText from "@mui/material/FormHelperText";
import { useForm, Controller, SubmitHandler, Control } from "react-hook-form";
import { BasicDateTimePicker } from "../../generic/form/BasicDateTimePicker";
import { Dropdown } from "../../generic/form/Dropdown";
import { AreaList } from "../../../constants/AreaList";
import { ItemsCheckboxGroup } from "../../generic/form/ItemsCheckboxGroup";
import { ItemsList } from "../../../constants/ItemsList";
import { backendApi } from "../../../api/backend";

type FormValues = {
	items: {
		foodRations: boolean;
		halalFoodRations: boolean;
		formulaMilk: boolean;
		babyDiaper: boolean;
		adultDiaper: boolean;
		proBonoTuition: boolean;
		proBonoMentorship: boolean;
		rehomingOfPets: boolean;
		schoolTextbooks: boolean;
		repaintingOfHouse: boolean;
		cleaningOfHouse: boolean;
	};
	description: string;
	area: string;
	name: string;
	contactNumber: string;
	email: string;
};

interface RequestFormProps {
	values?: FormValues;
}

export type Items = {
	foodRations: boolean;
	halalFoodRations: boolean;
	formulaMilk: boolean;
	babyDiaper: boolean;
	adultDiaper: boolean;
	proBonoTuition: boolean;
	proBonoMentorship: boolean;
	rehomingOfPets: boolean;
	schoolTextbooks: boolean;
	repaintingOfHouse: boolean;
	cleaningOfHouse: boolean;
};

type formInputs = {
	type: string;
	id: keyof FormValues;
	label: string;
	options?: {
		optionLabel: string;
		optionValue: string | number;
	}[];
	helperText?: string;
	itemsOptions?: {
		optionLabel: string;
		optionValue: keyof Items;
	}[];
};

const arrayOfInputs: formInputs[] = [
	{
		type: "Items",
		id: "items",
		label: "What are the things that you need?",
		helperText:
			"Selecting items that you absolutely need, will increase the likelihood of your aid being accepted.",
		itemsOptions: ItemsList
	},
	{
		type: "TextField",
		id: "description",
		label: "Please provide details of your requested aid",
		helperText:
			"Please describe your current situation and request of aid (i.e. number of children, elderly, loss of job, special needs, staying in rental flat, etc.)"
	},
	{ type: "TextField", id: "name", label: "Name" },
	{
		type: "Dropdown",
		id: "area",
		label: "Which area are you staying in?",
		options: AreaList
	},
	{
		type: "TextField",
		id: "contactNumber",
		label: "What is your contact number?"
	},
	{ type: "TextField", id: "email", label: "What is your email address?" }
];

const RequestForm = ({ values }: RequestFormProps): JSX.Element => {
	const { control, handleSubmit } = useForm<FormValues>({
		defaultValues: values || {
			items: {
				foodRations: false,
				halalFoodRations: false,
				formulaMilk: false,
				babyDiaper: false,
				adultDiaper: false,
				proBonoTuition: false,
				proBonoMentorship: false,
				rehomingOfPets: false,
				schoolTextbooks: false,
				repaintingOfHouse: false,
				cleaningOfHouse: false
			},
			description: "",
			area: "",
			name: "",
			contactNumber: "",
			email: ""
		}
	});

	const onSubmit: SubmitHandler<FormValues> = async (data) => {
		console.log(JSON.stringify(data));
		try {
			const response = await backendApi.post("/aid/create", data);
			console.log(response);
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Container
				maxWidth="lg"
				sx={{
					display: "flex",
					flexDirection: "column"
				}}
			>
				<br />
				<Typography variant="h4">
					Post the items that you need!
				</Typography>
				<br />
				<Typography variant="body1">
					We are a platform that connects those who need help to those
					who can help 😀
				</Typography>
				<br />
				<Typography variant="body1">
					We believe that by helping those around us, we can make our
					world a better place! You can contact the admin team at
					consideraid@gmail.com It's currently a one-man show so
					please understand if replies take longer than expected 😀
				</Typography>
				<br />
				{generateFormInputs(control, arrayOfInputs)}
				<Button
					type="submit"
					variant="contained"
					size="large"
					sx={{
						margin: "10px 0px"
					}}
				>
					Submit
				</Button>
			</Container>
		</form>
	);
};

export { RequestForm };

const generateFormInputs = (
	control: Control<FormValues, object>,
	arrayOfInputs: formInputs[]
): JSX.Element => {
	return (
		<>
			{arrayOfInputs.map((input) => {
				if (input.type === "TextField") {
					return (
						<Box
							key={input.id}
							sx={{
								display: "flex",
								flexDirection: "column",
								margin: "10px 0px"
							}}
						>
							<Controller
								name={input.id}
								control={control}
								render={({
									field: { onChange, onBlur, value }
								}) => (
									<>
										<TextField
											id="outlined-basic"
											label={input.label}
											variant="outlined"
											onChange={onChange}
											onBlur={onBlur}
											value={value}
										/>
										{input.helperText && (
											<FormHelperText>
												{input.helperText}
											</FormHelperText>
										)}
									</>
								)}
							/>
						</Box>
					);
				} else if (input.type === "DateTimePicker") {
					return (
						<Box
							key={input.id}
							sx={{
								display: "flex",
								flexDirection: "column",
								margin: "10px 0px"
							}}
						>
							<Controller
								name={input.id}
								control={control}
								render={({ field }) => (
									<BasicDateTimePicker
										label={input.label}
										{...field}
									/>
								)}
							/>
						</Box>
					);
				} else if (input.type === "Dropdown") {
					return (
						<Box
							key={input.id}
							sx={{
								display: "flex",
								flexDirection: "column",
								margin: "10px 0px"
							}}
						>
							<Controller
								name={input.id}
								control={control}
								render={({ field }) => (
									<Dropdown
										id={input.id}
										label={input.label}
										value={field.value}
										handleChange={field.onChange}
										options={input.options!}
									/>
								)}
							/>
						</Box>
					);
				} else if (input.type === "Items" && input.id === "items") {
					return (
						<Box
							key={input.id}
							sx={{
								display: "flex",
								flexDirection: "column",
								margin: "10px 0px"
							}}
						>
							<ItemsCheckboxGroup
								control={control}
								id={input.id}
								label={input.label}
								options={input.itemsOptions!}
								helperText={input.helperText}
							/>
						</Box>
					);
				}
				return undefined;
			})}
		</>
	);
};
