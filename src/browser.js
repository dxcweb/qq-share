const userAgent = navigator.userAgent.toLowerCase()
let browser = {}
let uaMatch
// 判断页面是否被iframe引用
if (top.location == location) {
  if ((uaMatch = userAgent.match(/micromessenger\/([\S]+)/))) {
    browser['name'] = 'wechat'
    browser['version'] = uaMatch[1]
  } else if ((uaMatch = userAgent.match(/qq\/([\S]+)/i))) {
    browser['name'] = 'qq'
    browser['version'] = uaMatch[1]
  }
}

export default browser
