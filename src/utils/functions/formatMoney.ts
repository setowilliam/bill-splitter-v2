const formatMoney = (price: number) => {
  return (
    "$" +
    new Intl.NumberFormat(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price)
  );
};

export default formatMoney;
