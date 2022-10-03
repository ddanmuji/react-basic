import { useState } from 'react';

type ReturnType = [boolean, () => void];

const useToggle = (initialValue: boolean): ReturnType => {
  const [value, setValue] = useState(initialValue);
  const onToggle = () => setValue((prev) => !prev);

  return [value, onToggle];
};

export default useToggle;
