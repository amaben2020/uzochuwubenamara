import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "../Link";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
	footer: {
		backgroundColor: theme.palette.common.blue,
		width: "100%",
		zIndex: 1302,
		position: "relative",
	},
	adornment: {
		width: "25em",
		verticalAlign: "bottom",
		[theme.breakpoints.down("md")]: {
			width: "21em",
		},
		[theme.breakpoints.down("md")]: {
			width: "15em",
		},
	},
	mainContainer: {
		position: "absolute",
	},
	link: {
		color: "white",
		fontFamily: "Arial",
		fontSize: "0.75rem",
		fontWeight: "bold",
		textDecoration: "none",
	},
	gridItem: {
		margin: "3em",
	},
	icon: {
		height: "4em",
		width: "4em",
		[theme.breakpoints.down("xs")]: {
			height: "2.5em",
			width: "2.5em",
		},
	},
	socialContainer: {
		position: "absolute",
		marginTop: "-6em",
		right: "1.5em",
		[theme.breakpoints.down("xs")]: {
			right: "0.6em",
		},
	},
}));

export default function Footer(props) {
	const classes = useStyles();

	return (
		<footer className={classes.footer}>
			<Hidden mdDown>
				<Grid container className={classes.mainContainer} justify="center">
					<Grid item className={classes.gridItem}>
						<Grid
							container
							direction="column"
							style={{ margin: 0 }}
							spacing={2}
						>
							<Grid
								item
								style={{ textDecoration: "none" }}
								className={classes.link}
								component={Link}
								href="/"
								onClick={() => props.setValue(0)}
							>
								Home
							</Grid>
						</Grid>
					</Grid>
					<Grid item className={classes.gridItem}>
						<Grid
							container
							direction="column"
							spacing={2}
							style={{ margin: 0 }}
						>
							<Grid
								item
								style={{ textDecoration: "none" }}
								className={classes.link}
								onClick={() => {
									props.setValue(1);
									props.setSelectedIndex(0);
								}}
								component={Link}
								href="/services"
							>
								Services
							</Grid>
							<Grid
								item
								style={{ textDecoration: "none" }}
								className={classes.link}
								component={Link}
								href="/customsoftware"
								onClick={() => {
									props.setValue(1);
									props.setSelectedIndex(1);
								}}
							>
								Custom Software Development
							</Grid>
							<Grid
								item
								style={{ textDecoration: "none" }}
								className={classes.link}
								component={Link}
								onClick={() => {
									props.setValue(1);
									props.setSelectedIndex(2);
								}}
								href="/mobileapps"
							>
								iOS/ Android App Development
							</Grid>
							<Grid
								item
								style={{ textDecoration: "none" }}
								className={classes.link}
								component={Link}
								onClick={() => {
									props.setValue(1);
									props.setSelectedIndex(3);
								}}
								href="/websitedevelopment"
							>
								Website Development
							</Grid>
							<Grid
								item
								style={{ textDecoration: "none" }}
								className={classes.link}
								component={Link}
								onClick={() => {
									props.setValue(1);
									props.setSelectedIndex(4);
								}}
								href="/training"
							>
								Training
							</Grid>{" "}
						</Grid>
					</Grid>
					<Grid item className={classes.gridItem}>
						<Grid
							container
							direction="column"
							style={{ margin: 0 }}
							spacing={2}
						>
							<Grid
								item
								style={{ textDecoration: "none" }}
								className={classes.link}
								component={Link}
								onClick={() => props.setValue(2)}
								href="/revolution"
							>
								The Revolution
							</Grid>
							<Grid
								item
								style={{ textDecoration: "none" }}
								className={classes.link}
								component={Link}
								onClick={() => props.setValue(2)}
								href="/revolution"
							>
								Vision
							</Grid>
							<Grid
								item
								style={{ textDecoration: "none" }}
								className={classes.link}
								component={Link}
								onClick={() => props.setValue(2)}
								href="/revolution"
							>
								Technology
							</Grid>
							<Grid
								item
								style={{ textDecoration: "none" }}
								className={classes.link}
								component={Link}
								href="/revolution"
								onClick={() => props.setValue(2)}
							>
								Process
							</Grid>
						</Grid>
					</Grid>
					<Grid item className={classes.gridItem}>
						<Grid
							container
							direction="column"
							style={{ margin: 0 }}
							spacing={2}
						>
							<Grid
								item
								className={classes.link}
								style={{ textDecoration: "none" }}
								component={Link}
								href="/about"
								onClick={() => props.setValue(3)}
							>
								About
							</Grid>
							<Grid
								item
								style={{ textDecoration: "none" }}
								className={classes.link}
								component={Link}
								href="/about"
								onClick={() => props.setValue(3)}
							>
								History
							</Grid>
							<Grid
								item
								style={{ textDecoration: "none" }}
								className={classes.link}
								component={Link}
								href="/about"
								onClick={() => props.setValue(3)}
							>
								The Developer
							</Grid>
						</Grid>
					</Grid>
					<Grid item className={classes.gridItem}>
						<Grid container direction="column" spacing={2}>
							<Grid
								item
								className={classes.link}
								style={{ textDecoration: "none" }}
								component={Link}
								onClick={() => props.setValue(4)}
								href="/contact"
							>
								Contact
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Hidden>
			<img
				alt="footer adornment decoration"
				className={classes.adornment}
				src="../../assets/FooterAdornment.svg"
			/>
			<Grid
				container
				justify="flex-end"
				spacing={2}
				className={classes.socialContainer}
			>
				<Grid
					item
					component={"a"}
					href="https://facebook.com/uzochukwuamara"
					rel="noopener noreferrer"
					target="_blank"
				>
					<img
						alt="facebook link"
						src="../../assets/facebook.svg"
						className={classes.icon}
					/>
				</Grid>
				<Grid
					item
					component={"a"}
					href="https://twitter.com"
					rel="noopener noreferrer"
					target="_blank"
				>
					<img
						alt="twitter link"
						src="../../assets/twitter.svg"
						className={classes.icon}
					/>
				</Grid>
				<Grid
					item
					component={"a"}
					href="https://instagram.com"
					rel="noopener noreferrer"
					target="_blank"
				>
					<img
						alt="instagram link"
						src="../../assets/instagram.svg"
						className={classes.icon}
					/>
				</Grid>
			</Grid>
		</footer>
	);
}
