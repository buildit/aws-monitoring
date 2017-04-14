"use strict";
const postMessage = require("./lib/post-message");

module.exports.postSnsMessage = (event, context, callback) => {
  postMessage(`${event.Records[0].Sns.Subject}: ${event.Records[0].Sns.Message}`);
};

module.exports.postCloudTrailEvent = (event, context, callback) => {
  postMessage(event);
};
