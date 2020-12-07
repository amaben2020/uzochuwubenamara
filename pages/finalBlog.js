import React, { Component, Fragment } from "react";
import Link from "../src/Link";
import BlogPage from "./blogPage";
import Blog from "./wPBlog";

class FinalBlog extends Component {
	render() {
		return (
			<div className="App">
				<Fragment>
					<Link exact href="/" component={Blog} />
					<Link exact href="/blogPage/:id" component={BlogPage} />
				</Fragment>
			</div>
		);
	}
}

export default FinalBlog;
