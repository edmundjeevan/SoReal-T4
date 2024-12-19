The metadata pointer extension associates a token mint directly to a metadata account by storing the metadata account's address in the mint. 
This metadata account address can be an external metadata account, like Metaplex, or the mint itself if using the metadata extension.
The metadata mint extension allows embedding metadata directly into mint accounts through the Token Extensions Program. 
This is always accompanied by a self-referencing metadata pointer, which facilitates embedding comprehensive token information at the minting stage.
These extensions enhance the interoperability of tokens across different applications and platforms by standardizing how metadata is associated and accessed.
Directly embedding or pointing to metadata can streamline transactions and interactions by reducing the need for additional lookups or external calls. To Get Started

### Usage

1. `npm install` or yarn
2. Write code in `index.js`
3. `npm run start`

### Helpers

1. initializeKeypair:
   1. takes a connection obj
   1. takes optional filePath, if you provide the keypair file path like
      `~/.config/solana/id.json` which is the default keypair for Solana CLI it
      will take the keypair from there and consider them as payer
   1. if not it will generate a new keypair and store them in the .env to use
      them in the future with any other transaction
   1. it will airdrop SOL for the payer account if need
1. uploadOffChainMetadata:
   1. take metadata inputs like name, symbol, description, and image
   1. uploads them to an off-chain storage provide
   1. return a URI that points to that metadata JSON
