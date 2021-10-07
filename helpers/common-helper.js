class CommonHelper {
  percentage(num, per) {
    return (num / 100) * per;
  }

  formatNumberToCurrency(number, currency) {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
    });
    return formatter.format(number);
  }
}

module.exports = new CommonHelper();
