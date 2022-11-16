import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { New } from "./pages/Aid/New";
import { Edit } from "./pages/Aid/Edit";
import { ShowAll } from "./pages/Aid/ShowAll";
import { Request404 } from "./pages/Request404";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<ShowAll />} />
					<Route path="/new" element={<New />} />
					<Route path="/:aidId/edit" element={<Edit />} />
					<Route path="/*" element={<Request404 />} />
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
