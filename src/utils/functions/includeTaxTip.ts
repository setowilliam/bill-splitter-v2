const includeTaxTip = (value: number, tax?: number, tip?: number) => {
  const taxAmount = value * ((tax || 0) / 100);
  const tipAmount = value * ((tip || 0) / 100);

  return value + taxAmount + tipAmount;
};

export default includeTaxTip;
