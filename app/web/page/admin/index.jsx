import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, StaticRouter } from 'react-router-dom';
import { create } from './store';
import Layout from '../../component/layout';
import Routes from './router';
import './index.css';

export default class Admin extends Component {
  state = {
    collapsed: false,
  };

  componentDidMount() {
    console.log('EASY_ENV_IS_NODE:' + EASY_ENV_IS_NODE);
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  onEnter = () => {
    console.log('>>test');
  };

  render() {
    if (EASY_ENV_IS_NODE) {
      const store = create(this.props);
      const url = store.getState().url;
      return (
        <Layout>
          <Provider store={store}>
            <StaticRouter location={url}>
              <Routes {...this.props} />
            </StaticRouter>
          </Provider>
        </Layout>
      );
    }
    const store = create(window.__INITIAL_STATE__);
    const url = store.getState().url;
    return (
      <Provider store={store}>
        <BrowserRouter location={url}>
          <Routes {...this.props} />
        </BrowserRouter>
      </Provider>
    );
  }
}
