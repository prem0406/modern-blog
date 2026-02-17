import { capitalizeFirstLetter } from "../utils/string.utils";

type CustomSelectProps<T extends string> = {
  options: T[];
  selectedOption: T | "";
  onClickOption: (option: T | "") => void;
  label?: string;
};

const CustomSelect = <T extends string>({
  options,
  selectedOption,
  onClickOption,
  label = "Select Option",
}: CustomSelectProps<T>) => {
  return (
    <div className="relative w-full max-w-sm">
      <select
        value={selectedOption}
        onChange={(e) => onClickOption(e.target.value as never)}
        className="w-full bg-blue-800 text-white border border-blue-700 rounded-lg px-8 pt-6 pb-2 focus:ring-2 focus:ring-blue-400 focus:outline-none appearance-none"
      >
        <option value="" disabled hidden></option>
        {options.map((option) => (
          <option value={option}>{capitalizeFirstLetter(option)}</option>
        ))}
      </select>

      <label
        className={`absolute left-4 transition-all duration-200 pointer-events-none
      ${
        selectedOption
          ? "top-2 text-sm text-blue-300"
          : "top-1/2 -translate-y-1/2 text-gray-300"
      }
    `}
      >
        {label}
      </label>

      {!selectedOption && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white">
          ▼
        </div>
      )}
      {/* Clear Button */}
      {selectedOption && (
        <button
          type="button"
          onClick={() => onClickOption("" as never)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-white hover:text-yellow-400"
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default CustomSelect;
