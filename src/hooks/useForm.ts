import { useState } from "react";

const useForm = (initialValues: any) => {
  const [form, setForm] = useState(initialValues);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const resetForm = () => {
    setForm(initialValues);
  };

  return [form, onChange, resetForm];
};

export default useForm;
