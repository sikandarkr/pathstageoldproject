import React, { Component } from "react";
import { Breadcrumb, Icon, Row, Col, Layout, Card, Carousel, Button, Divider } from "antd";
// import { fetchProfiles } from "../../redux/actions/dashboardAction";
import { connect } from "react-redux";
import Input from "./Input";
import ReactCrop, { makeAspectCrop } from "react-image-crop";
// import "react-image-crop/dist/ReactCrop.css";
class PreviewModel extends Component {
  state = {
    file: null,
    src: null,
    crop: {
      x: 10,
      y: 10,
      width: 80,
      height: 80,
    },
  };
  handleChange = (e) => {
    // if (e.target.files && e.target.files.length > 0) {
    //   const reader = new FileReader();
    //   reader.addEventListener(
    //     "load",
    //     () =>
    //       this.setState({
    //         src: reader.result,
    //       }),
    //     false
    //   );
    //   reader.readAsDataURL(e.target.files[0]);
    // }
    this.setState({
      file: URL.createObjectURL(event.target.files[0]),
    });
  };
  onImageLoaded = (image) => {
    console.log("onCropComplete", image);
  };

  onCropComplete = (crop) => {
    console.log("onCropComplete", crop);
  };

  onCropChange = (crop) => {
    this.setState({ crop });
  };
  render() {
    const { closeModal } = this.props;
    return (
      <Layout className="preview_modal">
        <div className="header">
          <h3>Adjust your profile picture</h3>
          <p>
            <span className="modal-close" onClick={closeModal}>
              X
            </span>
          </p>
        </div>
        <hr className="line"></hr>
        <div className="modal-body">
          {this.state.file ? "" : <input type="file" onChange={this.handleChange} className="profile-file-chooser" />}
          {this.state.file ? <img src={this.state.file} className="upload-image" /> : ""}
        </div>
        <hr className="line"></hr>

        <p className="upload-btn">upload</p>
      </Layout>
    );
  }
}

export default PreviewModel;
