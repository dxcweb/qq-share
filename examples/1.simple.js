import React, { Component, PropTypes } from "react";
import ReactDOM from "react-dom";
import qqShare from "qq-share";
class Simple extends Component {
  componentWillMount() {
    qqShare({
      title: "测试",
      desc: "测试描述",
      imgUrl: "https://oss.tuobacco.com/wop2/2018-06-01/5b10dde28a12d.jpg"
    });
  }
  render() {
    return <div style={{ padding: 40 }}>使用手机QQ分享试试</div>;
  }
}
ReactDOM.render(<Simple />, document.getElementById("__react-content"));
