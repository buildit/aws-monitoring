# AWS Lambda to Slack

This repo uses the [serverless](serverless.com) framework to create Lambda functions that can post to the #aws-alerts 
Slack channel.

Docker (cleanroom) Development
--------------------------
- `docker build --tag sls-sns .`
- `docker run -itv <fully qualified path to this project on host>:/src sls-sns`
- `aws configure`
- `cd /src`
- `sls deploy --region <deployment region> --slack-webhook-path <slack webhook uri>`

(or you can install the stuff mentioned in the Dockerfile in your host environment and work there, if you like)

Testing
-------
- `sls invoke --function postSnsMessage --stage <stage> --path ./sns-test-event.json --region <region>`
- `sls invoke --function postIfLargeEc2Instance --stage <stage> --path ./cwe-test-event-ec2-runinstance.json --region <region>`


To-Dos
------
- Might be better to have one Lambda that just knows how to post to Slack, and have others delegate to it.
  In other words, the postIfLargeEc2Instance() Lambda probably doesn't really belong here. 
- Would be nice to be able to post to different channels.  Yes, we could just add a parameter, but most calling
  sites where we expect to execute these functions just pass events in.  For example, an SNS subscription wouldn't
  be able to pass in a channel name.  So perhaps some sort of Lambda configuration/environment variable, or...
- AWS provides a _lot_ of options for this sort of thing.  There's probably some other more elegant or robust 
  way to approach the overall problem, but we tried to keep the initial effort about a week or so. For example, it 
  might have been better for the postIfLargeEc2Instance() Lambda to post a nicely-formatted message to an SNS 
  topic rather than directly posting to Slack.  Then, a Lambda subscription on that topic could be bound to the 
  postSnsMessage() function.  But ... time.
