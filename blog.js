const blogList = {
  "3 Ways to Become a Product Manager": "./blog/becoming-a-pm.html",
  "Constructing an Effective Phone Screen": "./blog/phone-screen.html",
  "Why I'm Joining Square": "./blog/why-square.html",
  "Two Types of Discomfort": "./blog/two-types-of-discomfort.html",
  "How Netflix Improved Their Hook": "./blog/netflix-loop.html",
  "MVP Levels": "./blog/mvp-levels.html",
  "Always Daisy Chain": "./blog/daisy-chain.html"
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
