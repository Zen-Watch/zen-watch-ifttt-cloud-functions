/// AWS Lambda function to handle action requests
import { publishCast } from "@standard-crypto/farcaster-js";
import { Wallet } from "ethers";
import { Handler } from "aws-lambda";

const handler: Handler = async (event, context) => {
  // Mnemonic is set as an environment variable
  if (process.env.MNEMONIC === undefined) {
    throw new Error("Mnemonic not set");
  }
  const wallet = Wallet.fromMnemonic(process.env.MNEMONIC);
  const eventBody = JSON.parse(event.body);

  const cast = await publishCast(
    wallet,
    `Whale Alert: ${eventBody.value} of USDC moved from ${eventBody.from} to ${eventBody.to}`
  );

  console.log("Cast published: " + cast.hash);

  return {
    statusCode: 200,
    body: JSON.stringify({
      cast: cast.hash,
    }),
  };
};

module.exports = { handler };
