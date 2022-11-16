import { Appbar } from "../../components/appbar/Appbar";
import { PaginationTable } from "../../components/table/PaginationTable";

const ShowAll = (): JSX.Element => {
	return (
		<div>
			<Appbar />
			<PaginationTable />
		</div>
	);
};

export { ShowAll };
