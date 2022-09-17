import { FormControlLabel, Checkbox as MUICheckbox } from "@mui/material";

type CheckboxProps = {
	name: string;
	label: string;
	value: boolean;
};

export const Checkbox = ({
	name,
	label,
	value,
	...rest
}: CheckboxProps): JSX.Element => {
	return (
		<FormControlLabel
			control={<MUICheckbox checked={value} {...rest} />}
			label={label}
		/>
	);
};
