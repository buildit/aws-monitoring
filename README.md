# AWS Lambda to Slack

This repo uses the [serverless](serverless.com) framework to create an AWS Lambda function that will post SNS messages to the #aws-alerts Slack channel. The lambda function currently needs to be hooked up to the SNS topic manually.

- `docker build --tag sls-sns .`
- `docker run -it sls-sns`
- `aws configure`
- `export WEBHOOK_PATH=${WEBHOOK_PATH}`
- `sls deploy --region <deployment region> --slack-webhook-path <slack channel webhook uri>`
