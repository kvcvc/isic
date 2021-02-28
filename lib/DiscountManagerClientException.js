/**
 * Exception thrown in case of any problems while contacting Discount Manager
 * @extends Error
 */
class DiscountManagerClientException extends Error {
  /**
   * Creates new instance of the exception
   * @param {string} err - Error message
   */
  constructor(err) {
    super(err);
    this.name = 'DiscountManagerClientException';
  }
}

module.exports = DiscountManagerClientException;
