import React from "react";
import Lottie from "react-lottie";
import Link from "../src/Link";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import integrationAnimation from "../src/animations/integrationAnimation/data.json";
import CallToAction from "../src/UI/CallToAction";
import Head from "next/head";

const useStyles = makeStyles((theme) => ({
	heading: {
		maxWidth: "40em",
	},
	arrowContainer: {
		marginTop: "0.5em",
	},

	rowContainer: {
		paddingLeft: "5em",
		paddingRight: "5em",
		[theme.breakpoints.down("sm")]: {
			paddingLeft: "1.5em",
			paddingRight: "1.5em",
		},
	},
}));

export default function MobileApps(props) {
	const classes = useStyles();
	const theme = useTheme();
	const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
	const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
	const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: integrationAnimation,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	return (
		<Grid container direction="column">
			<Head>
				<title key="title">
					Optimized Web Application for Mobile Devices | Amaben Technologies
				</title>
				<meta
					name="description"
					key="description"
					content=" Websites optimized for mobile devices "
				/>
				<meta
					property="og:title"
					content="Bringing the Powerful React Technology to You | Mobile Apps"
				/>
				<meta
					property="og:url"
					key="og:url"
					content="https://amabentechnologies.ng/mobileapps"
				/>
				<link
					rel="canonical"
					key="canonical"
					href="https://amabentechnologies.ng/mobileapps"
				/>
			</Head>
			<Grid
				item
				container
				direction="row"
				className={classes.rowContainer}
				alignItems={matchesMD ? "center" : undefined}
				style={{ marginTop: matchesXS ? "1em" : "2em" }}
				justify={matchesMD ? "center" : undefined}
			>
				<Hidden mdDown>
					<Grid
						item
						className={classes.arrowContainer}
						style={{ marginRight: "1em", marginLeft: "-3.5em" }}
					>
						<IconButton
							style={{ backgroundColor: "transparent" }}
							component={Link}
							href="/customsoftware"
							onClick={() => props.setSelectedIndex(1)}
							h1
						>
							<img src="../assets/backArrow.svg" alt="Custom Software " />
						</IconButton>
					</Grid>
				</Hidden>
				<Grid item container direction="column" className={classes.heading}>
					<Grid item>
						<Typography
							style={{
								lineHeight: matchesXS ? 1.1 : null,
								marginBottom: matchesXS ? "0.5em" : null,
								fontSize: "2.25rem",
							}}
							align={matchesMD ? "center" : undefined}
							variant="h1"
						>
							iOS/Android App Development
						</Typography>
					</Grid>
					<Grid item>
						<Typography
							align={matchesMD ? "center" : undefined}
							variant="body1"
							paragraph
						>
							Mobile apps allow you to take your tools on the go.
						</Typography>
						<Typography
							align={matchesMD ? "center" : undefined}
							variant="body1"
							paragraph
						>
							Whether you want an app for your customers, employees, or
							yourself, we can build cross-platform native solutions for any
							part of your business process. This opens you up to a whole new
							world of possibilities by taking advantage of phone features like
							the camera, GPS, push notifications, and more.
						</Typography>
						<Typography
							align={matchesMD ? "center" : undefined}
							variant="body1"
							paragraph
						>
							Convenience. Connection.
						</Typography>
					</Grid>
				</Grid>
				<Hidden mdDown>
					<Grid item className={classes.arrowContainer}>
						<IconButton
							style={{ backgroundColor: "transparent" }}
							component={Link}
							href="/websitedevelopment"
							onClick={() => props.setSelectedIndex(3)}
						>
							<img
								src="../assets/forwardArrow.svg"
								alt="Forward to iOS/Android Section"
							/>
						</IconButton>
					</Grid>
				</Hidden>
			</Grid>
			<Grid
				item
				container
				direction={matchesSM ? "column" : "row"}
				className={classes.rowContainer}
				style={{ marginTop: matchesXS ? "6em" : "15em", marginBottom: "15em" }}
			>
				<Grid item container direction={matchesSM ? "column" : "row"} md>
					<Grid item>
						<Typography
							align={matchesSM ? "center" : undefined}
							variant="h4"
							gutterBottom
						>
							Integration
						</Typography>
					</Grid>
					<Grid item>
						<Typography
							align={matchesSM ? "center" : undefined}
							variant="body1"
							paragraph
							align={matchesSM ? "center" : undefined}
						>
							Our technology enables an innate interconnection between web and
							mobile applications, putting everything you need right in one
							convenient place.
						</Typography>
						<Typography
							align={matchesSM ? "center" : undefined}
							variant="body1"
							paragraph
						>
							This allows you to extend your reach, reinvent interactions, and
							develop a stronger relationship with your users than ever before.
						</Typography>
					</Grid>
				</Grid>
				<Grid item md>
					<Lottie
						options={defaultOptions}
						alignItems={matchesMD ? "center" : undefined}
						style={{
							maxWidth: matchesMD ? "15em" : "20em",
							height: matchesMD ? "20em" : undefined,
						}}
					/>
				</Grid>
				<Grid
					item
					align={matchesSM ? "center" : undefined}
					container
					direction="column"
					md
				>
					<Grid item>
						<Typography
							align={matchesSM ? "center" : "right"}
							variant="h4"
							gutterBottom
						>
							Simultaneous Platform Support
						</Typography>
					</Grid>
					<Grid item md>
						<Typography
							align={matchesSM ? "center" : "right"}
							variant="body1"
							paragraph
						>
							Our cutting-edge development process allows us to create apps for
							iPhone, Android, and tablets — all at the same time.
						</Typography>
						<Typography
							align={matchesSM ? "center" : "right"}
							variant="body1"
							paragraph
						>
							This significantly reduces costs and creates a more unified brand
							experience across all devices.
						</Typography>
					</Grid>
				</Grid>{" "}
			</Grid>
			<Grid
				item
				style={{
					marginBottom: "15em",
					display: matchesMD ? "grid" : undefined,
				}}
				container
				direction={matchesMD ? "column" : "row"}
				className={classes.rowContainer}
			>
				<Grid item container direction="column" md alignItems="center">
					<Grid item>
						<Typography
							align={matchesSM ? "center" : undefined}
							variant="h4"
							gutterBottom
						>
							Extend Functionality
						</Typography>
					</Grid>
					<Grid item>
						<img src="../assets/swissKnife.svg" alt="Swiss Army Knife" />
					</Grid>
				</Grid>
				<Grid
					item
					container
					direction="column"
					md
					alignItems="center"
					style={{
						marginTop: matchesMD ? "10em" : 0,
						marginBottom: matchesMD ? "10em" : 0,
					}}
				>
					<Grid item>
						<Typography variant="h4" gutterBottom align="center">
							Extend Access
						</Typography>
					</Grid>
					<Grid item>
						<img
							src="../assets/extendAccess.svg"
							style={{ maxWidth: matchesXS ? "20em" : "28em" }}
							alt="tear-one-off"
						/>
					</Grid>
				</Grid>
				<Grid item container direction="column" md alignItems="center">
					<Grid item>
						<Typography variant="h4" gutterBottom align="center">
							Increase Engagement
						</Typography>
					</Grid>
					<Grid item>
						<img
							src="../assets/increaseEngagement.svg"
							alt="App with notification"
						/>
					</Grid>
				</Grid>
			</Grid>
			<Grid item>
				<CallToAction setValue={props.setValue} />
			</Grid>
		</Grid>
	);
}
