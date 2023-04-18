/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `wrangler dev src/index.ts` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `wrangler publish src/index.ts --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */
import { publishCast } from "@standard-crypto/farcaster-js";
import { Wallet } from "ethers";

export interface Env {
  MNEMONIC: string;
}

type EventBody = {
  from: string;
  to: string;
  value: number;
};

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext
  ): Promise<Response> {
    const wallet = Wallet.fromMnemonic(env.MNEMONIC);

    const eventBody = (await request.json()) as EventBody;

    const cast = await publishCast(
      wallet,
      `Whale Alert: ${eventBody.value} of USDC moved from ${eventBody.from} to ${eventBody.to}`
    );

    console.log("Cast published: " + cast.hash);

    return new Response("OK");
  },
};
