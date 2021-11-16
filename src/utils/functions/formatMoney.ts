const localeMapping: Record<
  string,
  { locale: string; options: Intl.NumberFormatOptions }
> = {
  ja: {
    locale: "ja-JP",
    options: {
      style: "currency",
      currency: "JPY",
    },
  },
  en: {
    locale: "en-US",
    options: {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    },
  },
};

const formatMoney = (price: number, locale?: string) => {
  return new Intl.NumberFormat(
    locale && localeMapping[locale].locale,
    (locale && localeMapping[locale].options) || {}
  ).format(price);
};

export default formatMoney;
