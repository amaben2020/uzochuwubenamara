import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ButtonArrow from "../../src/UI/ButtonArrow";
import Link from "../Link";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
	learnButton: {
		...theme.typography.learnButton,
		fontSize: "0.7rem",
		height: 35,
		padding: 5,
		color: "#082f9c",
		[theme.breakpoints.down("sm")]: {
			marginBottom: "2em",
			color: "#fff",
		},
	},
	background: {
		backgroundImage: `url("../../assets/blue.jpg")`,
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		height: "60em",
		width: "100%",
		[theme.breakpoints.down("md")]: {
			backgroundImage: `url("../../assets/blue_mobile.jpg")`,
			fontColor: "#082f9c",
		},
	},
	estimateBtn: {
		...theme.typography.estimate,
		borderRadius: 50,
		height: 80,
		width: 205,
		backgroundColor: theme.palette.common.orange,
		fontSize: "1.5rem",
		marginRight: "5em",
		"&:hover": {
			backgroundColor: theme.palette.secondary.light,
		},
	},
}));

export default function CallToAction(props) {
	const classes = useStyles();
	const theme = useTheme();
	const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
	const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
	const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
	return (
		<Grid
			container
			alignItems="center"
			className={classes.background}
			justify="space-between"
		>
			<Grid item style={{ marginLeft: "5em" }}>
				<Grid container direction="column">
					<Grid item>
						<Typography
							variant="h1"
							gutterBottom
							style={{
								fontSize: "3rem",
								color: matchesXS
									? "#fff"
									: matchesSM
									? "#fff"
									: matchesMD
									? "#fff"
									: "#082f9c",
								lineHeight: matchesXS ? 1.1 : null,
							}}
						>
							Outstanding Developer, <br /> {matchesSM && <br />} Revolutionary
							Results.
						</Typography>
						<Typography
							variant="subtitle2"
							style={{
								fontSize: matchesSM ? "1.25rem" : "1.5rem",
								color: "white",
							}}
						>
							Take Advantage of the Web Technology <br />
							Showcase your Business & {matchesXS && <br />} Ideas to the World.
						</Typography>
						<Grid container item>
							<Button
								onClick={() => props.setValue(2)}
								component={Link}
								style={{ textDecoration: "none" }}
								href="/revolution"
								variant="outlined"
								color="#082f9c"
								style={{ marginTop: "20px" }}
								className={classes.learnButton}
							>
								<span style={{ textDecoration: "none", marginRight: 5 }}>
									{" "}
									Learn More
								</span>
								<ButtonArrow height={10} width={10} fill="#082f9c" />
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Grid item>
				<Button
					onClick={() => props.setValue(6)}
					component={Link}
					style={{ textDecoration: "none" }}
					href="/estimate"
					variant="contained"
					className={classes.estimateBtn}
				>
					Free Estimate
				</Button>
			</Grid>
		</Grid>
	);
}
