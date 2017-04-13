"use strict";
const postMessage = require("./lib/post-message");

module.exports.postToSlack = (event, context, callback) => {
  postMessage(event.Records[0].Sns.Subject + ": " + event.Records[0].Sns.Message);
};
