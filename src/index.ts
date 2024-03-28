import { Connection } from '@solana/web3.js';
import { initializeKeypair } from '@solana-developers/helpers';

(async () => {
  const connection = new Connection('http://127.0.0.1:8899', 'finalized');
  const payer = await initializeKeypair(connection);

})()
  .then(() => {
    console.log('Finished successfully');
    process.exit(0);
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });