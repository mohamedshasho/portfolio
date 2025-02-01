import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "../scss/light-slider.scss";
import AwesomeSliderStyles2 from "../scss/dark-slider.scss";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";


class ProjectDetailsModal extends Component {

  render() {
    if (this.props.data) {
      const technologies = this.props.data.technologies;
      const images = this.props.data.images;
      var title = this.props.data.title;
      var description = this.props.data.description;
      var url = this.props.data.url;
      var play_url = this.props.data.play_url;
      var apple_url = this.props.data.apple_url;

      if (this.props.data.technologies) {
        var tech = technologies.map((icons, i) => {
          return (
            <li className="list-inline-item mx-3" key={i}>
              <span>
                <div className="text-center">
                  <i className={icons.class} style={{ fontSize: "300%" }}>
                    <p className="text-center" style={{ fontSize: "30%" }}>
                      {icons.name}
                    </p>
                  </i>
                </div>
              </span>
            </li>
          );
        });
        if (this.props.data.images) {
          var img = images.map((elem, i) => {
            return <div key={i} data-src={elem} />;
          });
        }
      }
    }
    const check = document.documentElement.lang !== 'en'

    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-inside"
      >
        <span onClick={this.props.onHide} className="modal-close">
          <i className="fas fa-times fa-3x close-icon"></i>
        </span>
        <div className="col-md-12">
          <div className="col-md-10 mx-auto" style={{ paddingBottom: "50px" }}>
            <div className="slider-tab">
              <span
                className="iconify slider-iconfiy"
                data-icon="emojione:red-circle"
                data-inline="false"
                style={{ marginLeft: "5px" }}
              ></span>{" "}
              &nbsp;{" "}
              <span
                className="iconify slider-iconfiy"
                data-icon="twemoji:yellow-circle"
                data-inline="false"
              ></span>{" "}
              &nbsp;{" "}
              <span
                className="iconify slider-iconfiy"
                data-icon="twemoji:green-circle"
                data-inline="false"
              ></span>
            </div>
            <AwesomeSlider
              cssModule={[AwesomeSliderStyles, AwesomeSliderStyles2]}
              animation="scaleOutAnimation"
              className="slider-image"
            >
              {img}
            </AwesomeSlider>
          </div>
          <div className="col-md-10 mx-auto">
            <h3 style={{ padding: "5px 5px 0 5px" }} className={`${check ? "modal-titleAr" : null}`}>
              {title}
              {url ? (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-href"
                >
                  <i
                    className="fab fa-github"
                    style={{
                      marginLeft: check ? null : "10px",
                      marginRight: check ? "10px" : null,
                    }}
                  ></i>
                </a>
              ) : null}
              {play_url ? (
                <a
                  href={play_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-href"
                >
                  <i
                    class="fab fa-google-play"
                    style={{
                      marginLeft: check ? null : "10px",
                      marginRight: check ? "10px" : null,
                      color: "blue"
                    }}
                  ></i>
                </a>
              ) : null}
              {apple_url ? (
                <a
                  href={play_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-href"
                >
                  <i
                    class="fab fa-app-store-ios"
                    style={{
                      marginLeft: check ? null : "10px",
                      marginRight: check ? "10px" : null,
                      color: "blue"
                    }}
                  ></i>
                </a>
              ) : null}
            </h3>
            <p className={`${check ? "modal-descriptionAr" : "modal-description"}`} >{description}</p>
            <div className="col-md-12 text-center">
              <ul className="list-inline mx-auto">{tech}</ul>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

export default ProjectDetailsModal;
