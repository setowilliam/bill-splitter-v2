const roundNumber = (num: number, digits = 2) => {
  const factor = Math.pow(10, digits);

  return Math.round((num + Number.EPSILON) * factor) / factor;
};

export default roundNumber;
