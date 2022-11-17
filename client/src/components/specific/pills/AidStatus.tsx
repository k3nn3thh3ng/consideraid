import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

interface AidStatusPillProps {
	statusNumber: number;
}

export const AidStatusPill = ({
	statusNumber
}: AidStatusPillProps): React.ReactElement => {
	const statusMapper = (number: number) => {
		switch (number) {
			case 0:
				return <Chip label="Pending" color="info" />;
			case 1:
				return <Chip label="Rejected" color="error" />;
			case 2:
				return <Chip label="Help Needed" color="success" />;
			case 3:
				return <Chip label="Closed" color="info" />;
		}
	};

	return (
		<Stack direction="row" spacing={1}>
			{statusMapper(statusNumber)}
		</Stack>
	);
};
