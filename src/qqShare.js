import browser from "./browser";
import requireJs from "./requireJs";

function loadQQSDK() {
  return new Promise(resolve => {
    requireJs("//open.mobile.qq.com/sdk/qqapi.js?_bid=152", () => {
      resolve();
    });
  });
}
const setShareInfo = opt => {
  window.mqq.invoke("data", "setShareInfo", {
    share_url: opt.link,
    title: opt.title,
    desc: opt.desc,
    image_url: opt.imgUrl,
  });
};
async function share(option) {
  // if (browser.name !== "qq") {
  //   return;
  // }
  if (!window.mqq) {
    await loadQQSDK();
  }
  const defaultOption = {
    link: location.href,
    title: "",
    desc: "",
    imgUrl: ""
  };

  setShareInfo({ ...defaultOption, ...option });
}
export default share;
