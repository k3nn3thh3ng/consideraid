import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { AidDisplayContainer, InputsWrapper, InputContainer } from "./style";
import { Paper, Typography } from "@mui/material";
import { AidsPayload } from "../../../api/backend";
import { getProperty } from "../../../utils/index";

interface AidDisplayProps {
	data: AidsPayload;
}

export const AidDisplay = ({ data }: AidDisplayProps) => {
	const createAidItemPills = () => {
		const dataKeys = Object.keys(data) as Array<keyof typeof data>;
		return dataKeys.map((key) => {
			if (getProperty(data, key) === "boolean" && data[key] === true) {
				return <Chip label={key} color="info" />;
			}
			return undefined;
		});
	};

	return (
		<AidDisplayContainer maxWidth="md">
			<Paper>
				<InputsWrapper>
					<InputContainer>
						<Typography variant="h6">Requested Items:</Typography>
					</InputContainer>
					<InputContainer>
						<Stack direction="row" spacing={1}>
							{createAidItemPills()}
						</Stack>
					</InputContainer>
					<InputContainer>
						<Typography variant="h6">Description:</Typography>
					</InputContainer>
					<InputContainer>
						<Typography variant="body2">
							{data.description}
						</Typography>
					</InputContainer>
					<InputContainer>
						<Typography variant="h6">Area:</Typography>
					</InputContainer>
					<InputContainer>
						<Typography variant="body2">{data.area}</Typography>
					</InputContainer>
				</InputsWrapper>
			</Paper>
		</AidDisplayContainer>
	);
};
