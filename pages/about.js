import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Hidden from "@material-ui/core/Hidden";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CallToAction from "../src/UI/CallToAction";
import Head from "next/head";
const useStyles = makeStyles((theme) => ({
	missionStatement: {
		fontWeight: 300,
		fontStyle: "italic",
		fontSize: "1.5em",
		maxWidth: "50em",
		lineHeight: 1.4,
	},
	rowContainer: {
		paddingLeft: "5em",
		paddingRight: "5em",

		[theme.breakpoints.down("sm")]: {
			paddingLeft: "1.5em",
			paddingRight: "1.5em",
		},
		[theme.breakpoints.down("xs")]: {
			paddingLeft: "1em",
			paddingRight: "1em",
		},
	},
	avatar: {
		height: "25em",
		width: "25em",
		[theme.breakpoints.down("sm")]: {
			maxWidth: 300,
			maxHeight: 300,
		},
	},
}));

export default function About(props) {
	const classes = useStyles();
	const theme = useTheme();
	const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

	return (
		<Grid container direction="column">
			<Head>
				<title key="title">
					About Us - History & Team | Uzochukwu Amara Benneth
				</title>
				<meta
					name="description"
					key="description"
					content="We provide the fastest most modern, affordable, and aesthetic Website design and services in Nigeria. Contact us now for a free estimate!"
				/>
				<meta
					property="og:title"
					content="Bringing the Powerful React Technology to You | About Us"
				/>
				<meta
					property="og:url"
					key="og:url"
					content="https://amabentechnologies.ng/about"
				/>
				<link
					key="og:url"
					rel="canonical"
					key="canonical"
					href="https://amabentechnologies.ng/about"
				/>
			</Head>
			<Grid
				direction={matchesMD ? "column" : "row"}
				item
				align={matchesMD ? "center" : undefined}
				container
				style={{ marginTop: matchesMD ? "1em" : "2em" }}
				className={classes.rowContainer}
			>
				<Typography
					variant="h1"
					style={{ marginLeft: matchesMD ? undefined : "1.2em" }}
					align={matchesMD ? "center" : undefined}
				>
					About Me
				</Typography>
			</Grid>
			<Grid
				item
				align="center"
				justify="center"
				className={classes.rowContainer}
			>
				<Typography
					style={{ marginTop: "2em" }}
					variant="h4"
					align="center"
					className={classes.missionStatement}
				>
					To keep it simple, i am crazy about technology. Technology especially
					web technology has revolutionalized the way people interact, trade and
					share information. Technology is meant to bring humans closer to what
					we care about in the best way possible with ground-breaking results
					alongside it. I would utilize this principle to provide fast, modern,
					responsive, inexpensive, and aesthetic website solutions to Nigerians
					and beyond.
				</Typography>
			</Grid>
			<Grid
				item
				style={{ marginTop: "10em", marginBottom: "10em" }}
				container
				className={classes.rowContainer}
				justify="space-around"
			>
				<Grid>
					<Grid
						item
						alignItems={matchesMD ? "center" : undefined}
						container
						direction={matchesMD ? "column" : "row"}
						lg
						style={{ maxWidth: "35em" }}
					>
						<Grid item>
							<Typography
								align={matchesMD ? "center" : undefined}
								variant="h1"
								gutterBottom
							>
								History
							</Typography>
						</Grid>
						<Typography
							variant="body1"
							paragraph
							style={{
								fontWeight: 700,
								marginLeft: matchesMD ? undefined : "-6.2em",
								fontStyle: "italic",
								marginTop: matchesMD ? undefined : "3em",
							}}
						>
							{" "}
							Front End Developer (React.js)
						</Typography>
						<Typography
							variant="body1"
							align={matchesMD ? "center" : undefined}
							paragraph
						>
							I taught myself basic coding from a book called Eloquent
							Javascript, a byte of python and numerous online resources and
							videos (Udemy, Youtube) and i've been hooked ever since. My
							passion has solely been set on learning — learning about
							computers, web technologies, Algorithms, learning
							mathematics/statistics and machine learning, Geographic
							Information System & Remote Sensing (Geospatial Modelling, LST
							Analysis) studying design, always just learning.
						</Typography>
						<Typography
							align={matchesMD ? "center" : undefined}
							variant="body1"
							paragraph
						>
							It all started with one simple question: How do web developers
							feel whenever they put a product on the web? I wanted to
							experience this feeling of accomplishment which made me further
							enmesh myself in the beautiful/frustrating/rewarding/wonderful
							world of programming (web development).
						</Typography>
						<Typography
							align={matchesMD ? "center" : undefined}
							variant="body1"
							paragraph
						>
							With countless hours of practice and dedication to learning web
							development, i feel highly motivated to transfer my knowledge to a
							growth and innovation driven company where i can utilize my
							existing knowledge and also grow as a developer.
						</Typography>
						<Typography
							align={matchesMD ? "center" : undefined}
							variant="body1"
							paragraph
						></Typography>
					</Grid>{" "}
				</Grid>
				<Grid>
					<Grid item container lg justify="center">
						<img
							src="../../assets/history.svg"
							style={{ maxHeight: matchesMD ? 200 : "22em" }}
							alt="Quill pen on top of book"
						/>
					</Grid>
				</Grid>{" "}
			</Grid>
			<Grid
				item
				justify={matchesMD ? "center" : undefined}
				container
				direction="column"
				className={classes.rowContainer}
				alignItems="center"
			>
				<Grid item>
					<Typography variant="h4" gutterBottom align="center">
						The Developer
					</Typography>
				</Grid>
				<Grid item>
					<Typography variant="body1" paragraph align="center">
						Uzochukwu, Amara Benneth (mnca, mgeoson). Founder.
					</Typography>
					<Typography variant="body1" align="center">
						He is an expert in Geographic Information System and possesses a
						masters degree in GIS. He is passionate about <br /> coding, solving
						algorithms and the web-technology imbroglio.
					</Typography>
				</Grid>
				<Grid item>
					<Avatar
						alt="founder"
						src="../assets/profilee.jpg"
						className={classes.avatar}
					/>
				</Grid>
				<Hidden lgUp>
					<Grid item lg style={{ maxWidth: "45em", padding: "1.25em" }}>
						<Typography>
							Skilled and motivated front-end developer with 3+ years of
							experience. Created 50+ websites. Proficient in HTML, CSS,
							JavaScript (React). Self taught developer and fast learner that
							sees technology as a tool.
						</Typography>{" "}
						<Typography>
							Now I’m ready to apply everything I’ve learned, and to help
							organizations/ businesses achieve their goal with the intuition I
							have developed overtime.
						</Typography>
					</Grid>
				</Hidden>
				<Grid item container style={{ marginBottom: "15em" }}>
					<Grid
						item
						container
						direction="column"
						style={{ marginBottom: matchesMD ? "2.5em" : 0 }}
						lg
						alignItems={matchesMD ? "center" : undefined}
					>
						<Grid item>
							<img
								src="../assets/Traversty.jpg"
								alt="founder"
								style={{
									maxWidth: matchesMD ? 300 : undefined,
									width: "24em",
									height: "18em",
									borderRadius: "9.5em",
								}}
							/>
						</Grid>
						<Grid item>
							<Typography variant="caption">Mentor : Brad Traversty</Typography>
						</Grid>
					</Grid>
					<Hidden mdDown>
						<Grid item lg style={{ maxWidth: "45em", padding: "1.25em" }}>
							<Typography>
								Skilled and motivated front-end developer with 3+ years of
								experience. Created 50+ websites. Proficient in HTML, CSS,
								JavaScript (React). Self taught developer and fast learner that
								sees technology as a tool.
							</Typography>{" "}
							<Typography>
								Now I’m ready to apply everything I’ve learned, and to help
								organizations/ businesses achieve their goal with the intuition
								I have developed overtime.
							</Typography>
						</Grid>
					</Hidden>
					<Grid
						item
						container
						direction="column"
						lg
						alignItems={matchesMD ? "center" : "flex-end"}
					>
						<Grid item>
							<img
								src="../assets/max.png"
								alt="grey puppy"
								style={{ maxWidth: matchesMD ? 300 : undefined }}
							/>
						</Grid>
						<Grid item>
							<Typography variant="caption">
								Mentor: Maximillian Schwarzmueller
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Grid item>
				<CallToAction setValue={props.setValue} />
			</Grid>
		</Grid>
	);
}
