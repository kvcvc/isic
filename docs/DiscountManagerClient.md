<a name="DiscountManagerClient"></a>

## DiscountManagerClient

Discount Manager client implementation

**Kind**: global class

- [DiscountManagerClient](#DiscountManagerClient)
  - [new DiscountManagerClient(url, username, password)](#new_DiscountManagerClient_new)
  - [.verifyCard(cardNumber, cardholderName, [discountId])](#DiscountManagerClient+verifyCard)
  - [.createReceipt(discountId, verificationId, issuedOn, amountPaid)](#DiscountManagerClient+createReceipt)
  - [.revokeReceipt(receiptId)](#DiscountManagerClient+revokeReceipt)
  - [.makeRequest(method, path, data)](#DiscountManagerClient+makeRequest)

<a name="new_DiscountManagerClient_new"></a>

### new DiscountManagerClient(url, username, password)

Create new instance of the client

| Param    | Type                | Description                          |
| -------- | ------------------- | ------------------------------------ |
| url      | <code>string</code> | URL of the Discount Manager instance |
| username | <code>string</code> | Discount Manager username            |
| password | <code>string</code> | Discount Manager password            |

<a name="DiscountManagerClient+verifyCard"></a>

### discountManagerClient.verifyCard(cardNumber, cardholderName, [discountId])

Create new card verification request

**Kind**: instance method of [<code>DiscountManagerClient</code>](#DiscountManagerClient)

| Param          | Type                | Default       | Description                                                              |
| -------------- | ------------------- | ------------- | ------------------------------------------------------------------------ |
| cardNumber     | <code>string</code> |               | Card number including initial and end letters                            |
| cardholderName | <code>string</code> |               | Cardholder’s name as printed on card                                     |
| [discountId]   | <code>number</code> | <code></code> | Unique discount identifier provided by the client‘s ISIC account manager |

<a name="DiscountManagerClient+createReceipt"></a>

### discountManagerClient.createReceipt(discountId, verificationId, issuedOn, amountPaid)

Report discount usage

**Kind**: instance method of [<code>DiscountManagerClient</code>](#DiscountManagerClient)

| Param          | Type                | Description                         |
| -------------- | ------------------- | ----------------------------------- |
| discountId     | <code>number</code> | Issued discount identifier          |
| verificationId | <code>number</code> | Unique card verification identifier |
| issuedOn       | <code>Date</code>   | Benefit issue date                  |
| amountPaid     | <code>number</code> | Amount of money paid by cardholder  |

<a name="DiscountManagerClient+revokeReceipt"></a>

### discountManagerClient.revokeReceipt(receiptId)

Revoke discount usage

**Kind**: instance method of [<code>DiscountManagerClient</code>](#DiscountManagerClient)

| Param     | Type                | Description               |
| --------- | ------------------- | ------------------------- |
| receiptId | <code>number</code> | Unique receipt identifier |

<a name="DiscountManagerClient+makeRequest"></a>

### discountManagerClient.makeRequest(method, path, data)

Make HTTP request to Discount Manager

**Kind**: instance method of [<code>DiscountManagerClient</code>](#DiscountManagerClient)

| Param  | Type                | Description                               |
| ------ | ------------------- | ----------------------------------------- |
| method | <code>string</code> | HTTP method to be used                    |
| path   | <code>string</code> | Path to the Discount Manager API resource |
| data   | <code>Object</code> | Request body                              |
