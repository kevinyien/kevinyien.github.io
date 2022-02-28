const blogList = {
  "Joining the Mutiny": "./blog/mutiny.html",
  "The Unsell Email": "./blog/unsell.html",
  "Back to Square One": "./blog/square-one.html",
  "Finding Your Swagger": "./blog/swagger.html",
  "Sinusoidal Thinking": "./blog/sine.html",
  "Overfitting": "./blog/overfitting.html",
  "The Studio Effect": "./blog/studio-effect.html",
  "Learning to Call BS": "./blog/bs.html",
  "Constructing an Effective Phone Screen": "./blog/phone-screen.html",
  "3 Ways to Become a Product Manager": "./blog/becoming-a-pm.html",
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
