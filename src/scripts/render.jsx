'use strict'

var React = require('react')

var Hello = require('./subfolder/hello')

React.renderComponent(<Hello />, document.getElementById('content'))