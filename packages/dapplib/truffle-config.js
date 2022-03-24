require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth shift protect half clock forward gather'; 
let testAccounts = [
"0x1f00cc93b87092803d2cf6bbe3040405c620361c20eafac274a72dace02e3c19",
"0xb250eb02ae87bbf8982da2b69b3c831ba94a29ab32a23b830f4752ba4d447522",
"0x7d474f067bafd489f0a383a2c1963389a78f72ef7d577c28f504f65ae91b1017",
"0x9a5f6081e16e9f2fddf0339dd815b5546c54a252686ef6f23258ccf83c0b60e6",
"0x4512028bf4ef15796771065fb9bc1203495f5581624e321cff4ef9a981cb4538",
"0xc856a5b2dfbab8ba840fcd0895a91201f050fab5790f3af85d7a0ef95152e997",
"0x983c1c9c9e994c599b7ee3905c2ecb111feac0f1177111295d08e9057cca90f8",
"0x4990b41684f82992c06f8164aadf71c6a390351548b70e2c3c952375a407098f",
"0x01337d5ce16743372a834371c1d31492c2e3bc197e85eb727d935cb1a47ec2f7",
"0xc16e2ae246e8b890811719cab722adfb645b5c018226517f039d6c7b9a92dec1"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

