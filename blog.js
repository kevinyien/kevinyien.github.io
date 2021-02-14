const blogList = {
  "blog1": "./blog/blog1.html",
  "blog2": "./blog/blog2.html"
}

const blogMap = new Map(Object.entries(blogList));
for (const title of blogMap.keys()) {
  const list = document.getElementById("blogList")
  let a = document.createElement("a");
  let linkText = document.createTextNode(title);
  a.appendChild(linkText);
  a.title = title;
  a.href = blogList[title];
  list.appendChild(a);
}
