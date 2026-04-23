import SimpleForm from "./components/SimpleForm";
import InputNumber from "./components/InputNumber";
import ExpandableText from "./components/ExpandableText";
import "./App.css";

function App() {
  // Текст дмитрий уткин
  const longText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  return (
    <div className="App">
      <h1>компоненты</h1>

      {/* Блок для первого задания */}
      <div className="task-container">
        <h2>Задание 1: Форма с useRef</h2>
        <p>
          Введите любое значение в поле и нажмите кнопку. Результат появится в
          консоли разработчика (F12).
        </p>
        <SimpleForm />
      </div>

      {/* Блок для второго задания */}
      <div className="task-container">
        <h2>Задание 2: Проверка числа</h2>
        <p>
          Введите положительное или отрицательное число, и ниже появится
          соответствующее сообщение.
        </p>
        <InputNumber />
      </div>

      {/* Блок для третьего задания */}
      <div className="task-container">
        <h2>Задание 3: Скрытый текст</h2>
        <p>Нажмите на кнопку, чтобы показать или скрыть полный текст.</p>
        <ExpandableText text={longText} />
      </div>
    </div>
  );
}

export default App;
