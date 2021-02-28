const axios = require('axios');
const DiscountManagerClientException = require('./DiscountManagerClientException');

/**
 * Discount Manager client implementation
 */
class DiscountManagerClient {
  /**
   * Create new instance of the client
   * @param {string} url - URL of the Discount Manager instance
   * @param {string} username - Discount Manager username
   * @param {string} password - Discount Manager password
   */
  constructor(username, password, url) {
    this.url = url.concat('/api');
    this.username = username;
    this.password = password;
  }

  /**
   * Create new card verification request
   * @param {string} cardNumber - Card number including initial and end letters
   * @param {string} cardholderName - Cardholder’s name as printed on card
   * @param {number} [discountId=null] - Unique discount identifier provided by the client‘s ISIC account manager
   */
  verifyCard(cardNumber, cardholderName, discountId = null) {
    return this.makeRequest('POST', '/verifications', {
      cardNumber,
      cardholderName,
      discountId: discountId ? discountId : undefined,
    });
  }

  /**
   * Report discount usage
   * @param {number} discountId - Issued discount identifier
   * @param {number} verificationId - Unique card verification identifier
   * @param {Date} issuedOn - Benefit issue date
   * @param {number} amountPaid - Amount of money paid by cardholder
   */
  createReceipt(discountId, verificationId, issuedOn, amountPaid) {
    return this.makeRequest('POST', '/receipts', {
      discountId,
      verificationId,
      issuedOn: issuedOn.toISOString(),
      amountPaid,
    });
  }

  /**
   * Revoke discount usage
   * @param {number} receiptId - Unique receipt identifier
   */
  revokeReceipt(receiptId) {
    return this.makeRequest('PUT', `/receipts/${receiptId}/status`, {
      status: 'REVOKED',
    });
  }

  /**
   * Make HTTP request to Discount Manager
   * @param {string} method - HTTP method to be used
   * @param {string} path - Path to the Discount Manager API resource
   * @param {Object} data - Request body
   */
  makeRequest(method, path, data) {
    return axios({
      method: method,
      url: this.url.concat(path),
      auth: {
        username: this.username,
        password: this.password,
      },
      data: data,
      headers: {
        'Content-Type': 'application/json',
        'Content-Encoding': 'UTF-8',
        Accept: 'application/json',
      },
    })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        if (err.response) {
          switch (err.response.status) {
            case 400:
              throw new DiscountManagerClientException(
                'Invalid request parameters'
              );
            case 404:
              throw new DiscountManagerClientException(
                'Invalid Discount Manager URL specified'
              );
            case 401:
              throw new DiscountManagerClientException(
                'Invalid credentials specified'
              );
            case 403:
              throw new DiscountManagerClientException(
                'User is not allowed to perform the operation'
              );
            default:
              throw new DiscountManagerClientException(
                'Unexpected error occured'
              );
          }
        } else {
          throw new DiscountManagerClientException(err.message);
        }
      });
  }
}

module.exports = DiscountManagerClient;
