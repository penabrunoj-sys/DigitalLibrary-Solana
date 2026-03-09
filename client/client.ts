// Client
console.log("Library user address:", pg.wallet.publicKey.toString());
const balance = await pg.connection.getBalance(pg.wallet.publicKey);
console.log(`User balance for buying books: ${balance / web3.LAMPORTS_PER_SOL} SOL`);
