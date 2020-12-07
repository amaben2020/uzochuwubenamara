import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
const arcGrey = "#868686";

export default createMuiTheme({
	palette: {
		common: {
			blue: `${arcBlue}`,
			orange: `${arcOrange}`,
		},
		primary: {
			main: `${arcBlue}`,
		},
		secondary: {
			main: `${arcOrange}`,
		},
	}, //this closes the palette option for typography and enables font-size change
	typography: {
		tab: {
			fontFamily: "Raleway",
			textTransform: "none",
			fontWeight: 700,
			fontSize: "1rem",
		},
		estimate: {
			fontFamily: "Pacifico",
			fontSize: "1rem",
			textTransform: "none",
			color: "white",
		},
		h1: {
			fontFamily: "Raleway",
			fontWeight: 700,
			fontSize: "2.5rem",
			color: `${arcBlue}`,
			lineHeight: 1.5,
		},
		h6: {
			fontWeight: 500,
			fontFamily: "Raleway",
			color: arcBlue,
			lineHeight: 1,
		},

		body1: {
			fontSize: "1.25em",
			color: arcGrey,
			fontWeight: 300,
		},
		caption: {
			fontSize: "1rem",
			fontWeight: 300,
			color: arcGrey,
		},
		h3: {
			fontFamily: "Pacificon",
			color: arcBlue,
			fontSize: "2.5rem",
		},
		h4: {
			fontFamily: "Raleway",
			fontWeight: 700,
			fontSize: "1.75rem",
			color: arcBlue,
		},
		subtitle1: {
			fontSize: "1.25rem",
			fontWeight: "300",
			color: arcGrey,
		},
		learnButton: {
			borderColor: arcBlue,
			borderWidth: 2,
			color: arcBlue,
			textTransform: "none",
			borderRadius: 50,
			fontFamily: "Roboto",
			fontWeight: "bold",
		},
	},
	overrides: {
		MuiInputLabel: {
			root: {
				color: arcBlue,
				fontSize: "1rem",
			},
		},
		MuiInput: {
			root: {
				color: arcGrey,
				fontWeight: 300,
			},
			underline: {
				"&:before": {
					borderBottom: `2px solid ${arcBlue}`,
				},
				"&:hover:not($disabled):not($focused):not($error):before": {
					borderBottom: `2px solid ${arcBlue}`,
				},
			},
		},
	},
});
