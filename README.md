# Zen.Watch IFTTT Cloud Functions
This is an open-source repository of IFTTT Cloud Functions / Bots submitted by the Zen.Watch Community

We are maintaining this repo for the developers who prefer to build IFTTT templates with advanced read-write capabilities to web2 or web3.

We plan to add to more fun IFTTT recipes to this open-source repository over the coming weeks and months! Stay tuned!

We have added a folder for different languages & environments - Javascript, Python, Rust, AWS, Google Cloud, Azure, Cloudflare Workers

### Request for Ecosystem Proposals
You can use this Zen.Watch IFTTT Cloud Functions pattern to build any recipies. Never start from scratch. Some samples are given below: 

- Build bots for Twitter, Farcaster, Telegram
- Build an Email / SMTP client 
- Build a web3 wallet messaging / notification client using XMTP, Push Protocol
- Build an OpenAI client, to pass through your prompt and on-chain data to ChatGPT for on-demand AI customization
- Build a Forta.org integration to detect real-time web3 threads and notify 
- Build an email news integration and send custom notifications based on on-chain events with paragraph.xyz or substack
- Build no-code itegrations to capture on-chain events & custom messages directly to your notion
- Build web3 protocol clients such as Uniswap Trading Strategies, AAVE Lending & more
- Build a Zero-Knowledge (ZK) proof generator & verifier based on IFTTT trigger payload
- Build a Shamir Secret Sharing (SSS) key splitter & merger based on IFTTT trigger payload
- Build a MPC wallet integration to trigger based on-chain events like LIT or any other MPC provider
- Build a custom, non-custodial cloud, hot wallets for EVM, Non-EVM using EOA, LIT Actions, LIT PKPs, AWS KMS
- Build custom on-chain transaction templates for specific use-cases cross-chain bridging, NFT airdrops, NFT mints
- Build a client for IPFS, Arweave or Fission Codes FVM
- Build a GPRC client to support non-rest production servers / gateways
- Build a Message Queue Client - Kafka, SQS or your favorite
- Build a Database Client - MySQL, MongoDB, Cassandra, RocksDB, Firebase, Supabase, Polybase 
- Build a graph protocol or Dune Analytics integration to query based on on-chain events
- Build a LLM Cloud Function with Picone Vector DB and Open AI for personalization based on wallet & on-chain events & more
- Build on-chain automation for Account Abstraction wallets such as Rollup.id, Pimlico
- Customize existing cloud functions to your needs using the AI Console on our [admin portal](https://admin.zen.watch)

### Submit to Zen.Watch
- Please fork the repo, create your cloud functions (Lambda, Cloudflare Worker or any other platform)
- Test it locally
- Once you are satisfied, submit a pull request to this upstream zen.watch repository

### Coding Best Practices
- Please make sure code and configuration / secrets are separated toa void accidentally private information exposure. 
- Zen.Watch will release vetted template, best practices & blueprints as examples for the above, stay tuned!

### Index of Keywords
- EOA - Externally owned accounts, i.e., user owned wallets for a blockchain such as Ethereum or Bitcoin
- LIT Action - Web3 Actions are immutable code with access conditions uploaded to IPFS by LIT Protocol
- LIT PKP - Programmable Key Pairs are NFTs, which act as Wallets backed by LIT protocol's Multi-Party-Computation (MPC) Network
