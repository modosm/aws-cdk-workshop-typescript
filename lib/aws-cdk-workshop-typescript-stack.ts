import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import * as sns from 'aws-cdk-lib/aws-sns';
import * as subs from 'aws-cdk-lib/aws-sns-subscriptions';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigw from 'aws-cdk-lib/aws-apigateway';

export class AwsCdkWorkshopTypescriptStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        const lamda =  new lambda.Function(this, "Hello_handler" ,{
                runtime: lambda.Runtime.NODEJS_16_X,              // execution environment
                code: lambda.Code.fromAsset('lambda'),      // code loaded from "lambda" directory
                handler: 'hello.handler'                          // file is "hello", function is "handler"
            }
        )

        new apigw.LambdaRestApi(this, 'Endpoint', {
                handler:lamda
        });
    }
}
