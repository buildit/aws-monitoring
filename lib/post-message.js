const https = require("https");

module.exports = subject => {
  const postData = {
    channel: "#aws-alerts",
    username: "AWS SNS via Lambda",
    text: `* ${subject} *`
  };
  const options = {
    method: "POST",
    hostname: "hooks.slack.com",
    port: 443,
    path: process.env.WEBHOOK_PATH || ''
  };

  const req = https.request(options, function(res) {
    res.setEncoding("utf8");
  });

  req.on("error", function(e) {
    console.log("problem with request: " + e.message);
  });

  req.write(JSON.stringify(postData));
  req.end();
};
