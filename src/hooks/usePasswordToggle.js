import { useState } from "react";

const usePasswordToggle = (fields) => {
  const initialState = fields.reduce(
    (acc, field) => ({ ...acc, [field]: false }),
    {}
  );

  const [showPassword, setShowPassword] = useState(initialState);
  const togglePasswordVisibility = (field) => {
    setShowPassword({
      ...showPassword,
      [field]: !showPassword[field],
    });
  };
  return [showPassword, togglePasswordVisibility];
};

export default usePasswordToggle;
