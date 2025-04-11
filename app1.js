const urlData = {
  protocol: "https",
  hostname: "mywebsite.com",
  path: "/blog/article",
  query: {
    id: 45,
    author: "Ali",
    lang: "en",
  },
};

const url = new URL(`${urlData.protocol}://${urlData.hostname}${urlData.path}`);

for (let key in urlData.query) {
  url.searchParams.set(key, urlData.query[key]);
}

url.searchParams.set("lang", "uz");
url.searchParams.set("view", "mobile");

console.log(url.toString());
