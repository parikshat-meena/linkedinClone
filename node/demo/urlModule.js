const { URL } = require("url");

const sampleURL = "https://meet.google.com:8000/moq-abge-ues?authuser=12";

const data = new URL(sampleURL);

console.log("[HOST]", data.host);
console.log("[HOSTNAME]", data.hostname);
console.log("[PORT]", data.port);
console.log("[PROTOCOL]", data.protocol);
console.log("[PATHNAME]", data.pathname);
console.log("[HREF]", data.href);
console.log("[query]", data.searchParams.get("authuser"));
console.log("[query]", data.searchParams.has("authuser"));
console.log("[query]", data.searchParams.has("name"));
