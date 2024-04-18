import { clusterApiUrl, Connection } from '@solana/web3.js';
import { initializeKeypair } from '@solana-developers/helpers';

const connection = new Connection(clusterApiUrl('devnet'), 'finalized');
const payer = await initializeKeypair(connection, {keypairPath: 'your/path/to/keypair.json'});