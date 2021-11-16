import { TipType } from "utils/typings";

const getFees = (
  value: number,
  tax?: number,
  tip?: number,
  tipType?: TipType
) => {
  const taxAmount = value * ((tax || 0) / 100);

  let tipAmount = 0;

  if (tip) {
    switch (tipType) {
      case "after":
        tipAmount = (value + taxAmount) * (tip / 100);
        break;
      case "before":
        tipAmount = value * (tip / 100);
        break;
      case "fixed":
        tipAmount = tip;
      default:
        break;
    }
  }

  return { tax: taxAmount, tip: tipAmount };
};

export default getFees;
