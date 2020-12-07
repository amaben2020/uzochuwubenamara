import React from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import animationData from "../src/animations/landinganimation/data";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonArrow from "../src/UI/ButtonArrow";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CallToAction from "../src/UI/CallToAction";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Link from "../src/Link";
import Head from "next/head";
import { Hidden, Grow } from "@material-ui/core";
import {
	LazyLoadImage,
	LazyLoadComponent,
} from "react-lazy-load-image-component";

const useStyles = makeStyles((theme) => ({
	animation: {
		maxWidth: "50em",
		minWidth: "21em",
		marginTop: "2em",
		marginLeft: "10%",
		[theme.breakpoints.down("sm")]: {
			maxWidth: "30em",
		},
	},
	estimateButton: {
		...theme.typography.estimate,
		backgroundColor: theme.palette.common.orange,
		borderRadius: 50,
		height: 45,
		width: 145,
		marginRight: 40,
		"&:hover": {
			backgroundColor: theme.palette.secondary.light,
		},
	},
	buttonContainer: {
		marginTop: "1em",
	},
	learnButtonHero: {
		...theme.typography.learnButton,
		fontSize: "0.9rem",
		textDecoration: "none",
		height: 45,
		width: 145,
	},
	mainContainer: {
		marginTop: "5em",
		[theme.breakpoints.down("md")]: {
			marginTop: "3em",
		},
		[theme.breakpoints.down("xs")]: {
			marginTop: "2em",
		},
	},
	heroTextContainer: {
		minWidth: "21.5em",
		marginLeft: "1em",
		[theme.breakpoints.down("xs")]: {
			marginTop: "0",
		},
	},
	specialText: {
		fontFamily: "Pacifico",
		color: theme.palette.common.orange,
	},
	learnButton: {
		...theme.typography.learnButton,
		fontSize: "0.7rem",
		height: 35,
		padding: 5,
		[theme.breakpoints.down("sm")]: {
			marginBottom: "2em",
		},
	},
	subtitle: {
		marginBottom: "1em",
	},
	icon: {
		marginLeft: "2em",
		[theme.breakpoints.down("xs")]: {
			marginLeft: 0,
		},
	},
	serviceContainer: {
		marginTop: "12em",
		[theme.breakpoints.down("sm")]: {
			padding: 25,
		},
		[theme.breakpoints.down("sm")]: {
			padding: 5,
		},
	},
	revolutionBackground: {
		backgroundImage: `url("../assets/matrix.jpg")`,
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		height: "100%",
		width: "100%",
	},
	revolutionCard: {
		position: "absolute",
		boxShadow: theme.shadows[10],
		borderRadius: 15,
		padding: "10em",
		[theme.breakpoints.down("xs")]: {
			maxWidth: 25,
		},
	},
	infoBackground: {
		backgroundImage: `url("../assets/orange.jpg")`,
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		height: "100%",
		width: "100%",
	},
}));

const LandingPage = (props) => {
	const classes = useStyles();
	const theme = useTheme();
	const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
	const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
	const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
	//this enables the use of ternary to set conditions for screen

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};
	return (
		<Grid container direction="column" className={classes.mainContainer}>
			<Head>
				<title key="title">
					Custom Websites, Ecommerce Websites, Custom Software, | Amaben
					Technologies
				</title>
				<meta
					name="description"
					key="description"
					content="Bespoke websites designed from scratch with cutting edge optimiations. Get in touch today for your project"
				/>
				<meta
					property="og:title"
					content="Bringing the Powerful React Technology to You | Landing Page"
				/>
				<meta
					property="og:url"
					key="og:url"
					content="https://amabentechnologies.ng/index"
				/>
				<link
					rel="canonical"
					key="canonical"
					href="https://amabentechnologies.ng/index"
				/>
			</Head>
			<Grow in>
				<Grid item>
					{" "}
					{/*-----HERO SECTION-----*/}
					<Grid
						container
						justify="flex-end"
						alignItems="center"
						direction="row"
					>
						<Grid item sm className={classes.heroTextContainer}>
							<Typography
								style={{
									fontSize: matchesXS ? "2.5rem" : matchesMD ? "3rem" : "4rem",
								}}
								align="center"
								variant="h1"
							>
								Uzochukwu Amara Benneth <br />
								(Frontend Developer)
							</Typography>
							<Grid
								container
								justify="center"
								className={classes.buttonContainer}
							>
								<Grid item>
									<Button
										onClick={() => props.setValue(6)}
										component={Link}
										style={{ textDecoration: "none" }}
										href="/estimate"
										variant="contained"
										className={classes.estimateButton}
									>
										{" "}
										Free Estimate
									</Button>
								</Grid>
								<Grid item>
									<Button
										onClick={() => props.setValue(2)}
										component={Link}
										href="/revolution"
										variant="outlined"
										style={{ textDecoration: "none" }}
										className={classes.learnButtonHero}
									>
										<span style={{ marginRight: 10 }}> Learn More</span>
										<ButtonArrow
											height={15}
											width={15}
											fill={theme.palette.common.blue}
										/>
									</Button>
								</Grid>
							</Grid>
						</Grid>
						<Grid item sm item className={classes.animation}>
							<Lottie height={"100%"} width={"100%"} options={defaultOptions} />
						</Grid>
					</Grid>
				</Grid>
			</Grow>
			{/*-----Custom Software Dev-----*/}
			<Grow in>
				<Grid item>
					<Grid
						container
						justify={matchesSM ? "center" : undefined}
						direction="row"
						className={classes.serviceContainer}
					>
						<Grid
							item
							style={{
								marginLeft: matchesSM ? 0 : "5em",
								textAlign: matchesSM ? "center" : undefined,
							}}
						>
							<Typography variant="h4">Custom Software Development</Typography>
							<Typography variant="subtitle1" className={classes.subtitle}>
								Save Energy. Save Time. Save Money
							</Typography>
							<Typography variant="subtitle1">
								Complete Digital Solutions, from investigation to{" "}
								<span className={classes.specialText}> Celebration</span>
							</Typography>
							<Button
								onClick={() => {
									props.setValue(1);
									props.setSelectedIndex(1);
								}}
								component={Link}
								style={{ textDecoration: "none" }}
								href="/customsoftware"
								variant="outlined"
								className={classes.learnButton}
							>
								<span style={{ marginRight: 10 }}> Learn More</span>
								<ButtonArrow
									height={15}
									width={15}
									fill={theme.palette.common.blue}
								/>
							</Button>
						</Grid>
						<Grid item className={classes.icon}>
							<LazyLoadImage
								src="../assets/CustomSoftware.svg"
								alt="custom Software Development"
							/>
						</Grid>
					</Grid>
				</Grid>
			</Grow>
			<Grow in>
				<Grid item>
					<Grid
						container
						justify={matchesSM ? "center" : "flex-end"}
						direction="row"
						className={classes.serviceContainer}
					>
						<Grid
							item
							style={{
								textAlign: matchesSM ? "center" : undefined,
							}}
						>
							<Typography variant="h4">iOS/ Android App Development</Typography>
							<Typography variant="subtitle1" className={classes.subtitle}>
								Extend Functionality. Extend Access. Increase Engagement.
							</Typography>
							<Typography variant="subtitle1">
								Increase Your Web Experience or Create A Standalone App
								{matchesSM ? null : <br />} With Either Mobile Platform.
							</Typography>
							<Button
								onClick={() => {
									props.setValue(1);
									props.setSelectedIndex(2);
								}}
								component={Link}
								href="/mobileapps"
								style={{ textDecoration: "none" }}
								variant="outlined"
								className={classes.learnButton}
							>
								<span style={{ marginRight: 10 }}> Learn More</span>
								<ButtonArrow
									height={15}
									width={15}
									fill={theme.palette.common.blue}
								/>
							</Button>
						</Grid>
						<Grid
							item
							className={classes.icon}
							style={{ marginRight: matchesSM ? 0 : "5em" }}
						>
							<LazyLoadImage
								src="../assets/mobileIcon.svg"
								alt="mobile phone icon"
							/>
						</Grid>
					</Grid>
					{/*-----Website Development-----*/}
					<Grid item style={{ maxWidth: matchesXS ? "24em" : undefined }}>
						<Grid
							container
							justify={matchesSM ? "center" : undefined}
							direction="row"
							className={classes.serviceContainer}
						>
							<Grid
								item
								style={{
									marginLeft: matchesSM ? 0 : "5em",
									textAlign: matchesSM ? "center" : undefined,
								}}
							>
								<Typography variant="h4">Website Development</Typography>
								<Typography variant="subtitle1" className={classes.subtitle}>
									Reach More. Discover More. Sell More.
								</Typography>
								<Typography variant="subtitle1">
									Optimized for Search Engines, {matchesXS && <br />} built for
									<span className={classes.specialText}> Speed.</span>
								</Typography>
								<Button
									onClick={() => {
										props.setValue(1);
										props.setSelectedIndex(3);
									}}
									component={Link}
									style={{ textDecoration: "none" }}
									href="/websitedevelopment"
									variant="outlined"
									className={classes.learnButton}
								>
									<span style={{ marginRight: 10 }}> Learn More</span>
									<ButtonArrow
										height={10}
										width={10}
										fill={theme.palette.common.blue}
									/>
								</Button>
							</Grid>
							<Grid item className={classes.icon}>
								<LazyLoadImage
									src="../assets/websiteIcon.svg"
									alt="Website Development"
								/>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grow>
			{/*-----The Revolution-----*/}
			<Grow in>
				<Grid item>
					<Grid
						className={classes.revo}
						container
						alignItems="center"
						justify="center"
						style={{
							height: "100em",
							marginTop: "12em",
						}}
					>
						<Card className={classes.revolutionCard}>
							<CardContent>
								<Grid
									container
									direction="column"
									style={{
										textAlign: "center",
									}}
								>
									<Grid
										item
										style={{ marginLeft: matchesXS ? "-5em" : undefined }}
									>
										<Typography variant="h1" gutterBottom>
											The Revolution
										</Typography>
									</Grid>

									<Grid
										item
										style={{ marginLeft: matchesXS ? "-5em" : undefined }}
									>
										<Typography variant="subtitle1">
											Frontend Developer with visionary insights coupled with
											cutting-edge technology is recipe for <br />
											Technological Revolution
										</Typography>
									</Grid>
									<Grid
										item
										style={{ marginLeft: matchesXS ? "-5em" : undefined }}
									>
										<Button
											onClick={() => props.setValue(2)}
											component={Link}
											href="/revolution"
											style={{
												textDecoration: "none",
											}}
											variant="outlined"
											className={classes.learnButtonHero}
										>
											<span style={{ marginRight: 10 }}> Learn More</span>
											<ButtonArrow
												height={15}
												width={15}
												fill={theme.palette.common.blue}
											/>
										</Button>
									</Grid>
								</Grid>
							</CardContent>
						</Card>{" "}
						<LazyLoadComponent threshold={850}>
							<div className={classes.revolutionBackground} />
						</LazyLoadComponent>
					</Grid>
				</Grid>
			</Grow>
			{/*-----Information Block-----*/}
			<Hidden smDown>
				<Grow in>
					<Grid item>
						<Grid
							className={classes.infoBackground}
							container
							direction="row"
							style={{ height: "80em" }}
							alignItems="center"
						>
							<Grid
								container
								style={{
									textAlign: matchesXS ? "center" : "inherit",
								}}
								direction={matchesSM ? "column" : "row"}
							>
								<Grid
									item
									sm
									style={{
										marginLeft: matchesXS ? 0 : matchesSM,
									}}
									style={{ marginRight: "15em", padding: "3em" }}
								>
									<Grid
										container
										direction="column"
										style={{ marginLeft: matchesXS ? "4em" : 0 }}
									>
										<Typography variant="h1" style={{ color: "white" }}>
											About
										</Typography>
										<Typography style={{ color: "white" }} variant="subtitle2">
											Let's get personal
										</Typography>
										<Grid item>
											<Button
												onClick={() => props.setValue(3)}
												component={Link}
												href="/about"
												variant="outlined"
												className={classes.learnButton}
												style={{ color: "white", borderColor: "white" }}
											>
												<span style={{ marginRight: 10 }}> Learn More</span>
												<ButtonArrow height={15} width={15} fill="white" />
											</Button>
										</Grid>{" "}
									</Grid>
								</Grid>
								<Grid
									item
									style={{
										marginRight: matchesXS ? 0 : matchesSM,
										marginLeft: matchesXS ? "-11em" : undefined,
										textAlign: matchesXS ? "center" : "right",
									}}
								>
									<Grid
										item
										sm
										container
										direction="column"
										style={{ marginRight: "15em", padding: "3em" }}
									>
										<Typography variant="h1" style={{ color: "white" }}>
											Contact
										</Typography>
										<Typography style={{ color: "white" }} variant="subtitle2">
											Say Hi
										</Typography>
										<Grid item>
											<Button
												component={Link}
												href="/contact"
												onClick={() => props.setValue(4)}
												variant="outlined"
												className={classes.learnButton}
												style={{ color: "white", borderColor: "white" }}
											>
												<span style={{ marginRight: 10 }}> Learn More</span>
												<ButtonArrow height={15} width={15} fill="white" />
											</Button>
										</Grid>{" "}
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grow>
			</Hidden>

			<Grid item>
				<LazyLoadComponent threshold={700}>
					<CallToAction setValue={props.setValue} />
				</LazyLoadComponent>
			</Grid>
		</Grid>
	);
};

export default LandingPage;
