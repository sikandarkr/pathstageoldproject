import App,{Container} from "next/app";
import { Provider } from "react-redux";
import React from "react";
import withRedux from "next-redux-wrapper";
import store from "../redux/store";
import Navbar from '../components/Navbar/Navar'
// import "../static/css/style.scss";
import "../style.less";
class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    //Anything returned here can be accessed by the client
    return { pageProps: pageProps };
  }

  render() {
    //pageProps that were returned  from 'getInitialProps' are stored in the props i.e. pageprops
    const { Component, pageProps, store } = this.props;

    return (
      <Provider store={store}>
        {/* <MainLayout> */}
            <Navbar   {...this.props}/>
            <Component pageContext={this.pageContext} {...pageProps}/>
        {/* </MainLayout> */}
      </Provider>
    );
  }
}

//makeStore function that returns a new store for every request
const makeStore = () => store;

//withRedux wrapper that passes the store to the App Component
export default withRedux(makeStore)(MyApp);
