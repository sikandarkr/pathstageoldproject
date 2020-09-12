import React, { Component } from "react";
import {
  Row,
  Col,
  Divider,
  Layout,
  Typography,
  Button,
  Menu,
  Form,
} from "antd";
import { CameraOutlined, FilterOutlined } from "@ant-design/icons";
import Dropzone from "react-dropzone";
import ReactCrop from "react-image-crop";
import {
  base64StringtoFile,
  downloadBase64File,
  extractImageFileExtensionFromBase64,
  image64toCanvasRef,
} from "../../../utils/ResuableUtils";
const imageMaxSize = 1000000000; // bytes
const acceptedFileTypes =
  "image/x-png, image/png, image/jpg, image/jpeg, image/gif";
const acceptedFileTypesArray = acceptedFileTypes.split(",").map((item) => {
  return item.trim();
});
class FileInput extends Component {
  constructor(props) {
    super(props);
    this.imagePreviewCanvasRef = React.createRef();
    this.fileInputRef = React.createRef();
  }
  state = {
    expandIconPosition: "right",
    imgSrc: null,
    imgSrcExt: null,
    crop: {
      aspect: 1 / 1,
    },
    imageObj: null,
    imageUrl: null,
  };

  onFileChange = (e) => {
    const files = e.target.files;
    // const formData = new FormData();
    // formData.append("file", files[0]);
    // formData.append("upload_preset", "tpj7fa6k");
    // const options = {
    //   method: "POST",
    //   body: formData,
    // };
    // return fetch(
    //   "https://api.cloudinary.com/v1_1/ddxozicjg/image/upload",
    //   options
    // )
    //   .then((res) => res.json())
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
    if (files && files.length > 0) {
      const isVerified = this.verifyFile(files);
      if (isVerified) {
        const currentFile = files[0];
        const fileobject = new FileReader();
        fileobject.addEventListener(
          "load",
          () => {
            const result = fileobject.result;
            this.setState({
              imgSrc: result,
              imgSrcExt: extractImageFileExtensionFromBase64(result),
            });
          },
          false
        );
        fileobject.readAsDataURL(currentFile);
      }
    }
  };

  verifyFile = (files) => {
    if (files && files.length > 0) {
      const currentFile = files[0];
      const currentFileType = currentFile.type;
      const currentFileSize = currentFile.size;
      if (currentFileSize > imageMaxSize) {
        return false;
      }
      if (!acceptedFileTypesArray.includes(currentFileType)) {
        console.log("This file is not allowed. Only images are allowed.");
        return false;
      }
      return true;
    }
  };

  handleOnDrop = (files, rejectedFiles) => {
    if (rejectedFiles && rejectedFiles.length > 0) {
      this.verifyFile(rejectedFiles);
    }

    if (files && files.length > 0) {
      const isVerified = this.verifyFile(files);
      if (isVerified) {
        // imageBase64Data
        const currentFile = files[0];
        const myFileItemReader = new FileReader();
        myFileItemReader.addEventListener(
          "load",
          () => {
            // console.log(myFileItemReader.result)
            const myResult = myFileItemReader.result;
            this.setState({
              imgSrc: myResult,
              imgSrcExt: extractImageFileExtensionFromBase64(myResult),
            });
          },
          false
        );

        myFileItemReader.readAsDataURL(currentFile);
      }
    }
  };

  handleOnCropComplete = (crop, pixelCrop) => {
    //console.log(crop, pixelCrop)
    const canvasRef = this.imagePreviewCanvasRef.current;
    const { imgSrc } = this.state;
    image64toCanvasRef(canvasRef, imgSrc, pixelCrop);
  };

  handleImageLoaded = (image) => {
    this.imageRef = image;
  };
  onCropComplete = async (crop) => {
    this.makeClientCrop(crop);
  };
  async makeClientCrop(crop) {
    const { id, getCroppedImage } = this.props;
    if (this.imageRef && crop.width && crop.height) {
      const croppedImageUrl = await this.getCroppedImg(
        this.imageRef,
        crop,
        "newFilea.jpeg"
      );
      this.setState({ imageObj: croppedImageUrl });
    }
  }

  uploadCroppedImage = (e) => {
    e.preventDefault();
    const { imageObj } = this.state;
    const formData = new FormData();
    formData.append("file", imageObj);
    formData.append("upload_preset", "tpj7fa6k");
    const options = {
      method: "POST",
      body: formData,
    };
    return fetch(
      "https://api.cloudinary.com/v1_1/ddxozicjg/image/upload",
      options
    )
      .then((res) => res.json())
      .then((res) => this.setState({ imageUrl: res.secure_url }))
      .catch((err) => console.log(err));
  };
  getCroppedImg = (image, crop, fileName) => {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );
    return new Promise((resolve, reject) => {
      canvas.toBlob(
        (blob) => {
          blob.name = fileName;
          resolve(blob);
        },
        "image/jpeg",
        1
      );
    });
  };

  handleOnCrop = (crop) => {
    this.setState({ crop: crop });
  };

  onEnterPress = () => {
    const { col, row } = this.state;
  };

  render() {
    const { file, crop, imgSrc, imageObj, imageUrl } = this.state;
    const { onFileChange } = this.props;
    return (
      <div className="crop-component">
        <div>
          {imgSrc ? (
            <div className="image-box">
              <ReactCrop
                src={imgSrc}
                crop={crop}
                onChange={this.handleOnCrop}
                onImageLoaded={this.handleImageLoaded}
                onComplete={this.onCropComplete}
                className="image-crop"
              />
              <Button
                className="image-crop-button"
                type="primary"
                size="small"
                onClick={this.uploadCroppedImage}
              >
                Crop
              </Button>
            </div>
          ) : null}
        </div>
        <div>
          {imageUrl ? (
            <p>
              {" "}
              <img src={imageUrl} />
            </p>
          ) : null}
        </div>
        <div class="upload-btn-wrapper">
          <Button type="primary">
            {" "}
            <CameraOutlined /> Add Media
          </Button>

          <input
            type="file"
            name="myfile"
            onChange={this.onFileChange}
            ref={this.fileInputRef}
            type="file"
            accept={acceptedFileTypes}
            multiple={false}
          />
        </div>
      </div>
    );
  }
}

export default FileInput;
