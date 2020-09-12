import React, { Component } from "react";
import Router, { withRouter } from "next/router";
import { authInitialProps } from "../lib/auth";
import {
  Row,
  Col,
  Divider,
  Layout,
  Typography,
  Button,
  Menu,
  Form,
  Collapse,
  Select,
} from "antd";
import TitleInput from "../components/Common/Input/TitleInput";
import FileInput from "../components/Common/Input/FileInput";

import {
  CameraOutlined,
  FilterOutlined,
  PlusOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import ReactCrop from "react-image-crop";
// import 'react-image-crop/dist/ReactCrop.css';

// import '../../node_modules/react-image-crop/dist/ReactCrop.css';

// import '../../exampl/node_modules/react-image-crop/dist/ReactCrop.css';
const { Panel } = Collapse;
const { Option } = Select;

function callback(key) {
  console.log(key);
}
const imageMaxSize = 1000000000; // bytes
const acceptedFileTypes =
  "image/x-png, image/png, image/jpg, image/jpeg, image/gif";
const acceptedFileTypesArray = acceptedFileTypes.split(",").map((item) => {
  return item.trim();
});
class CreateBlog extends Component {
  state = {
    expandIconPosition: "right",
    imgSrc: null,
    imgSrcExt: null,
    crop: {
      aspect: 1 / 1,
    },
  };

  render() {
    const { expandIconPosition, col, row, file, crop, imgSrc } = this.state;
    return (
      <main className="mt-10">
        <Row
          type="flex"
          justify="center"
          align="middle"
          style={{ overflow: "hidden" }}
        >
          <div className="blog-form">
            <h2>Create your Blog</h2>
            <form>
              <div className="form-group">
                <TitleInput
                  type="text"
                  text="Blog Title"
                  name="title"
                  style="blog-title"
                  containerStyle="input-container"
                />
              </div>
              <br />
              <Collapse
                defaultActiveKey={["1"]}
                onChange={callback}
                expandIconPosition={expandIconPosition}
              >
                <Panel header="Add Blog Description and Image here" key="1">
                  <div className="form-group">
                    <TitleInput
                      textarea={true}
                      text="Description"
                      col={col}
                      row={row}
                      name="title"
                      style="blog-description"
                      containerStyle="description-container"
                      onEnterPress={this.onEnterPress}
                    />
                  </div>
                  <FileInput onFileChange={this.onFileChange} />
                </Panel>
              </Collapse>
              <br />
              <div className="form-group add-more-btn">
                <Button
                  type="dashed"
                  // onClick={() => {
                  //     add();
                  // }}
                  style={{ width: "100%" }}
                >
                  <PlusOutlined /> Add More Description
                </Button>
              </div>
            </form>
          </div>
        </Row>
      </main>
    );
  }
}
CreateBlog.getInitialProps = authInitialProps();

export default withRouter(CreateBlog);
