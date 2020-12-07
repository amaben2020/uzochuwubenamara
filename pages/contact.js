import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Link from "../src/Link";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import ButtonArrow from "../src/UI/ButtonArrow";
import { useMediaQuery } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import axios from "axios";
import DialogContent from "@material-ui/core/DialogContent";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "@material-ui/core/Snackbar";
import Head from "next/head";

const useStyles = makeStyles((theme) => ({
	background: {
		backgroundImage: `url("../assets/blue.jpg")`,
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		height: "60em",
		paddingBottom: "10em",
		[theme.breakpoints.down("md")]: {
			backgroundImage: `url("../assets/blue_mobile.jpg")`,
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
		[theme.breakpoints.down("md")]: {
			marginLeft: 0,
			marginRight: 0,
		},
	},
	learnButton: {
		...theme.typography.learnButton,
		fontSize: "0.7rem",
		height: 35,
		padding: 5,
		color: "#082f9c",
		[theme.breakpoints.down("md")]: {
			marginBottom: "2em",
			marginLeft: "14.95em",
		},
	},
	message: {
		border: `2px solid ${theme.palette.common.blue}`,
		marginTop: "5em",
		borderRadius: 5,
	},
	sendButton: {
		...theme.typography.estimate,
		fontSize: "1rem",
		borderRadius: 50,
		backgroundColor: theme.palette.common.orange,
		height: 45,
		width: "245",
		"&:hover": {
			backgroundColor: theme.palette.secondary.light,
		},
		[theme.breakpoints.down("sm")]: {
			height: 40,
			width: 225,
		},
	},
}));

export default function Contact(props) {
	const classes = useStyles();
	const theme = useTheme();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [message, setMessage] = useState("");
	const [open, setOpen] = useState(false);
	const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
	const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
	const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
	const [emailHelper, setEmailHelper] = useState("");
	const [phoneHelper, setPhoneHelper] = useState("");
	const [loading, setLoading] = useState(false);
	const [alert, setAlert] = useState({
		open: false,
		message: "",
		backgroundColor: "",
	});

	const buttonContents = (
		<React.Fragment>
			Send Message
			<img
				src="../assets/send.svg"
				style={{ marginLeft: "1em" }}
				alt="paper airplane"
			/>
		</React.Fragment>
	);

	const onConfirm = () => {
		setLoading(true);
		axios
			.get("https://us-central1-amaben-tech.cloudfunctions.net/sendMail", {
				params: {
					name: name,
					email: email,
					phone: phone,
					message: message,
				},
			})
			.then((res) => {
				setLoading(false);
				setOpen(false);
				setName("");
				setPhone("");
				setMessage("");
				setAlert({
					open: true,
					message: "Message sent successfully!",
					backgroundColor: "#4BB543",
				});
			})
			.catch((err) => {
				setLoading(false);
				setAlert({
					open: true,
					message: "Something went wrong, please try again!",
					backgroundColor: "#ff3232",
				});
			});
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

	return (
		<Grid container direction="row">
			<Head>
				<title key="title">Contact | Uzochukwu Amara Benneth</title>
				<meta
					name="description"
					key="description"
					content="Reach out to us today for your custom website development, computer programming training. Send us an email today!"
				/>
				<meta
					property="og:title"
					content="Bringing the Powerful React Technology to You | Contact Us"
				/>
				<meta
					property="og:url"
					key="og:url"
					content="https://amabentechnologies.ng/contact"
				/>
				<link
					rel="canonical"
					key="canonical"
					href="https://amabentechnologies.ng/contact"
				/>
			</Head>
			<Grid
				item
				container
				direction="column"
				lg={4}
				h1
				xl={3}
				style={{
					marginTop: matchesSM ? "1em" : matchesMD ? "5em" : 0,
					marginBottom: matchesMD ? "5em" : 0,
				}}
				justify="center"
				alignItems="center"
			>
				<Grid item>
					<Grid container direction="column">
						<Grid item>
							<Typography
								variant="h1"
								style={{ lineHeight: 1 }}
								align={matchesMD ? "center" : undefined}
							>
								Contact
							</Typography>
							<Typography
								variant="body1"
								align={matchesMD ? "center" : undefined}
								style={{ color: theme.palette.common.blue }}
							>
								Get in Touch ........
							</Typography>
						</Grid>
						<Grid item container style={{ marginTop: "2em" }}>
							<Grid item>
								<img
									src="../assets/phone.svg"
									alt="phone"
									style={{ marginRight: "0.5em" }}
								/>
							</Grid>
							<Grid item>
								<Typography
									variant="body1"
									style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
								>
									<a
										style={{ textDecoration: "none", color: "inherit" }}
										href="tel:07037413090"
									>
										(+234) 703 - 741 - 3090{" "}
									</a>
								</Typography>
							</Grid>
						</Grid>
						<Grid item container style={{ marginBottom: "2em" }}>
							<Grid item>
								<img
									src="../assets/email.svg"
									alt="email"
									style={{ marginRight: "0.5em", verticalAlign: "bottom" }}
								/>
							</Grid>

							<Grid item>
								<Typography
									variant="body1"
									style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
								>
									<a
										style={{ textDecoration: "none", color: "inherit" }}
										href="mailto:uzochukwubenamara@gmail.com"
									>
										uzochukwubenamara@gmail.com{" "}
									</a>
								</Typography>
							</Grid>
						</Grid>
						<Grid
							item
							container
							style={{ maxWidth: "20em" }}
							direction="column"
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
						</Grid>
						<Grid item style={{ maxWidth: matchesXS ? "100%" : "20em" }}>
							<TextField
								InputProps={{ disableUnderline: true }}
								className={classes.message}
								value={message}
								multiline
								fullWidth
								rows={10}
								id="message"
								onChange={(e) => setMessage(e.target.value)}
							/>
						</Grid>
						<Grid item container justify="center" style={{ marginTop: "2em" }}>
							<Button
								variant="contained"
								onClick={() => setOpen(true)}
								className={classes.sendButton}
								disabled={
									name.length === 0 ||
									message.length === 0 ||
									phoneHelper.length !== 0 ||
									emailHelper.length !== 0
								}
							>
								{buttonContents}
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Dialog
				fullScreen={matchesSM}
				style={{ zIndex: 1302 }}
				open={open}
				onClose={() => setOpen(false)}
				PaperProps={{
					style: {
						paddingTop: matchesXS ? "1em" : "5em",
						paddingBottom: matchesXS ? "1em" : "5em",
						paddingLeft: matchesXS
							? 0
							: matchesSM
							? "5em"
							: matchesMD
							? "15em"
							: "25em",
						paddingRight: matchesXS
							? 0
							: matchesSM
							? "5em"
							: matchesMD
							? "15em"
							: "25em",
					},
				}}
			>
				<DialogContent>
					<Grid container direction="column">
						<Grid item>
							<Typography align="center" variant="h4" gutterBottom>
								{" "}
								Confirm Message
							</Typography>
						</Grid>

						<Grid
							item
							container
							style={{ maxWidth: "20em" }}
							direction="column"
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
							<Grid item style={{ width: matchesSM ? "100%" : "20em" }}>
								<TextField
									InputProps={{ disableUnderline: true }}
									className={classes.message}
									value={message}
									multiline
									fullWidth
									rows={10}
									id="message"
									onChange={(e) => setMessage(e.target.value)}
								/>
							</Grid>
						</Grid>
					</Grid>{" "}
					<Grid
						direction={matchesSM ? "column" : "row"}
						item
						container
						style={{ marginTop: "2em" }}
						alignItems={"center"}
					>
						<Grid item>
							<Button
								style={{ fontWeight: 300 }}
								onClick={() => setOpen(false)}
								color="primary"
							>
								Cancel
							</Button>
						</Grid>
						<Grid item>
							<Button
								onClick={onConfirm}
								variant="contained"
								className={classes.sendButton}
								disabled={
									name.length === 0 ||
									message.length === 0 ||
									phoneHelper.length !== 0 ||
									emailHelper.length !== 0
								}
							>
								{loading ? <CircularProgress size={30} /> : buttonContents}
							</Button>
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

			<Grid
				item
				container
				alignItems="center"
				lg={8}
				justify="center"
				xl={9}
				h1
				direction={matchesMD ? "column" : "row"}
				className={classes.background}
			>
				<Grid
					item
					style={{
						marginLeft: matchesMD ? 0 : "3em",
						textAlign: matchesMD ? "center" : "inherit",
					}}
				>
					<Grid container direction="column">
						<Grid item>
							<Typography
								style={{ color: "#082f9c" }}
								variant="h1"
								align={matchesMD ? "center" : undefined}
							>
								Get In Touch With The <br /> Developer
							</Typography>
							<Typography
								align={matchesMD ? "center" : undefined}
								variant="subtitle2"
								style={{ fontSize: "1.5rem", color: "white" }}
							>
								Chat about your upcoming projects and plans <br />
								Get In Touch Today!
							</Typography>
							<Grid item container>
								<Button
									onClick={() => props.setValue(2)}
									component={Link}
									href="/theRevolution"
									variant="outlined"
									style={{ marginTop: "20px" }}
									className={classes.learnButton}
								>
									<span style={{ marginRight: 5 }}> Learn More</span>
									<ButtonArrow
										height={10}
										width={10}
										fill={theme.palette.common.blue}
									/>
								</Button>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Grid item>
					<Button
						onClick={() => props.setValue(6)}
						component={Link}
						href="/estimate"
						variant="contained"
						className={classes.estimateBtn}
					>
						Free Estimate
					</Button>
				</Grid>
			</Grid>
		</Grid>
	);
}
