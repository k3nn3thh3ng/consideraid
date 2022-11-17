import { Appbar } from "../../components/generic/appbar/Appbar";
import { PaginationTable } from "../../components/specific/table/PaginationTable";

const ShowAll = (): JSX.Element => {
	return (
		<div>
			<Appbar />
			<PaginationTable />
		</div>
	);
};

export { ShowAll };
