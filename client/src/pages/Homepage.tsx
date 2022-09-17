import { Appbar } from "../components/Appbar";
import { RequestForm } from "../components/RequestForm";

const Homepage = (): JSX.Element => {
	return (
		<div>
			<Appbar />
			<RequestForm />
		</div>
	);
};

export { Homepage };
