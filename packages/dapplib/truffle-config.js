require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture help future spot toy note sad purse grace neck fresh gaze'; 
let testAccounts = [
"0x502e163ff3a9528c8086b5c98cd0fffc131dec0ed27725295ceda269b57d4f15",
"0x5f7be88cdf4b785385dbb82a99cd69b93aa8b65cc6384bfcaf89d1abb01b4155",
"0x50dc8f0f77a9385fa113a8234529801e7935d78e19c5e3c1304bf3fabceeb9b5",
"0x0cff72137577d31d13efeda605f5995daab0d29f7ec2f74617e5410ff2d2c591",
"0xd8e853d088da7ab363beb8855e10543519a50565a7759afd3ac8b0e53c0dcf15",
"0xdd34cd003c2611ee8ab128abac5cf2ee703ef0d3f5a71a692024f9377a8cca44",
"0x012a24416104d7d84188e1f65343cc9072f4284d222202c7257e81798a8bdd25",
"0x25f119b41925c23efe74364b5f906dfd08221347cba3351b779012f741ae1682",
"0x1e257c7084952f0ccaa48d749bf9b4d210087948060b0e401839a77d818fbc2d",
"0x21804de06d10f06f0ad8d56993f233d10561880705c9cf4632607506c6d20d2f"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
