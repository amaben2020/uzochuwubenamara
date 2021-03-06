import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Button from "@material-ui/core/Button";
import Link from "../Link";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Hidden } from "@material-ui/core";
import {
	ExpansionPanel,
	ExpansionPanelSummary,
	Grid,
	ExpansionPanelDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
//This is the elevation scroll function
function ElevationScroll(props) {
	const { children } = props;

	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
}

//using the makeStyles component in useStyles()

const useStyles = makeStyles((theme) => ({
	toolbarMargin: {
		...theme.mixins.toolbar,
		marginBottom: "3em", //pushes it below the logo
		[theme.breakpoints.down("md")]: {
			marginBottom: "2em",
		},
		[theme.breakpoints.down("xs")]: {
			marginBottom: "1.25em",
		},
	},
	logo: {
		height: "8em",
		[theme.breakpoints.down("md")]: {
			height: "7em",
		},
		[theme.breakpoints.down("xs")]: {
			height: "5.5em",
		},
	},
	logoContainer: {
		padding: 0,
		"&:hover": {
			backgroundColor: "transparent",
		},
	},
	tabContainer: {
		marginLeft: "auto",
	},
	expansion: {
		backgroundColor: theme.palette.common.blue,
		borderBottom: "1px solid rgba(0,0,0,0.12)",
		"&.Mui-expanded": {
			margin: 0,
			borderBottom: 0,
		},
		"&::before": {
			backgroundColor: "rgba(0,0,0,0)",
		},
	},

	tab: {
		...theme.typography.tab,
		color: "#fff",
		minWidth: 10,
		marginLeft: "25px",
	},
	button: {
		...theme.typography.estimate,

		borderRadius: "50px",
		marginLeft: "50px",
		marginRight: "25px",
		height: "45px",
		"&:hover": {
			backgroundColor: theme.palette.secondary.light,
		},
	},
	menu: {
		background: theme.palette.common.blue,
		color: "white",
		borderRadius: 1,
	},
	menuItem: {
		...theme.typography.tab,
		opacity: 0.7,
		"&:hover": {
			opacity: "1",
		},
	},
	expansionDetails: {
		padding: 0,
		backgroundColor: theme.palette.primary.light,
	},
	drawerIcon: {
		height: "50px",
		width: "50px",
	},
	drawerIconContainer: {
		marginLeft: "auto",
		"&:hover": {
			backgroundColor: "transparent",
		},
	},

	expansionSummary: {
		padding: "0 24px 0 16px",
		backgroundColor: (props) =>
			props.value === 1 ? "rgba(0,0,0,0.14)" : "inherit",
		"&:hover": {
			backgroundColor: "rgba(0,0,0,0.08)",
		},
	},
	drawer: { backgroundColor: theme.palette.common.blue },
	drawerItem: {
		...theme.typography.tab,
		color: "white",
		opacity: 0.7,
	},
	drawerItemEstimate: {
		backgroundColor: theme.palette.common.orange,
	},
	drawerItemSelected: {
		...theme.typography.tab,
		"& .MuiListItemText-root": {
			opacity: 1, //root classe with opacity of 1
		},
	},
	appbar: {
		zIndex: theme.zIndex.modal + 1,
	},
}));

//we then use the elevationScroll function in MaterialUI
export default function Header(props) {
	const classes = useStyles(props);
	const theme = useTheme();
	const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

	const matches = useMediaQuery(theme.breakpoints.down("md"));

	const [anchorEl, setAnchorEl] = useState(null);
	const [openMenu, setOpenMenu] = useState(false);

	const [openDrawer, setOpenDrawer] = useState(false);
	const handleChange = (e, newValue) => {
		props.setValue(newValue);
	};

	const handleClick = (e) => {
		setAnchorEl(e.currentTarget);
		setOpenMenu(true);
	};

	const handleClose = (e) => {
		setAnchorEl(null);
		setOpenMenu(false);
	};
	const handleMenuItemClick = (e, i) => {
		setAnchorEl(null);
		setOpenMenu(false);
		props.setSelectedIndex(i);
	};

	//when you hover on services
	const menuOptions = [
		{ name: "Services", link: "/services", activeIndex: 1, selectedIndex: 0 },
		{
			name: " Custom Software Development",
			link: "/customsoftware",
			activeIndex: 1,
			selectedIndex: 1,
		},
		{
			name: "iOS/ Android App Development",
			link: "/mobileapps",
			activeIndex: 1,
			selectedIndex: 2,
		},
		{
			name: "Website Development",
			link: "/websitedevelopment",
			activeIndex: 1,
			selectedIndex: 3,
		},
		{
			name: "Training",
			link: "/training",
			activeIndex: 1,
			selectedIndex: 4,
		},
	];

	const routes = [
		{ name: "Home", link: "/", activeIndex: 0 },
		{
			name: "Services",
			link: "/services",
			activeIndex: 1,
			ariaOwns: anchorEl ? "simple-menu" : undefined,
			ariaPopup: anchorEl ? "true" : undefined,
			mouseOver: (event) => handleClick(event),
		},
		{
			name: "The Revolutionary",
			link: "/revolution",
			activeIndex: 2,
		},
		{ name: "About ", link: "/about", activeIndex: 3 },
		{ name: "Contact ", link: "/contact", activeIndex: 4 },
	];

	//if the pathname equals a link and the value is not that link, set the value to that link
	useEffect(() => {
		[...menuOptions, ...routes].forEach((route) => {
			switch (window.location.pathname) {
				case `${route.link}`:
					if (props.value !== route.activeIndex) {
						props.setValue(route.activeIndex);
						if (
							route.selectedIndex &&
							route.selectedIndex !== props.selectedIndex
						) {
							props.setSelectedIndex(route.selectedIndex);
						}
					}
					break;
				case "/estimate":
					if (props.value !== 6) {
						props.setValue(6);
					}
					break;
				default:
					break;
			}
		});
	}, [props.value, menuOptions, props.selectedIndex, routes, props]);

	const tabs = (
		<React.Fragment>
			<Tabs
				value={props.value}
				indicatorColor="primary"
				onChange={handleChange}
				className={classes.tabContainer}
			>
				{routes.map((route, index) => (
					<Tab
						key={`${route}${index}`}
						className={classes.tab}
						component={Link}
						href={route.link}
						label={route.name}
						aria-owns={route.ariaOwns}
						aria-haspopup={route.ariaPopup}
						onMouseOver={route.mouseOver}
					/>
				))}
			</Tabs>
			<Button
				component={Link}
				href="/estimate"
				onClick={() => props.setValue(6)}
				variant="contained"
				color="secondary"
				component={Link}
				style={{ textDecoration: "none" }}
				className={classes.button}
			>
				Free Estimate
			</Button>
			<Menu
				id="simple-menu"
				anchorEl={anchorEl}
				keepMounted
				open={openMenu}
				onClose={handleClose}
				classes={{ paper: classes.menu }}
				elevation={0}
				style={{ zIndex: 1302 }} //1 above the appBar
				MenuListProps={{ onMouseLeave: handleClose }}
			>
				{menuOptions.map((options, i) => (
					<MenuItem
						key={`${options}${i}`} //option and the index
						selected={i === props.selectedIndex && props.value === 0}
						onClick={(e) => {
							handleMenuItemClick(e, i);
							props.setValue(1);
							handleClose();
						}}
						style={{ color: "#fff" }}
						classes={{ root: classes.menuItem }}
						component={Link}
						href={options.link}
					>
						{options.name}
					</MenuItem>
				))}
			</Menu>
		</React.Fragment>
	);

	const drawer = (
		<React.Fragment>
			<SwipeableDrawer
				disableBackdropTransition={!iOS}
				disableDiscovery={iOS}
				open={openDrawer}
				onClose={() => setOpenDrawer(false)}
				onOpen={() => setOpenDrawer(true)}
				classes={{ paper: classes.drawer }}
			>
				<div className={classes.toolbarMargin} />
				<List disablePadding>
					{routes.map((route) =>
						route.name === "Services" ? (
							<ExpansionPanel
								key={route.name}
								elevation={0}
								classes={{ root: classes.expansion }}
							>
								<ExpansionPanelSummary
									classes={{ root: classes.expansionSummary }}
									expandIcon={<ExpandMoreIcon color="secondary" />}
								>
									<ListItemText
										onClick={() => {
											setOpenDrawer(false);
											props.setValue(route.activeIndex);
										}}
										disableTypography
										className={classes.drawerItem}
									>
										<Link
											style={{ opacity: props.value === 1 ? 1 : null }}
											href={route.link}
											color="inherit"
										>
											{route.name}
										</Link>
									</ListItemText>
								</ExpansionPanelSummary>
								<ExpansionPanelDetails
									classes={{ root: classes.expansionDetails }}
								>
									<Grid container direction="column">
										{menuOptions.map((route) => (
											<ListItem
												key={`${route}${route.selectedIndex}`}
												href={route.link}
												onClick={() => {
													setOpenDrawer(false);
													props.setValue(route.activeIndex);
												}}
												selected={
													props.selectedIndex === route.selectedIndex &&
													props.value === 1 &&
													window.location.pathname !== "/services"
												}
												classes={{ selected: classes.drawerItemSelected }}
												component={Link}
												button
												divider
											>
												<ListItemText
													disableTypography
													className={classes.drawerItem}
												>
													{route.name
														.split(" ")
														.filter((word) => word !== "Development")
														.join(" ")}
													<br />
													<span style={{ fontStyle: "0.75rem" }}>
														Development
													</span>
												</ListItemText>
											</ListItem>
										))}
									</Grid>
								</ExpansionPanelDetails>
							</ExpansionPanel>
						) : (
							<ListItem
								key={`${route}${route.activeIndex}`}
								href={route.link}
								onClick={() => {
									setOpenDrawer(false);
									props.setValue(route.activeIndex);
								}}
								selected={props.value === route.activeIndex}
								classes={{ selected: classes.drawerItemSelected }}
								component={Link}
								button
								divider
							>
								<ListItemText disableTypography className={classes.drawerItem}>
									{route.name}
								</ListItemText>
							</ListItem>
						)
					)}
					<ListItem
						onClick={() => {
							setOpenDrawer(false);
							props.setValue(6);
						}}
						selected={props.value === 6}
						divider
						button
						component={Link}
						classes={{
							root: classes.drawerItemEstimate,
							selected: classes.drawerItemSelected,
						}}
						href="/estimate"
					>
						<ListItemText
							className={classes.drawerItemSelected}
							disableTypography
						>
							Free Estimate
						</ListItemText>
					</ListItem>
				</List>
			</SwipeableDrawer>
			<IconButton
				className={classes.drawerIconContainer}
				onClick={() => setOpenDrawer(!openDrawer)}
				disableRipple
			>
				<MenuIcon className={classes.drawerIcon} />
			</IconButton>
		</React.Fragment>
	);

	return (
		<React.Fragment>
			<ElevationScroll>
				<AppBar position="fixed" className={classes.appbar}>
					<Toolbar disableGutters>
						{" "}
						{/** //disableGutters is a boolean that removes all padding*/}
						<Button
							component={Link}
							href="/"
							className={classes.logoContainer}
							onClick={() => props.setValue(0)}
							disableRipple
						>
							<img
								src="../../assets/logo.png"
								alt="my logo"
								className={classes.logo}
							/>
						</Button>
						<Hidden mdDown>{tabs}</Hidden>
						<Hidden lgUp>{drawer}</Hidden>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<div className={classes.toolbarMargin} />
		</React.Fragment>
	);
}
