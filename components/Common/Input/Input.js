import React, { Component } from "react";
class Input extends Component {

  render() {
    const { users ,inputCss,type,placeholder,handleChange,name} = this.props;
    return (
      <div className="search-box">
        <input
          type={type}
          placeholder={placeholder}
          className={`input-${inputCss}`}
          onClick={this.handleClick}
          onChange={(e)=>handleChange(e)}
          name={name}
        />
      </div>
    );
  }
}

export default Input;
