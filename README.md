# AWS Lambda to Slack

This repo uses the [serverless](serverless.com) framework to create an AWS Lambda function that will post SNS messages to the #aws-alerts Slack channel. The lambda function currently needs to be hooked up to the SNS topic manually.

Docker (clean) Development
--------------------------
- `docker build --tag sls-sns .`
- `docker run -itv <fully qualified path to this project on host>:/src sls-sns`
- `aws configure`
- `sls deploy --region <deployment region> --slack-webhook-path <slack webhook uri>`

(or you can install the stuff mentioned in the Dockerfile in your host environment, if you like)

Testing
-------
- `sls invoke --function postSnsMessage --stage <stage> --path ./sns.json --region <region>`