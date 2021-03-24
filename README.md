# isic

[![Version](https://img.shields.io/npm/v/@kvcvc/isic)](https://img.shields.io/npm/v/@kvcvc/isic)
[![Downloads](https://img.shields.io/npm/dt/@kvcvc/isic)](https://img.shields.io/npm/dt/@kvcvc/isic)

ISIC Discount Manager client implementation

- verify ISIC/ITIC/ALIVE cards
- report discount usage

## Installation

Using npm:

```shell
npm install @kvcvc/isic
```

## Usage

```node
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

For complete documentation about the available operations, please see the [auto-generated JSDocs documentation](./docs).

## License

[MIT](https://choosealicense.com/licenses/mit/)
