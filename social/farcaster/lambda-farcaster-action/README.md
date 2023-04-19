# Farcaster Action for AWS Lambda

> Farcaster is a sufficiently decentralized social network. It is an open protocol that can support many clients, just like email.

Using Farcaster Action, you can share casts on the Farcaste network from your [Zen.Watch](https://zen.watch) triggers.

## Usage on AWS Lambda

### 1. Build Lambda function

```bash
$ npm run build
```

### 2. Upload Lambda function

Lambda build will be available under the `dist` directory. You can upload it to AWS Lambda using the [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html) or the [AWS Console](https://docs.aws.amazon.com/lambda/latest/dg/getting-started-create-function.html).

### 3. Create [Function URL](https://docs.aws.amazon.com/lambda/latest/dg/lambda-urls.html)

You can find the URL of your Lambda function in the AWS Console under the `Overview` tab. It will look something like this:

```
https://<url-id>.lambda-url.<region>.on.aws
```

## Usage on Zen.Watch

### 1. Create any kind of trigger on [Zen.Watch](https://zen.watch)

You can use any kind of trigger, from price alerts on decentralized exchanges to notable transactions on the blockchain.

### 2. Create a REST action

Create a new action on [Zen.Watch](https://zen.watch) and select REST POST as the action type.

This action will be triggered every time your trigger is triggered and will send a POST request to the Farcaster Action.

### 3. Configure the action

In the URL field, enter the URL of the Farcaster action which you can find in the Workers dashboard. Your payload will be sent as the body of the request.
