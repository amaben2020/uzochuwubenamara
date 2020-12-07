import React from "react";
import Lottie from "react-lottie";
import Link from "../src/Link";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import documentsAnimation from "../src/animations/documentsAnimation/data";
import scaleAnimation from "../src/animations/scaleAnimation/data.json";
import Head from "next/head";
import automationAnimation from "../src/animations/automationAnimation/data.json";
import uxAnimation from "../src/animations/uxAnimation/data";
import Hidden from "@material-ui/core/Hidden";
import CallToAction from "../src/UI/CallToAction";

const useStyles = makeStyles((theme) => ({
	heading: {
		maxWidth: "40em",
	},
	arrowContainer: {
		marginTop: "0.5em",
	},
	mainContainer: {
		paddingLeft: "5em",
		paddingRight: "5em",
		paddingTop: "2em",
		paddingBottom: "10em",
	},
	itemSpacer: {
		maxWidth: "40em",
	},
}));

export default function CustomSoftware(props) {
	const classes = useStyles();
	const theme = useTheme();
	const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
	const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
	const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
	const documentsOptions = {
		loop: true,
		autoplay: true,
		animationData: documentsAnimation,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};
	const scaleOptions = {
		loop: true,
		autoplay: true,
		animationData: scaleAnimation,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};
	const automationOptions = {
		loop: true,
		autoplay: true,
		animationData: automationAnimation,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};
	const uxOptions = {
		loop: true,
		autoplay: true,
		animationData: uxAnimation,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};
	return (
		<Grid container direction="column" className={classes.mainContainer}>
			<Head>
				<title key="title">
					Custom Software Development & Design - Free Estimate
				</title>
				<meta
					name="description"
					key="description"
					content="Cutting-edge custom software development with efficient designs from scratch - let us optimize your business today."
				/>
				<meta
					property="og:title"
					content="Bringing the Powerful React Technology to You | Custom Software Development"
				/>
				<meta
					property="og:url"
					key="og:url"
					content="https://amabentechnologies.ng/customsoftware"
				/>
				<link
					rel="canonical"
					key="canonical"
					href="https://amabentechnologies.ng/customsoftware"
				/>
			</Head>
			<Grid
				item
				direction="row"
				container
				className={classes.rowContainer}
				style={{ marginTop: matchesXS ? "1em" : "2em" }}
				alignItems={matchesMD ? "center" : undefined}
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
							href="/services"
							onClick={() => props.setSelectedIndex(0)}
						>
							<img src="../assets/backArrow.svg" alt="Back To Services " />
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
							Custom Software Development
						</Typography>
					</Grid>
					<Grid item>
						<Typography
							align={matchesMD ? "center" : undefined}
							variant="body1"
							paragraph
						>
							Whether we’re replacing old software or inventing new solutions, I
							am here to help your business tackle its challenges with
							technology.
						</Typography>
						<Typography
							align={matchesMD ? "center" : undefined}
							variant="body1"
							paragraph
						>
							Using regular commercial software leaves you with a lot of stuff
							you don’t need, without some of the stuff you do need, and
							ultimately controls the way you work. Without using any software
							at all you risk falling behind competitors and missing out on huge
							savings from increased efficiency.
						</Typography>
						<Typography
							align={matchesMD ? "center" : undefined}
							variant="body1"
							paragraph
						>
							My custom solutions are designed from the ground up with your
							needs, wants, and goals at the core. This collaborative process
							produces finely tuned software that is much more effective at
							improving your workflow and reducing costs than generalized
							options.
						</Typography>
						<Typography
							align={matchesMD ? "center" : undefined}
							variant="body1"
							paragraph
						>
							I would create exactly what you what, exactly how you want it.
						</Typography>
					</Grid>
				</Grid>
				<Hidden mdDown>
					<Grid item className={classes.arrowContainer}>
						<IconButton
							style={{ backgroundColor: "transparent" }}
							component={Link}
							href="/mobileapps"
							onClick={() => props.setSelectedIndex(2)}
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
				direction="row"
				justify="center"
				style={{ marginTop: "15em", marginBottom: matchesXS ? "8em" : "20em" }}
			>
				<Grid
					item
					container
					direction="column"
					md
					alignItems="center"
					style={{ maxWidth: "40em" }}
				>
					<Grid item>
						<Typography
							alignItems={matchesMD ? "center" : undefined}
							variant="h4"
						>
							Save Energy
						</Typography>
					</Grid>
					<Grid item>
						<img src="../assets/bulb.svg" alt="lightbulb" />
					</Grid>
				</Grid>
				<Grid
					item
					container
					direction="column"
					md
					alignItems="center"
					style={{
						maxWidth: "40em",
						marginTop: matchesSM ? "10em" : 0,
						marginBottom: matchesSM ? "10em" : 0,
					}}
				>
					<Grid item>
						<Typography variant="h4">Save Time</Typography>
					</Grid>
					<Grid item>
						<img src="../assets/stopwatch.svg" alt="Time" />
					</Grid>
				</Grid>
				<Grid
					item
					container
					direction="column"
					md
					alignItems="center"
					style={{ maxWidth: "40em" }}
				>
					<Grid item>
						<Typography variant="h4">Save Cash</Typography>
					</Grid>
					<Grid item>
						<img src="../assets/cash.svg" alt="Money" />
					</Grid>
				</Grid>
			</Grid>
			<Grid
				item
				container
				alignItems={matchesMD ? "center" : undefined}
				direction={matchesMD ? "column" : "row"}
				justify={matchesMD ? "center" : "space-between"}
				style={{ display: matchesMD ? "grid" : undefined }}
			>
				<Grid
					item
					container
					direction={matchesMD ? "column" : "row"}
					md
					className={classes.itemSpacer}
				>
					<Grid
						item
						container
						direction="column"
						style={{ marginBottom: matchesXS ? "2em" : matchesSM ? "5em" : 0 }}
					>
						<Grid item>
							<Typography variant="h4">Digital Document & Data</Typography>
						</Grid>
						<Typography paragraph variant="body1">
							{" "}
							Reduce Errors. Reduce Waste. Reduce Costs.
						</Typography>
						<Typography paragraph variant="body1">
							{" "}
							Billions are spent annually on the purchasing, printing, and
							distribution of paper. On top of the massive environmental impact
							this has, it causes harm to your bottom line as well.
						</Typography>
						<Typography paragraph variant="body1">
							{" "}
							By utilizing digital forms and documents you can remove these
							obsolete expenses, accelerate your communication, and help the
							Earth.
						</Typography>
					</Grid>
				</Grid>
				<Grid item md>
					<Lottie
						options={documentsOptions}
						isStopped={false}
						style={{ minHeight: 250, maxHeight: 275, maxWidth: 275 }}
					/>
				</Grid>
				<Grid item md>
					<Lottie
						options={scaleOptions}
						style={{ maxHeight: 260, maxWidth: 280 }}
					/>
				</Grid>
				<Grid item container md style={{ maxWidth: "40em" }}>
					<Grid item container direction="column">
						<Grid item>
							<Typography align="right" variant="h4">
								Scale
							</Typography>
						</Grid>
						<Typography align="right" paragraph variant="body1">
							{" "}
							Whether you’re a large brand, just getting started, or taking off
							right now, our application architecture ensures pain-free growth
							and reliability.
						</Typography>
					</Grid>
				</Grid>
			</Grid>
			<Hidden smDown>
				<Grid
					md
					item
					container
					align="center"
					direction="row"
					style={{ marginTop: "20em", marginBottom: "10em" }}
				>
					<Grid item container direction="column" alignItems="center">
						<Grid
							item
							md
							align="center"
							style={{ marginRight: matchesXS ? "10em" : undefined }}
						>
							<img
								src="../assets/root.svg"
								alt="tree with roots"
								height="450em"
								width="450em"
							/>
						</Grid>
						<Grid
							item
							container
							alignItems="center"
							style={{ maxWidth: "40em" }}
						>
							<Typography align="center" variant="h4" gutterBottom>
								Root-Cause Analysis
							</Typography>
							<Typography align="center" variant="body1" paragraph>
								Many problems are merely symptoms of larger, underlying issues.
							</Typography>
							<Typography align="center" variant="body1" paragraph>
								I can help you thoroughly examine all areas of your business to
								develop a holistic plan for the most effective implementation of
								technology.
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Hidden>
			<Grid
				item
				container
				alignItems={matchesMD ? "center" : undefined}
				direction={matchesMD ? "column" : "row"}
				justify={matchesMD ? "center" : "space-between"}
				style={{ display: matchesMD ? "grid" : undefined }}
			>
				<Grid item container md className={classes.itemSpacer}>
					<Grid item container direction="column" md>
						<Grid item>
							<Typography
								style={{ marginTop: matchesXS ? "2em" : undefined }}
								variant="h4"
								align={matchesMD ? "center" : "left"}
							>
								Automation
							</Typography>
						</Grid>
						<Typography
							align={matchesMD ? "center" : "left"}
							paragraph
							variant="body1"
						>
							{" "}
							Why waste time when you don’t have to?
						</Typography>
						<Typography
							align={matchesMD ? "center" : "left"}
							paragraph
							variant="body1"
						>
							{" "}
							I can help you identify processes with time or event based actions
							which can now easily be automated.
						</Typography>
						<Typography
							align={matchesMD ? "center" : "left"}
							paragraph
							variant="body1"
						>
							{" "}
							Increasing efficiency increases profits, leaving you more time to
							focus on your business, not busywork
						</Typography>
					</Grid>
				</Grid>
				<Grid item md>
					<Lottie
						options={automationOptions}
						isStopped={true}
						style={{ maxHeight: 290, maxWidth: 280 }}
					/>
				</Grid>
				<Grid item md>
					<Lottie
						options={uxOptions}
						style={{ maxHeight: 310, maxWidth: 155 }}
					/>
				</Grid>
				<Grid item container md style={{ maxWidth: "40em" }}>
					<Grid item container direction="column">
						<Grid item>
							<Typography align={matchesMD ? "center" : "right"} variant="h4">
								User Experience Design
							</Typography>
						</Grid>
						<Typography
							align={matchesMD ? "center" : "right"}
							paragraph
							variant="body1"
						>
							A good design that isn’t usable isn’t a good design.
						</Typography>
						<Typography
							align={matchesMD ? "center" : "right"}
							paragraph
							variant="body1"
						>
							So why are so many pieces of software complicated, confusing, and
							frustrating?
						</Typography>
						<Typography
							align={matchesMD ? "center" : "right"}
							paragraph
							variant="body1"
						>
							By prioritizing users and the real ways they interact with
							technology we’re able to develop unique, personable experiences
							that solve problems rather than create new ones.
						</Typography>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}
