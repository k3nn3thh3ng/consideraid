import { FormControlLabel, Checkbox as MUICheckbox } from "@mui/material";

interface CheckboxProps {
	name: string;
	label: string;
	value: boolean;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = ({
	name,
	label,
	value,
	onChange,
	...rest
}: CheckboxProps): JSX.Element => {
	return (
		<FormControlLabel
			control={
				<MUICheckbox checked={value} onChange={onChange} {...rest} />
			}
			label={label}
		/>
	);
};
