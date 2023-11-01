export const getFormData = (e) => {
  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);

  return formProps;
};
