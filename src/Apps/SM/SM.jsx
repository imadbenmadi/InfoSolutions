import React, { useState } from "react";
import PageTitle from "../../Components/Page_Title";

function SM() {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("0");
  const [inputType, setInputType] = useState("binary");
  const [outputType, setOutputType] = useState("decimal");
  const [isNumValid, setIsNumValid] = useState(true);

  const handleInputChange = (e) => {
    const value = e.target.value;
    const regexDecimal = /^[0-9\b]+$/; // Only allow decimal numbers and backspace (\b)
    const regexHex = /^[0-9A-Fa-f\b]+$/; // Only allow hexadecimal numbers and backspace (\b)

    if (
      value === "" ||
      (inputType === "binary" && regexDecimal.test(value)) ||
      (inputType === "hexadecimal" && regexHex.test(value))
    ) {
      setIsNumValid(true);
      setInputValue(value);
    } else {
      setIsNumValid(false); // Invalid input
    }
  };

  const handleConversion = () => {
    let result;
    const inputValueParsed = parseInt(inputValue, getInputBase());
    switch (outputType) {
      case "binary":
        result = inputValueParsed.toString(2);
        break;
      case "hexadecimal":
        result = inputValueParsed.toString(16).toUpperCase();
        break;
      case "octal":
        result = inputValueParsed.toString(8);
        break;
      case "decimal":
        result = inputValueParsed.toString(10);
        break;
      default:
        result = "";
    }
    setOutputValue(result);
  };

  const getInputBase = () => {
    switch (inputType) {
      case "binary":
        return 2;
      case "hexadecimal":
        return 16;
      case "octal":
        return 8;
      case "decimal":
        return 10;
      default:
        return 10;
    }
  };

  const outputTypeOptions = ["ثنائي", "السادس عشري", "ثماني", "عشري"].filter(
    (type) => type !== inputType
  );

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
              <option value="binary">ثنائي</option>
              <option value="hexadecimal">السادس عشر</option>
              <option value="octal">ثماني</option>
              <option value="decimal">العشري</option>
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
