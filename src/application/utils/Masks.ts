const PHONE = (value: string) => {
  if (!value) return "";
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{2})(\d{4,5})(\d{4})/, "($1) $2-$3");
  return value.slice(0, 15);
};

const ZIP_CODE = (value: string) => {
  if (!value) return "";
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{5})/g, "$1");
  value = value.replace(/(\d)(\d{3})$/, "$1-$2");
  return value;
};

const HOURS = (value: string) => {
  if (!value) return "";
  value = value.replace(/\D/g, "");

  if (Number(value.charAt(0)) > 2) value = "";

  if (Number(value.charAt(0)) > 1 && Number(value.charAt(1)) > 4) {
    value = value.slice(0, 1);
  }

  if (Number(value.charAt(2)) > 5) {
    value = value.slice(0, 2);
  }

  value = value.replace(/^([0-2][0-9])([0-5][0-9])/, "$1:$2");
  return value.slice(0, 5);
};

export const masks = {
  PHONE,
  HOURS,
  ZIP_CODE,
};

export type Mask = keyof typeof masks;
