import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableHead from "@mui/material/TableHead";
import { TablePaginationActions } from "./TablePaginationActions";
import { useQuery } from "@tanstack/react-query";
import { getAllAids } from "../../api/backend";
import { Spinner } from "../loading/spinner";
import { SpinnerContainer } from "./style";
import { ageTimer } from "../../utils/ageTimer";
import moment from "moment";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

interface Column {
	id: string;
	label: string;
	minWidth?: number;
	align?: "right";
	format?: (value: number) => string;
}

const columns: readonly Column[] = [
	{ id: "area", label: "Location", minWidth: 100 },
	{ id: "description", label: "Description", minWidth: 350 },
	{
		id: "submitted",
		label: "Submitted",
		minWidth: 140
	},
	{
		id: "button",
		label: "",
		minWidth: 100
	}
];

export const PaginationTable = (): React.ReactElement => {
	const { isLoading, data } = useQuery({
		queryKey: ["all_aids_table"],
		queryFn: async () => {
			return await getAllAids();
		}
	});

	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(5);
	const [currentTs, setTs] = React.useState(moment().unix());

	React.useEffect(() => {
		const timeUpdate = setInterval(() => {
			setTs(moment().unix());
		}, 1000);
		return () => {
			clearInterval(timeUpdate);
		};
	});

	// Avoid a layout jump when reaching the last page with empty rows.
	const emptyRows =
		page > 0
			? Math.max(0, (1 + page) * rowsPerPage - data!.payload!.length)
			: 0;

	const handleChangePage = (
		event: React.MouseEvent<HTMLButtonElement> | null,
		newPage: number
	) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	return (
		<TableContainer component={Paper}>
			{!isLoading && data && data.payload ? (
				<Table
					stickyHeader
					sx={{ minWidth: 500 }}
					aria-label="custom pagination table"
				>
					<TableHead>
						<TableRow>
							{columns.map((column) => (
								<TableCell
									key={column.id}
									align={column.align}
									style={{ minWidth: column.minWidth }}
								>
									{column.label}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{(rowsPerPage > 0
							? data.payload.slice(
									page * rowsPerPage,
									page * rowsPerPage + rowsPerPage
							  )
							: data.payload
						).map((row) => (
							<TableRow key={row.id}>
								<TableCell component="th" scope="row">
									{row.aid.area}
								</TableCell>
								<TableCell style={{ width: 350 }} align="left">
									{row.aid.description}
								</TableCell>
								<TableCell style={{ width: 140 }} align="left">
									{ageTimer(row.aid.created_at, currentTs)}
								</TableCell>
								<TableCell style={{ width: 100 }} align="left">
									<Link to={`/${row.id}/edit`}>
										<Button>View More</Button>
									</Link>
								</TableCell>
							</TableRow>
						))}
						{emptyRows > 0 && (
							<TableRow style={{ height: 53 * emptyRows }}>
								<TableCell colSpan={6} />
							</TableRow>
						)}
					</TableBody>
					<TableFooter>
						<TableRow>
							<TablePagination
								rowsPerPageOptions={[
									5,
									10,
									25,
									{ label: "All", value: -1 }
								]}
								colSpan={3}
								count={data.payload.length}
								rowsPerPage={rowsPerPage}
								page={page}
								SelectProps={{
									inputProps: {
										"aria-label": "rows per page"
									},
									native: true
								}}
								onPageChange={handleChangePage}
								onRowsPerPageChange={handleChangeRowsPerPage}
								ActionsComponent={TablePaginationActions}
							/>
						</TableRow>
					</TableFooter>
				</Table>
			) : (
				<SpinnerContainer>
					<Spinner />
				</SpinnerContainer>
			)}
		</TableContainer>
	);
};
