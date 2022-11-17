import { Appbar } from "../../components/generic/appbar/Appbar";
import { RequestForm } from "../../components/specific/form/RequestForm";

const New = (): JSX.Element => {
	return (
		<div>
			<Appbar />
			<RequestForm />
		</div>
	);
};

export { New };
