import { useRef } from 'react';

const SimpleForm = () => {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputRef.current) {
      console.log('Значение из useRef:', inputRef.current.value);
      alert(`Значение "${inputRef.current.value}" выведено в консоль (Нажмите F12)`);
      inputRef.current.value = '';
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Текст для консоли:
        <input 
          type="text" 
          ref={inputRef} 
          style={{ marginLeft: '10px', marginRight: '10px' }} 
          placeholder="Введите что-нибудь..."
        />
      </label>
      <button type="submit">Отправить в консоль</button>
    </form>
  );
};

export default SimpleForm;