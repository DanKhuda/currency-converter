export const validateData = (data) => {
  const numbers = /^\d*\.?(?:\d{1,2})?$/;
  if (!data.match(numbers)) {
    return false;
  }
  return true;
};
