import { useState } from 'react';

const Toggle = () => {
  const [isToggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled(!isToggled);
  };

  return (
    <div>
      <button
        className={`relative rounded-full w-14 h-8 transition-colors duration-300 ${
          isToggled ? 'bg-green-500' : 'bg-green-200'
        }`}
        onClick={handleToggle}
      >
        <span
          className={`block w-6 h-6 rounded-full transform transition-transform duration-300 ${
            isToggled
              ? 'translate-x-6 bg-white'
              : 'translate-x-0 bg-green-400'
          }`}
        />
      </button>
      {isToggled && (
        <p className="text-green-700 mt-2">
          The toggle is on!
        </p>
      )}
    </div>
  );
};

export default Toggle;
