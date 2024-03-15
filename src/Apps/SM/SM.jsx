import { useEffect, useState } from "react";
import PageTitle from "../../Components/Page_Title";

function SM() {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("0");
  const [inputType, setInputType] = useState("ثنائي"); // Default input type
  const [outputType, setOutputType] = useState(""); // Initially empty output type
  const [isNumValid, setIsNumValid] = useState(true);

  const handleInputChange = (e) => {
    const value = e.target.value;
    const regexBinary = /^[01\b]+$/; // Allow only binary numbers (0, 1, and backspace)
    const regexHex = /^[0-9A-F\b]+$/; // Allow only hexadecimal numbers (0-9, A-F, and backspace)
    const regexOctal = /^[0-7\b]+$/; // Allow only octal numbers (0-7 and backspace)

    let isValidInput = true;

    switch (inputType) {
      case "ثنائي":
        isValidInput = regexBinary.test(value);
        break;
      case "السادس عشري":
        isValidInput = regexHex.test(value.toUpperCase()); // Convert to uppercase for correct validation
        break;
      case "ثماني":
        isValidInput = regexOctal.test(value);
        break;
      default:
      // No specific validation for other input types (e.g., decimal)
    }

    if (value === "" || isValidInput) {
      setIsNumValid(true);
      setInputValue(value);
    } else {
      setIsNumValid(false);
    }
  };

  const handleConversion = () => {
    if (inputValue === "") {
      return; // Handle empty input gracefully
    }

    const inputValueParsed = parseInt(inputValue, getInputBase()); // Ensure correct base conversion
    let result;

    switch (outputType) {
      case "ثنائي":
        result = inputValueParsed.toString(2);
        break;
      case "السادس عشري":
        result = inputValueParsed.toString(16).toUpperCase(); // Ensure uppercase output
        break;
      case "ثماني":
        result = inputValueParsed.toString(8);
        break;
      case "عشري":
        result = inputValueParsed.toString(10);
        break;
      default:
        result = "";
    }

    setOutputValue(result);
  };

  const getInputBase = () => {
    switch (inputType) {
      case "ثنائي":
        return 2;
      case "السادس عشري":
        return 16;
      case "ثماني":
        return 8;
      case "عشري":
        return 10;
      default:
        return 10; // Default base for other input types
    }
  };

  const [outputTypeOptions, setOutputTypeOptions] = useState([
    "ثنائي",
    "السادس عشري",
    "ثماني",
    "عشري",
  ]);

  useEffect(() => {
    setOutputTypeOptions(
      ["ثنائي", "السادس عشري", "ثماني", "عشري"].filter(
        (type) => type !== inputType
      )
    );
  }, [inputType]);

  const handleRemoveResult = () => {
    setOutputValue("0");
    setInputValue("");
  };

  return (
    <div dir="rtl">
      <PageTitle title="Systeme Machine" />
      <div className="flex flex-col items-center justify-center">
        <div className="text-center text-xl max-md:flex-col my-5 flex gap-5">
          <div>
            <div className="my-1">تحويل من </div>
            <select
              value={inputType}
              onChange={(e) => setInputType(e.target.value)}
              className="border border-gray-500 rounded-md px-2 py-1 mr-2"
            >
              <option value="ثنائي">ثنائي</option>
              <option value="السادس عشري">السادس عشري</option>
              <option value="ثماني">ثماني</option>
              <option value="عشري">العشري</option>
            </select>
          </div>
          <div>
            <div className="my-1">التحويل الى </div>
            <select
              value={outputType}
              onChange={(e) => setOutputType(e.target.value)}
              className="border border-gray-500 rounded-md px-2 py-1"
            >
              {outputTypeOptions.map((type) => (
                <option key={type} value={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="border border-gray-500 rounded-md px-2 py-1 mb-2"
          placeholder="ادخل الرقم هنا"
        />
        {!isNumValid && <div className="text-red-500 font-bold"> غير صالح</div>}
        <div className="my-5 text-2xl text-center font-bold">
          النتيجة
          <div className="min-w-[80%] h-fit min-h-10 px-5 bg-slate-200">
            {isNaN(outputValue) ? "0" : outputValue}
          </div>
        </div>
        <div className="flex max-md:w-[80%] max-md:flex-col gap-2">
          <button
            disabled={inputValue === ""}
            onClick={handleConversion}
            className="bg-blue-500 max-md:w-full text-white px-4 py-2 rounded-md"
          >
            تحويل
          </button>
          <button
            onClick={handleRemoveResult}
            className="bg-red-500 text-white px-4 py-2 rounded-md"
          >
            حذف
          </button>
        </div>
      </div>
    </div>
  );
}

export default SM;
