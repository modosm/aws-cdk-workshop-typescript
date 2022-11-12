# AWS CDK workshop TypeScript

You should explore the contents of this project. It demonstrates a CDK app with an instance of a stack (`AwsCdkWorkshopTypescriptStack`)
which contains an Amazon SQS queue that is subscribed to an Amazon SNS topic.
 
## Prerequisites for the Workshop
To perform this workshop, you’ll need the following:

* AWS CLI
```shell
which aws
aws --version
```
* AWS Account and User
```shell
aws-vault exec <account name> -- aws s3 ls
```
* Node.js
```shell
node --version
```
* IDE for your programming language

* AWS CDK Toolkit
```shell
npm install -g aws-cdk
cdk --version
```

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template