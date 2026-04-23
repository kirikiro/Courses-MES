import { useState } from 'react';

const Message = ({ number }) => {
  if (number === '') {
    return <p>Введите число, чтобы увидеть результат.</p>;
  }

  const numValue = Number(number);

  if (isNaN(numValue)) {
     return <p>Пожалуйста, введите корректное число.</p>;
  }

  if (numValue > 0) {
    return <p>Число больше нуля</p>;
  } else if (numValue < 0) {
    return <p>Число меньше нуля</p>;
  } else {
    return <p>Число равно нулю</p>;
  }
};

const InputNumber = () => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <label>
        Введите число:
        <input
          type="number"
          value={value}
          onChange={handleChange}
          style={{ marginLeft: '10px', padding: '5px' }}
          placeholder="Например, -5 или 10"
        />
      </label>
      <Message number={value} />
    </div>
  );
};

export default InputNumber;