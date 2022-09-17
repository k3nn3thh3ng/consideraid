import {
	FormLabel,
	FormGroup,
	FormControl,
	FormHelperText
} from "@mui/material";
import { Checkbox } from "./Checkbox";
import { Control, Controller } from "react-hook-form";

// This component is not generic and pertains to items
type FormValues = {
	items: Items;
	detailsOfAid: string;
	addressArea: string;
	name: string;
	contactNumber: string;
	email: string;
};

type Items = {
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

type ItemsCheckboxGroupProps = {
	control: Control<FormValues, object>;
	id: "items";
	label: string;
	options: {
		optionLabel: string;
		optionValue: keyof Items;
	}[];
	helperText?: string;
};

export const ItemsCheckboxGroup = ({
	control,
	id,
	label,
	options,
	helperText
}: ItemsCheckboxGroupProps): JSX.Element => {
	const handleRegistration = () => {
		return options.map((option) => {
			return (
				<Controller
					key={`${id}.${option.optionValue}`}
					name={`${id}.${option.optionValue}`}
					control={control}
					render={({ field }) => (
						<Checkbox
							{...field}
							name={field.name}
							label={option.optionLabel}
							value={field.value}
						/>
					)}
				/>
			);
		});
	};

	return (
		<FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
			<FormLabel component="legend">{label}</FormLabel>
			{helperText && <FormHelperText>{helperText}</FormHelperText>}
			<FormGroup>{handleRegistration()}</FormGroup>
		</FormControl>
	);
};
