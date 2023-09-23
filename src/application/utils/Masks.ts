const PHONE = (value: string) => {
  if (!value) return "";
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
  value = value.replace(/(\d{4})(\d{1,4})$/, "$1-$2");
  return value;
};

export const masks = {
  PHONE,
};

export type Mask = keyof typeof masks;
