import { Spinner as StyledSpinner, Container } from "./style";

export const Spinner = (): React.ReactElement => {
	return (
		<Container>
			<StyledSpinner className="lds-ring">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</StyledSpinner>
		</Container>
	);
};
