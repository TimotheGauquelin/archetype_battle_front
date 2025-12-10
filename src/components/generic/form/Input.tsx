import { useCallback, memo } from 'react';

interface InputProps {
  label: string;
  required: boolean;
  inputType: string;
  inputName: string;
  colSpanWidth: string;
  attribute: string;
  data: string;
  setAction: (value: any) => void;
  placeholder?: string;
  min?: number;
  max?: number;
  disabled: boolean;
}

export const Input = memo(
  ({
    label,
    required,
    inputType,
    inputName,
    colSpanWidth,
    attribute,
    data,
    setAction,
    placeholder,
    min,
    max,
    disabled,
  }: InputProps) => {
    console.log('Input');

    const handleChange = useCallback(
      (e: any) => {
        setAction((prevState: any) => ({
          ...prevState,
          [attribute]: e.target.value,
        }));
      },
      [setAction, attribute]
    );

    const inputValue =
      typeof data === 'object' && data !== null
        ? data[attribute] || ''
        : data || '';

    return (
      <div className={`flex flex-col col-span-${colSpanWidth}`}>
        {label && (
          <label className="mt-2 font-medium">
            {label}:{' '}
            {required && <span className="text-red-500 font-bold">*</span>}
          </label>
        )}
        <input
          required={required}
          placeholder={placeholder}
          className={`p-2 bg-gray-100 rounded-md ${disabled ? 'opacity-50 hover:outline-none' : 'hover:opacity-90 hover:outline hover:outline-2 hover:outline-black'}`}
          min={min}
          max={max}
          type={inputType}
          name={inputName}
          value={inputValue}
          onChange={handleChange}
          disabled={disabled ? true : false}
        />
      </div>
    );
  }
);
