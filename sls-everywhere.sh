#!/usr/bin/env sh

COMMAND=${1}

ALL_REGIONS=`aws ec2 describe-regions --region us-east-1 --output text | cut -f 3 | head -1`

for region in ${ALL_REGIONS}
do
    echo "Running '${COMMAND} in '${region} ..."
    sls ${COMMAND} --region ${region} --slack-webhook-path  /services/T03ALPC1R/B4Y30FJKC/X8ecBUyUG1vGRmfEbIoBhfHo
done;