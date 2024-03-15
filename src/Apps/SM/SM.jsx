import React, { useState } from "react";
import Page_Title from "../../Components/Page_Title";
function SM() {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState(0);
  const [inputType, setInputType] = useState("ثنائي");
  const [outputType, setOutputType] = useState("عشري");
  const [isNum, setIsNum] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    const regex = /^[0-9\b]+$/; // Only allow numbers and backspace (\b)

    // If the input matches the regex pattern or it's an empty string, update the state
    if (value === "" || regex.test(value)) {
      setIsNum(false);
      setInputValue(value);
    } else {
      setIsNum(true);
    }
  };

  const handleConversion = () => {
    let result;
    const inputValueParsed = parseInt(inputValue, inputType);
    switch (outputType) {
      case "ثنائي":
        result = inputValueParsed.toString(2);
        break;
      case "سداسي عشري":
        result = inputValueParsed.toString(16);
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

  const outputTypeOptions = ["ثنائي", "سداسي عشري", "ثماني", "عشري"].filter(
    (type) => type !== inputType
  );

  const handleRemoveResult = () => {
    setOutputValue("");
    setInputValue("");
  };
  return (
    <div dir="rtl">
      <Page_Title title="Systeme Machine" />
      <div className="flex flex-col items-center justify-center">
        <div className=" text-center text-xl max-md:flex-col  my-5 flex gap-5">
          <div>
            <div className="my-1">التحويل من </div>
            <select
              value={inputType}
              onChange={(e) => setInputType(e.target.value)}
              className="border   border-gray-500 rounded-md px-2 py-1 mr-2"
            >
              <option value="ثنائي">ثنائي</option>
              <option value="سداسي عشري">سداسي عشري</option>
              <option value="ثماني">ثماني</option>
              <option value="عشري">عشري</option>
            </select>
          </div>
          <div>
            <div className="my-1"> التحويل الى </div>
            <select
              value={outputType}
              onChange={(e) => setOutputType(e.target.value)}
              className="border  border-gray-500 rounded-md px-2 py-1"
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
          pattern="[0-9]*" // Only allows numbers
          inputMode="numeric"
        />
        {isNum && (
          <div className="text-red-500 font-bold"> يجب ان يكون الرقم </div>
        )}
        <div className="my-5 text-2xl text-center   font-bold ">
          {" "}
          النتيجة
          <div className="min-w-[80%]  h-fit min-h-10 px-5  bg-slate-400">
            {outputValue || ""}
          </div>
        </div>

        <div className="flex  max-md:w-[80%] max-md:flex-col gap-2  ">
          <button
            disabled={inputValue === ""}
            onClick={handleConversion}
            className="bg-blue-500 max-md:w-full text-white px-4 py-2 rounded-md "
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
