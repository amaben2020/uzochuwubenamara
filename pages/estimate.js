import React, { useState } from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import { Hidden, useMediaQuery } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import estimateAnimation from "../src/animations/estimateAnimation/data.json";
import { Button } from "@material-ui/core";
import { cloneDeep } from "lodash";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import CircularProgress from "@material-ui/core/CircularProgress";
import Head from "next/head";

const useStyles = makeStyles((theme) => ({
	icon: {
		width: "12em",
		height: "10em",
	},
	specialText: {
		fontFamily: "Raleway",
		fontWeight: 700,
		fontSize: "1.5rem",
		color: theme.palette.common.orange,
	},
	estimateButton: {
		...theme.typography.estimate,
		borderRadius: 50,
		backgroundColor: theme.palette.common.orange,
		height: 50,
		width: 225,
		fontSize: "1.25rem",
		marginTop: "5em",
		"&:hover": {
			backgroundColor: theme.palette.secondary.light,
		},
	},
	message: {
		border: `2px solid ${theme.palette.common.blue}`,
		marginTop: "5em",
		borderRadius: 5,
	},
}));

const defaultQuestions = [
	{
		id: 1,
		title: "Which service are you interested in?",
		active: true,
		options: [
			{
				id: 1,
				title: "Custom Software Development",
				subtitle: null,
				icon: "../assets/CustomSoftware.svg",
				iconAlt: "three floating screens",
				selected: false,
				cost: 0,
			},
			{
				id: 2,
				title: "iOS/ Android Development",
				subtitle: null,
				icon: "../assets/iphone.svg",
				iconAlt: "Phone and desktop screens",
				selected: false,
				cost: 0,
			},
			{
				id: 3,
				title: "Website Development",
				subtitle: null,
				icon: "../assets/website.svg",
				iconAlt: "Computer screen",
				selected: false,
				cost: 0,
			},
		],
	},
];

const softwareQuestions = [
	{ ...defaultQuestions[0], active: false },
	{
		id: 2,
		title: "Which platforms do you need supported?",
		subtitle: "Select all that apply.",
		options: [
			{
				id: 1,
				title: "Web Application",
				subtitle: null,
				icon: "../assets/website.svg",
				iconAlt: "computer outline",
				selected: false,
				cost: 100,
			},
			{
				id: 2,
				title: "iOS Application",
				subtitle: null,
				icon: "../assets/iphone.svg",
				iconAlt: "outline of iphone",
				selected: false,
				cost: 100,
			},
			{
				id: 3,
				title: "Android Application",
				subtitle: null,
				icon: "../assets/android.svg",
				iconAlt: "android",
				selected: false,
				cost: 100,
			},
		],
		active: true,
	},
	{
		id: 3,
		title: "Which features do you expect to use?",
		subtitle: "Select all that apply.",
		options: [
			{
				id: 1,
				title: "Photo/Video",
				subtitle: null,
				icon: "../assets/camera.svg",
				iconAlt: "camera outline",
				selected: false,
				cost: 25,
			},
			{
				id: 2,
				title: "GPS",
				subtitle: null,
				icon: "../assets/gps.svg",
				iconAlt: "gps pin",
				selected: false,
				cost: 25,
			},
			{
				id: 3,
				title: "File Transfer",
				subtitle: null,
				icon: "../assets/upload.svg",
				iconAlt: "outline of cloud with arrow pointing up",
				selected: false,
				cost: 25,
			},
		],
		active: false,
	},
	{
		id: 4,
		title: "Which features do you expect to use?",
		subtitle: "Select all that apply.",
		options: [
			{
				id: 1,
				title: "Users/Authentication",
				subtitle: null,
				icon: "../assets/users.svg",
				iconAlt: "outline of a person with a plus sign",
				selected: false,
				cost: 200,
			},
			{
				id: 2,
				title: "Biometrics",
				subtitle: null,
				icon: "../assets/biometrics.svg",
				iconAlt: "fingerprint",
				selected: false,
				cost: 25,
			},
			{
				id: 3,
				title: "Push Notifications",
				subtitle: null,
				icon: "../assets/bell.svg",
				iconAlt: "outline of a bell",
				selected: false,
				cost: 25,
			},
		],
		active: false,
	},
	{
		id: 5,
		title: "What type of custom features do you expect to need?",
		subtitle: "Select one.",
		options: [
			{
				id: 1,
				title: "Low Complexity",
				subtitle: "(Informational)",
				icon: "../assets/info.svg",
				iconAlt: "'i' inside a circle",
				selected: false,
				cost: 25,
			},
			{
				id: 2,
				title: "Medium Complexity",
				subtitle: "(Interactive, Customizable, Realtime)",
				icon: "../assets/customized.svg",
				iconAlt: "two toggle switches",
				selected: false,
				cost: 50,
			},
			{
				id: 3,
				title: "High Complexity",
				subtitle: "(Data Modeling and Computation)",
				icon: "../assets/data.svg",
				iconAlt: "outline of line graph",
				selected: false,
				cost: 100,
			},
		],
		active: false,
	},
	{
		id: 6,
		title: "How many users do you expect?",
		subtitle: "Select one.",
		options: [
			{
				id: 1,
				title: "0-10",
				subtitle: null,
				icon: "../assets/person.svg",
				iconAlt: "person outline",
				selected: false,
				cost: 3,
			},
			{
				id: 2,
				title: "10-100",
				subtitle: null,
				icon: "../assets/persons.svg",
				iconAlt: "outline of two people",
				selected: false,
				cost: 4.25,
			},
			{
				id: 3,
				title: "100+",
				subtitle: null,
				icon: "../assets/people.svg",
				iconAlt: "outline of three people",
				selected: false,
				cost: 5.5,
			},
		],
		active: false,
	},
];

const websiteQuestions = [
	{ ...defaultQuestions[0], active: false },
	{
		id: 2,
		title: "Which type of website are you wanting?",
		subtitle: "Select one.",
		options: [
			{
				id: 1,
				title: "Basic",
				subtitle: "(Informational)",
				icon: "../assets/info.svg",
				iconAlt: "person outline",
				selected: false,
				cost: 250,
			},
			{
				id: 2,
				title: "Interactive",
				subtitle: "(Users, API's, Messaging)",
				icon: "../assets/customized.svg",
				iconAlt: "outline of two people",
				selected: false,
				cost: 600,
			},
			{
				id: 3,
				title: "E-Commerce",
				subtitle: "(Sales)",
				icon: "../assets/globe.svg",
				iconAlt: "outline of three people",
				selected: false,
				cost: 950,
			},
		],
		active: true,
	},
];

export default function Estimate() {
	const classes = useStyles();
	const theme = useTheme();
	const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
	const [questions, setQuestions] = useState(defaultQuestions);
	const [dialogOpen, setDialogOpen] = useState(false);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [message, setMessage] = useState("");
	const [open, setOpen] = useState(false);
	const [emailHelper, setEmailHelper] = useState("");
	const [phoneHelper, setPhoneHelper] = useState("");
	const [total, setTotal] = useState(0);
	const [service, setService] = useState([]);
	const [platforms, setPlatforms] = useState([]);
	const [features, setFeatures] = useState([]);
	const [customFeatures, setCustomFeatures] = useState("");
	const [category, setCategory] = useState("");
	const [users, setUsers] = useState("");
	const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
	const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
	const [loading, setLoading] = useState(false);
	const [alert, setAlert] = useState({
		open: false,
		message: "",
		backgroundColor: "",
	});

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: estimateAnimation,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	const estimateDisabled = () => {
		let disabled = true;
		const emptySelections = questions
			.map((question) => question.options.filter((option) => option.selected))
			.filter((question) => question.length === 0);

		if (questions.length === 2) {
			if (emptySelections.length === 1) {
				return (disabled = false);
			}
		} else if (questions.length === 1) {
			return disabled;
		} else if (
			emptySelections.length < 3 &&
			[questions.length - 1].options.filter((option) => option.selected)
				.length > 0
		) {
			return (disabled = false);
		}
		return disabled;
	};

	const nextQuestion = () => {
		const newQuestions = cloneDeep(questions);
		const currentlyActive = newQuestions.filter((question) => question.active);

		const activeIndex = currentlyActive[0].id - 1;

		const nextIndex = activeIndex + 1;

		newQuestions[activeIndex] = { ...currentlyActive[0], active: false };

		newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };

		setQuestions(newQuestions);
	};
	const previousQuestion = () => {
		const newQuestions = cloneDeep(questions);
		const currentlyActive = newQuestions.filter((question) => question.active);

		const activeIndex = currentlyActive[0].id - 1;

		const nextIndex = activeIndex - 1;

		newQuestions[activeIndex] = { ...currentlyActive[0], active: false };

		newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };

		setQuestions(newQuestions);
	};

	const getPlatforms = () => {
		let newPlatforms = [];

		if (questions.length > 2) {
			questions
				.filter(
					(question) =>
						question.title === "Which platform do you need supported?"
				)
				.map((question) =>
					question.options.filter((option) => option.selected)
				)[0]
				.map((option) => newPlatforms.push(option.title));
			setPlatforms(newPlatforms);
		}
	};

	const getCustomFeatures = () => {
		if (questions.length > 2) {
			let newCustomFeatures = questions
				.filter(
					(question) =>
						question.title ===
						"What type of custom features do you expect to need?"
				)
				.map((question) =>
					question.options.filter((option) => option.selected)
				)[0][0].title;

			setCustomFeatures(newCustomFeatures);
		}
	};

	const getFeatures = () => {
		let newFeatures = [];

		if (questions.length > 2) {
			questions
				.filter(
					(question) =>
						question.title === "Which features do you expect to use?"
				)
				.map((question) => question.options.filter((option) => option.selected))
				.map((option) =>
					option.map((newFeature) => newFeatures.push(newFeature.title))
				);
			setFeatures(newFeatures);
		}
	};

	const navigationPreviousDisabled = () => {
		const currentlyActive = questions.filter((question) => question.active);
		if (currentlyActive[0].id === 1) {
			return true;
		} else return false;
	};

	const navigationNextDisabled = () => {
		const currentlyActive = questions.filter((question) => question.active);
		if (currentlyActive[0].id === questions[questions.length - 1].id) {
			return true;
		} else return false;
	};

	const handleSelect = (id) => {
		const newQuestions = cloneDeep(questions);
		const currentlyActive = newQuestions.filter((question) => question.active);

		const activeIndex = currentlyActive[0].id - 1;
		const newSelected = newQuestions[activeIndex].options[id - 1];

		const previousSelected = currentlyActive[0].options.filter(
			(option) => option.selected
		);

		switch (currentlyActive[0].subtitle) {
			case "Select one.":
				if (previousSelected[0]) {
					previousSelected[0].selected = !previousSelected[0].selected;
				}
				newSelected.selected = !newSelected.selected;
				break;
			default:
				newSelected.selected = !newSelected.selected;
				break;
		}

		switch (newSelected.title) {
			case "Custom Software Development":
				setQuestions(softwareQuestions);
				setService(newSelected.title);
				setPlatforms([]);
				setFeatures([]);
				setCustomFeatures("");
				setCategory("");
				setUsers("");
				break;
			case "iOS/Android Development":
				setQuestions(softwareQuestions);
				setService(newSelected.title);
				setPlatforms([]);
				setFeatures([]);
				setCustomFeatures("");
				setCategory("");
				setUsers("");
				break;
			case "Website Development":
				setQuestions(websiteQuestions);
				setService(newSelected.title);
				setPlatforms([]);
				setFeatures([]);
				setCustomFeatures("");
				setCategory("");
				setUsers("");
				break;
			default:
				setQuestions(newQuestions);
		}
	};
	const onChange = (event) => {
		let valid;
		switch (event.target.id) {
			case "email":
				setEmail(event.target.value);
				valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
					event.target.value
				);

				if (!valid) {
					setEmailHelper("Pls Enter a valid email");
				} else {
					setEmailHelper("");
				}
				break;
			case "phone":
				setPhone(event.target.value);
				valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
					event.target.value
				);
				if (!valid) {
					setPhoneHelper(" pls enter a valid phone number");
				} else {
					setPhoneHelper("");
				}
				break;
			default:
				break;
		}
	};

	const sendEstimate = () => {
		setLoading(true);
		axios
			.get("https://us-central1-amaben-tech.cloudfunctions.net/sendMail", {
				params: {
					name: name,
					email: email,
					phone: phone,
					message: message,
					total: total,
					category: category,
					service: service,
					platforms: platforms,
					features: features,
					customFeatures: customFeatures,
					users: users,
				},
			})
			.then((res) => {
				setLoading(false);
				setDialogOpen(false);
				setAlert({
					open: true,
					message: "Estimate Placed successfully!",
					backgroundColor: "#4BB543",
				});
			})

			.catch((error) => {
				setAlert({
					open: true,
					message: "Something went wrong, please try again!",
					backgroundColor: "#ff3232",
				});
			});
	};

	const getTotal = () => {
		let cost = 0;

		const selections = questions
			.map((question) => question.options.filter((option) => option.selected))
			.filter((question) => question.length > 0);

		selections.map((options) => options.map((option) => (cost += option.cost)));
		setTotal(cost);

		if (questions.length > 2) {
			const userCost = questions
				.filter(
					(question) => question.title === "How many users do you expect?"
				)
				.map((question) =>
					question.options.filter((option) => option.selected)
				)[0][0];

			setUsers(userCost.title);
			cost -= userCost.cost;
			cost *= userCost.cost;
		}
	};

	return (
		<Grid container direction="row">
			<Head>
				<title key="title">Custom Website Estimate | Amaben Technologies</title>
				<meta
					name="description"
					key="description"
					content="Use our free online estimate calculator to instantly check the cost of your custom website design and development project "
				/>
				<meta
					property="og:title"
					content="Bringing the Powerful React Technology to You | Free Estimate"
				/>
				<meta
					property="og:url"
					key="og:url"
					content="https://amabentechnologies.ng/estimate"
				/>
				<link
					rel="canonical"
					key="canonical"
					href="https://amabentechnologies.ng/estimate"
				/>
			</Head>
			<Grid
				item
				container
				direction="column"
				lg
				alignItems={matchesMD ? "center" : undefined}
			>
				<Grid item style={{ marginTop: "2.5em", marginLeft: "5em" }}>
					<Typography variant="h1"> Estimate</Typography>
				</Grid>
				<Grid
					item
					style={{
						marginRight: matchesMD ? 0 : "10em",
						maxWidth: "50em",
						marginTop: "7.5em",
					}}
				>
					<Lottie options={defaultOptions} height="100%" width="100%" />
				</Grid>
				<Hidden mdDown>
					<Grid
						item
						style={{
							marginRight: "10em",
							maxWidth: "50em",
							marginTop: "7.5em",
						}}
					>
						<Lottie options={defaultOptions} height="100%" width="100%" />
					</Grid>
				</Hidden>
			</Grid>

			<Grid
				item
				lg
				container
				direction="column"
				alignItems="center"
				md
				style={{ marginRight: matchesMD ? 0 : "2em", marginBottom: "25em" }}
			>
				{questions
					.filter((question) => question.active)
					.map((question, index) => (
						<React.Fragment>
							<Grid item>
								<Typography
									style={{
										fontWeight: 500,
										marginLeft: matchesSM ? "1em" : 0,
										marginRight: matchesSM ? "1em" : 0,
										marginBottom: "0.5em",
										marginTop: "1em",
										lineHeight: 1.25,
										fontSize: "2.25rem",
									}}
									variant="h1"
									align="center"
									gutterBottom
								>
									{question.title}
								</Typography>
								<Typography
									variant="body1"
									align="center"
									style={{
										marginBottom: "2.5em",
										color: theme.palette.common.orange,
									}}
									gutterBottom
								>
									{question.subtitle}
								</Typography>
							</Grid>
							{question.options.map((option, index) => (
								<Grid
									key={index}
									item
									container
									direction="column"
									md
									component={Button}
									onClick={() => handleSelect(option.id)}
									style={{
										marginBottom: matchesSM ? "1.5em" : 0,
										display: "grid",
										textTransform: "none",
										borderRadius: 0,
										backgroundColor: option.selected
											? theme.palette.common.orange
											: null,
									}}
								>
									<Grid item style={{ maxWidth: "14em" }}>
										<Typography
											variant="h6"
											align="center"
											style={{ marginBottom: "1em" }}
										>
											{option.title}
										</Typography>
										<Typography variant="caption" align="center">
											{option.subtitle}
										</Typography>
									</Grid>
									<Grid item>
										<img
											src="../assets/iphone.svg"
											className={classes.icon}
											alt={option.iconAlt}
										/>
									</Grid>
								</Grid>
							))}

							<Grid
								item
								container
								justify="space-between"
								style={{ width: "15em", marginTop: "3em", marginLeft: "1em" }}
							>
								<Grid item>
									<IconButton
										onClick={previousQuestion}
										disabled={navigationPreviousDisabled()}
									>
										<img
											src={
												navigationPreviousDisabled()
													? "../assets/backArrowDisabled.svg"
													: "../assets/backArrow.svg"
											}
											alt="previous"
										/>
									</IconButton>
								</Grid>
								<Grid item>
									<IconButton
										onClick={nextQuestion}
										disabled={navigationNextDisabled()}
									>
										<img
											src={
												navigationNextDisabled()
													? "../assets/forwardArrowDisabled.svg"
													: "../assets/forwardArrow.svg"
											}
											alt="next"
										/>
									</IconButton>
								</Grid>
							</Grid>
						</React.Fragment>
					))}

				<Grid item style={{ marginTop: "0.2em", marginLeft: "3em" }}>
					<Button
						disabled={estimateDisabled()}
						onClick={() => {
							setDialogOpen(true);
							getTotal();
							getPlatforms();
							getFeatures();
							getCustomFeatures();
						}}
						className={classes.estimateButton}
					>
						Get Estimate
					</Button>
				</Grid>
			</Grid>

			<Dialog
				open={dialogOpen}
				onClose={() => setDialogOpen(false)}
				fullWidth
				fullScreen={matchesSM}
				style={{ zIndex: 1302 }}
				maxWidth="lg"
			>
				<Grid container justify="center">
					<Grid
						item
						style={{
							marginTop: "1em",
							marginBottom: "1em",
							marginLeft: matchesMD ? 0 : "5em",
						}}
					>
						<Typography variant="h1" align={matchesMD ? "center" : undefined}>
							Estimate
						</Typography>
					</Grid>
				</Grid>
				<DialogContent>
					<Grid container>
						<Grid
							item
							container
							alignItems={matchesSM ? "center" : undefined}
							direction={matchesSM ? "column" : "row"}
							md={7}
							style={{ maxWidth: "20em", marginLeft: "3em", marginTop: "2em" }}
						>
							<Grid item style={{ marginBottom: "0.5em" }}>
								<TextField
									fullWidth
									label="Name"
									id="name"
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
							</Grid>
							<Grid item style={{ marginBottom: "0.5em" }}>
								<TextField
									label="Email"
									fullWidth
									error={emailHelper.length !== 0}
									id="email"
									helperText={emailHelper}
									value={email}
									onChange={onChange}
								/>
							</Grid>
							<Grid item style={{ marginBottom: "0.5em" }}>
								<TextField
									label="Phone No"
									fullWidth
									helperText={phoneHelper}
									error={phoneHelper.length !== 0}
									id="phone"
									value={phone}
									onChange={onChange}
								/>
							</Grid>
							<Grid
								item
								style={{
									maxWidth: matchesXS ? "100%" : "20em",
									marginBottom: "1em",
								}}
							>
								<TextField
									InputProps={{ disableUnderline: true }}
									className={classes.message}
									value={message}
									multiline
									placeholder="Tell us more about your project"
									fullWidth
									style={{ marginTop: "3em", marginBottom: "2em" }}
									rows={10}
									id="message"
									onChange={(e) => setMessage(e.target.value)}
								/>
							</Grid>
							<Grid item>
								<Typography
									style={{ lineHeight: 1.1 }}
									variant="body1"
									paragraph
									align={matchesSM ? "center" : undefined}
								>
									We can create this digital solution for an estimated{" "}
									<span className={classes.specialText}>
										{" "}
										${total.toFixed(2)}{" "}
									</span>
								</Typography>
								<Typography align={matchesSM ? "center" : undefined}>
									Fill out your name, phone number, and email, place your
									request, and we'll get back to you with details moving forward
									with a final price.
								</Typography>
							</Grid>
						</Grid>
						<Grid
							item
							container
							direction="column"
							md={5}
							style={{ maxWidth: "30em" }}
						>
							<Grid item>
								<Grid
									container
									director="column"
									style={{
										marginLeft: matchesSM ? "1em" : "15em",
										marginTop: "2em",
									}}
								>
									<Grid item container alignItems="center">
										<Grid item xs={2}>
											<img src="../assets/check.svg" alt="checkmark" />
										</Grid>
										<Grid item xs={10} style={{ marginBottom: "1.25em" }}>
											<Typography variant="body1">
												{" "}
												You want {service}{" "}
												{platforms.length > 0
													? `for ${
															//if only web application is selected...
															platforms.indexOf("Web Application") > -1 &&
															platforms.length === 1
																? //then finish sentence here
																  "a Web Application."
																: //otherwise, if web application and another platform is selected...
																platforms.indexOf("Web Application") > -1 &&
																  platforms.length === 2
																? //then finish the sentence here
																  `a Web Application and an ${platforms[1]}.`
																: //otherwise, if only one platform is selected which isn't web application...
																platforms.length === 1
																? //then finish the sentence here
																  `an ${platforms[0]}`
																: //otherwise, if other two options are selected...
																platforms.length === 2
																? //then finish the sentence here
																  "an iOS Application and an Android Application."
																: //otherwise if all three are selected...
																platforms.length === 3
																? //then finish the sentence here
																  "a Web Application, an iOS Application, and an Android Application."
																: null
													  }`
													: null}
											</Typography>
										</Grid>
									</Grid>
									<Grid item container alignItems="center">
										<Grid item xs={2}>
											<img src="../assets/check.svg" alt="checkmark" />
										</Grid>
										<Grid item xs={10} style={{ marginBottom: "1.25em" }}>
											<Typography variant="body1">
												{"with "}
												{/* if we have features... */}
												{features.length > 0
													? //...and there's only 1...
													  features.length === 1
														? //then end the sentence here
														  `${features[0]}.`
														: //otherwise, if there are two features...
														features.length === 2
														? //...then end the sentence here
														  `${features[0]} and ${features[1]}.`
														: //otherwise, if there are three or more features...
														  features
																//filter out the very last feature...
																.filter(
																	(feature, index) =>
																		index !== features.length - 1
																)
																//and for those features return their name...
																.map((feature, index) => (
																	<span key={index}>{`${feature}, `}</span>
																))
													: null}
												{features.length > 0 &&
												features.length !== 1 &&
												features.length !== 2
													? //...and then finally add the last feature with 'and' in front of it
													  ` and ${features[features.length - 1]}.`
													: null}
											</Typography>
										</Grid>
									</Grid>
									<Grid item container alignItems="center">
										<Grid item xs={2}>
											<img src="../assets/check.svg" alt="checkmark" />
										</Grid>
										<Grid item xs={10}>
											<Typography variant="body1">
												{customFeatures.toLowerCase()}{" "}
												{`, and the project would be used by about ${users} users.`}
											</Typography>
										</Grid>
										<Grid item>
											<Button
												disabled={
													name.length === 0 ||
													message.length === 0 ||
													phoneHelper.length !== 0 ||
													emailHelper.length !== 0
												}
												onClick={sendEstimate}
												variant="contained"
												className={classes.estimateButton}
											>
												{loading ? (
													<CircularProgress />
												) : (
													<React.Fragment>
														Place Request{" "}
														<img
															src="../assets/send.svg"
															alt="paper airline"
															style={{ marginLeft: "0.5em" }}
														/>
													</React.Fragment>
												)}
											</Button>
										</Grid>
										<Hidden mdUp>
											<Grid item style={{ marginLeft: "0.5em" }}>
												<Button
													variant="outlined"
													style={{ fontWeight: 300, color: "primary" }}
													onClick={() => setDialogOpen(false)}
													className={classes.estimateButton}
												>
													CANCEL
												</Button>
											</Grid>
										</Hidden>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</DialogContent>
			</Dialog>
			<Snackbar
				open={alert.open}
				message={alert.message}
				ContentProps={{ style: { backgroundColor: alert.backgroundColor } }}
				anchorOrigin={{ vertical: "top", horizontal: "center" }}
				onClose={() => setAlert({ ...alert, open: false })}
				autoHideDuration={4000}
			/>
		</Grid>
	);
}
