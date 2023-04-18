# Farcaster Action for Cloudflare Workers

> Farcaster is a sufficiently decentralized social network. It is an open protocol that can support many clients, just like email.

Using Farcaster Action, you can share casts on the Farcaste network from your [Zen.Watch](https://zen.watch) triggers.

## Usage on Cloudflare Workers

Getting started is easy! Simply follow the step-by-step instructions provided in [Wrangler documentation](https://developers.cloudflare.com/workers/wrangler/commands/) to install the Wrangler CLI and configure it with your Cloudflare account.

## Usage on Zen.Watch

### 1. Create any kind of trigger on [Zen.Watch](https://zen.watch)

You can use any kind of trigger, from price alerts on decentralized exchanges to notable transactions on the blockchain.

### 2. Create a REST action

Create a new action on [Zen.Watch](https://zen.watch) and select REST POST as the action type.

This action will be triggered every time your trigger is triggered and will send a POST request to the Farcaster Action.

### 3. Configure the action

In the URL field, enter the URL of the Farcaster action which you can find in the Workers dashboard. Your payload will be sent as the body of the request.
