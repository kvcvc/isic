# isic

[![Version](https://img.shields.io/npm/v/@kvcvc/isic)](https://img.shields.io/npm/v/@kvcvc/isic)

ISIC Discount Manager client implementation allowing you to verify ISIC/ITIC/ALIVE cards and report or revoke discount usage in Node.js. More information about the ISIC Check API including requirements and official documentation can be found [here](https://isiccheck.cz/api-isic-check/).

## Installation

Using npm:

```shell
npm install @kvcvc/isic
```

## Usage

```
const DiscountManagerClient = require('@kvcvc/isic');

const client = new DiscountManagerClient(
  'DM_USERNAME',
  'DM_PASSWORD',
  'DM_INSTANCE_URL'
);

client
  .verifyCard('S420001019431J', 'Janička Testová')
  .then((res) => {
    // use res.data
  })
  .catch((err) => {
    // handle error
  });
```

## Documentation

For complete documentation about the available operations, please see the auto-generated JSDocs documentation pages. These contain detailed information about which methods are available and how to use them.

## License

[MIT](https://choosealicense.com/licenses/mit/)
