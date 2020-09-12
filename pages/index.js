import React from "react";
import { connect } from "react-redux";
import {
  decrementCounter,
  incrementCounter,
} from "../redux/actions/counterActions";
import Login from "../components/Layout/Login";
import BlogFilter from "../components/Common/filter/BlogFilter";
import Navbar from "../components/Navbar/Navar";
import Router from "next/router";
import PostFeed from "../components/index/PostFeed";
import SearchInput from "../components/Common/Input/SearchInput";
import Link from "next/link";
import { Row, Col, Divider, Layout, Typography, Button, Menu } from "antd";
import {
  SearchOutlined,
  ReadOutlined,
  FormOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { authInitialProps } from "../lib/auth";
const { Title, Paragraph } = Typography;
class Index extends React.Component {
  static getInitialProps({ store }) {}
  constructor(props) {
    super(props);
  }

  state = {
    searchKey: "",
  };

  changeHandler = (e) => {
    console.log("hiiiii", e.target.value);
    this.setState({
      searchKey: e.target.value,
    });
  };

  render() {
    const { auth } = this.props;
    const { searchKey } = this.state;
    return (
      <main className="index">
        {auth.user && auth.user._id ? (
          <Layout>
            <Row gutter={16}>
              <Col
                className="gutter-row"
                span={8}
                xs={24}
                sm={24}
                md={8}
                lg={8}
                xl={8}
              >
                <BlogFilter />
              </Col>
              <Col
                className="gutter-row"
                span={16}
                span={16}
                xs={24}
                sm={24}
                md={12}
                lg={16}
                xl={16}
              >
                <SearchInput
                  value={searchKey}
                  id="blog-search"
                  placeholderText="Your Search tag"
                  changeHandler={this.changeHandler}
                />
              </Col>
            </Row>
          </Layout>
        ) : (
          <Layout>
            <Row>
              <Col
                className="gutter-row"
                xs={24}
                sm={24}
                md={12}
                lg={12}
                xl={12}
              >
                <div>
                  <img
                    src="/static/images/poster.png"
                    height="500px"
                    width="500px"
                  />
                </div>
              </Col>
              <Col
                className="gutter-row"
                xs={24}
                sm={24}
                md={12}
                lg={12}
                xl={12}
              >
                <Layout>
                  <Title className="landing-title">
                    A Better Social Network
                  </Title>
                  <Paragraph className="landing-desc">
                    Adityanath also presented data to and compared the Covid-19
                    situation in Uttar Pradesh with that of Delhi. He
                    highlighted that the fatality rate in Uttar Pradesh is much
                    lower than Delhi.The AAP leader’s tweet came a day after
                    Adityanath launched a scathing attack at him in his address
                    in state Assembly. Without naming Singh, the chief minister
                    said, “Some ‘namoonas’ come here and ask us what we have
                    done for the people of the state? They want to talk about
                    the situation in UP, but steer clear of talking about the
                    condition of Delhi.” Adityanath also presented data to and
                    compared the Covid-19 situation in Uttar Pradesh with that
                    of Delhi. He highlighted that the fatality rate in Uttar
                    Pradesh is much lower than Delhi.The AAP leader’s tweet came
                    a day after Adityanath launched a scathing attack at him in
                    his address in state Assembly. Without naming Singh, the
                    chief minister said, “Some ‘namoonas’ come here and ask us
                    what we have done for the people of the state? They want to
                    talk about the situation in UP, but steer clear of talking
                    about the condition of Delhi.”
                  </Paragraph>
                  <Button
                    type="primary"
                    className="get-start"
                    onClick={() => Router.push("/signup")}
                  >
                    Get Started
                  </Button>
                </Layout>
              </Col>
            </Row>
          </Layout>
        )}
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.value,
});

const mapDispatchToProps = {
  incrementCounter: incrementCounter,
  decrementCounter: decrementCounter,
};
Index.getInitialProps = authInitialProps();

export default connect(mapStateToProps, mapDispatchToProps)(Index);
