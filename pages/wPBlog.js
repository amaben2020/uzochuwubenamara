import React, { Component } from "react";
import axios from "axios";
import BlogList from "./blogList";

class Blog extends Component {
	state = {
		blog: [],
		isLoaded: false,
	};

	componentDidMount() {
		axios
			.get("http://localhost:8000/wp-json/wp/v2/blog")
			.then((res) =>
				this.setState({
					blog: res.data,
					isLoaded: true,
				})
			)
			.catch((err) => console.log(err));
	}

	render() {
		const { blog, isLoaded } = this.state;
		if (isLoaded) {
			return (
				<div>
					{blog.map((blog) => (
						<BlogList key={blog.id} blog={blog} />
					))}
				</div>
			);
		}
		return <h3>Please Wait....</h3>;
	}
}

export default Blog;
