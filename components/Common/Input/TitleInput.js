import React, { Component } from "react";
class TitleInput extends Component {
  render() {
    const {
      type,
      text,
      style,
      value,
      name,
      containerStyle,
      textarea,
      col,
      id,
      row,
      onEnterPress,
    } = this.props;
    return (
      <div className={containerStyle}>
        {textarea ? (
          <textarea
            id="id"
            name={name}
            rows="4"
            cols={col}
            placeholder={text}
            className={style}
            onKeyDown={this.onEnterPress}
          />
        ) : (
          <input type={type} placeholder={text} className={style} name={name} />
        )}
      </div>
    );
  }
}

export default TitleInput;
