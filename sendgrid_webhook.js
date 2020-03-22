const localtunnel = require("localtunnel");
localtunnel(5000, { subdomain: "ldestedsad" }, function(err, tunnel) {
  console.log("LT running");
});
