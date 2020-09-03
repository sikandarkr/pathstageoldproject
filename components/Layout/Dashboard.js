import React, { Component } from "react";
import { Breadcrumb, Icon, Row, Col, Layout, Card, Carousel, Input, Button, Divider } from "antd";
import { fetchProfiles } from "../../redux/actions/dashboardAction";
import { connect } from "react-redux";
// import "../../static/css/style.scss";
class Dashboard extends Component {
  state = {
    isModal: false,
    list: [
      {
        name: "The most beautifull lady",
        surname:
          "Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac",
        profile: "https://travelandleisureindia.in/wp-content/uploads/2019/09/kiara-feature-2.jpg",
      },
      {
        name: "Hot Kiyara",
        surname:
          "Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac",
        profile: "https://travelandleisureindia.in/wp-content/uploads/2019/09/kiara-feature-2.jpg",
      },
      {
        name: "your favorite actress",
        surname:
          "Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac",
        profile: "https://travelandleisureindia.in/wp-content/uploads/2019/09/kiara-feature-2.jpg",
      },
      {
        name: "do you know this lady",
        surname:
          "Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac",
        profile: "https://travelandleisureindia.in/wp-content/uploads/2019/09/kiara-feature-2.jpg",
      },
      {
        name: "gorgeous lady",
        surname:
          "Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac",
        profile: "https://travelandleisureindia.in/wp-content/uploads/2019/09/kiara-feature-2.jpg",
      },
      {
        name: "sexy kiayara",
        surname:
          "Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac",
        profile: "https://travelandleisureindia.in/wp-content/uploads/2019/09/kiara-feature-2.jpg",
      },
    ],
  };

  componentDidMount() {
    this.props.fetchProfiles();
  }
  showModal = () => {
    console.log("works");
    this.setState({ isModal: true });
  };
  clickHandler = () => {
    console.log("working.........");
  };
  changeHandler = (e) => {
    if (e.target.value.split(" ")) {
      console.log(e.target.value);
    }
  };

  render() {
    const { users } = this.props;
    const { isModal, list } = this.state;
    return (
      <div>
        <Row>
          <Col span={14}>
          </Col>
        </Row>
        {isModal ? <PreviewModel /> : null}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    users: state.profiles,
  };
};
function mapDispatchToProps(dispatch) {
  return {
    fetchProfiles: (data) => {
      dispatch(fetchProfiles(data));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
