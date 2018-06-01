export default (url, onload) => {
  let doc = document
  let head = doc.head || (doc.getElementsByTagName('head')[0] || doc.documentElement)
  let node = doc.createElement('script')
  node.onload = onload
  node.onerror = function() {}
  node.async = true
  node.src = url
  head.appendChild(node)
}
