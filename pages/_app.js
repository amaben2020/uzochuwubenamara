import React, { useState } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import Theme from "../src/UI/Theme";
import Header from "../src/UI/Header";
import Footer from "../src/UI/Footer";
import Font from "../src/UI/Fonts";

export default function MyApp(props) {
	const { Component, pageProps } = props;
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [value, setValue] = useState(0);

	React.useEffect(() => {
		Font();
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);

	return (
		<React.Fragment>
			<Head>
				<title>My page</title>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
				<link rel="shortcut icon" href="../assets/favicon.png" />
			</Head>
			<ThemeProvider theme={Theme}>
				<Header
					value={value}
					setValue={setValue}
					selectedIndex={selectedIndex}
					setSelectedIndex={setSelectedIndex}
				/>
				<Component
					{...pageProps}
					setValue={setValue}
					setSelectedIndex={setSelectedIndex}
				/>
				<Footer setValue={setValue} setSelectedIndex={setSelectedIndex} />
			</ThemeProvider>
		</React.Fragment>
	);
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.object.isRequired,
};
