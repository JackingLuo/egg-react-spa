import React, { Component } from 'react';
export default class Layout extends Component {
  render() {
    if (EASY_ENV_IS_NODE) {
      return (
        <html>
          <head>
            <title>{this.props.title}</title>
            <meta charSet="utf-8" />
            <meta
              name="viewport"
              content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui"
            />
            <meta name="keywords" content={this.props.keywords} />
            <meta name="description" content={this.props.description} />
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          </head>
          <body>
            <h1>服务端渲染</h1>
            <div id="app">{this.props.children}</div>
          </body>
        </html>
      );
    }
    return this.props.children;
  }
}
