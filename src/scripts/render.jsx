"use strict"

import React from "react";
import Hello from "./subfolder/hello";

var rootInstance = React.render(<Hello />, document.getElementById("content"));

if (module.hot) {
	require("react-hot-loader/Injection").RootInstanceProvider.injectProvider({
		getRootInstances: function () {
			// Help React Hot Loader figure out the root component instances on the page:
			return [rootInstance];
		}
	});
}