import {
	InputLabel,
	Select,
	MenuItem,
	SelectChangeEvent,
	FormControl
} from "@mui/material";
import { ReactNode } from "react";

type DropdownProps = {
	id: string;
	label: string;
	value: any;
	handleChange: (
		event: SelectChangeEvent<string | number>,
		child: ReactNode
	) => void;
	options: {
		optionLabel: string;
		optionValue: string | number;
	}[];
};

export const Dropdown = ({
	id,
	label,
	value,
	handleChange,
	options
}: DropdownProps): JSX.Element => {
	return (
		<FormControl fullWidth>
			<InputLabel id={`${id}-label`}>{label}</InputLabel>
			<Select
				labelId={`${id}-label`}
				id={id}
				value={value}
				label={label}
				onChange={handleChange}
				placeholder="Please select your choice"
			>
				{options.map((option) => {
					return (
						<MenuItem
							key={option.optionValue}
							value={option.optionValue}
						>
							{option.optionLabel}
						</MenuItem>
					);
				})}
			</Select>
		</FormControl>
	);
};
