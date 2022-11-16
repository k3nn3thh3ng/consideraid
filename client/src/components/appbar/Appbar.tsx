import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "@mui/material";
import { StyledLink } from "./style";

type NavMenu = {
	pageName: string;
	pageRef: string;
}[];

const navMenu: NavMenu = [
	{ pageName: "ConsiderAid", pageRef: "/" },
	{ pageName: "Create", pageRef: "/new" }
];

const Appbar = (): JSX.Element => {
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
		null
	);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};
	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="/"
						sx={{
							mr: 2,
							display: { xs: "none", md: "flex" },
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none"
						}}
					>
						ConsiderAid LOGO
					</Typography>

					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "flex", md: "none" }
						}}
					>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left"
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left"
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" }
							}}
						>
							{navMenu.map((navInfo) => (
								<StyledLink
									to={navInfo.pageRef}
									key={navInfo.pageName}
									onClick={handleCloseNavMenu}
								>
									<MenuItem>
										<Typography textAlign="center">
											{navInfo.pageName}
										</Typography>
									</MenuItem>
								</StyledLink>
							))}
						</Menu>
					</Box>

					<Typography
						variant="h5"
						noWrap
						component="a"
						href=""
						sx={{
							mr: 2,
							display: { xs: "flex", md: "none" },
							flexGrow: 1,
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none"
						}}
					>
						ConsiderAid LOGO
					</Typography>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "none", md: "flex" }
						}}
					>
						{navMenu.map((navInfo) => (
							<StyledLink
								to={navInfo.pageRef}
								key={navInfo.pageName}
								onClick={handleCloseNavMenu}
							>
								<MenuItem>
									<Typography textAlign="center">
										{navInfo.pageName}
									</Typography>
								</MenuItem>
							</StyledLink>
						))}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export { Appbar };
