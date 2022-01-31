// https://eth-ropsten.alchemyapi.io/v2/gX81XReFZmUEyiroMqODv6HaNRRXGECl

require ('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/gX81XReFZmUEyiroMqODv6HaNRRXGECl',
      accounts: ['dbc520ecaf4e8ea73640ffd15090ee0844a22bee3c32bb7a0a487e863112edec']
    }
  }
}