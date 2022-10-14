import { useContext } from "react";
import { CalContext } from "../context/calcContext";

const getStyleName = (btn) => {
  const className = {
    "=": "equals",
    x: "opt",
    "-": "opt",
    "+": "opt",
    "/": "opt",
  };

  return className[btn];
};

const Button = ({ value }) => {
  const { Calc, setCalc } = useContext(CalContext);

  // User click comma
  const commaClick = () => {
    setCalc({
      ...Calc,
      num: !Calc.num.toString().includes(".") ? Calc.num + value : Calc.num,
    });
  };
  // user click C

  const resetClick = () => {
    setCalc({ sign: "", num: 0, res: 0 });
  };

  // user clicks numbers
  const handleClickButton = () => {
    const numberString = value.toString();

    let numberValue;
    if (numberString === "0" && Calc.num === 0) {
      numberValue = "0";
    } else {
      numberValue = Number(Calc.num + numberString);
    }

    setCalc({
      ...Calc,
      num: numberValue,
    });
  };

  // user click operation

  const signClick = () => {
    setCalc({
      sign: value,
      res: !Calc.res && Calc.num ? Calc.num : Calc.res,
      num: 0,
    });
  };

  // user click equals

  const equalsClick = () => {
    if (Calc.res && Calc.num) {
    }
    const Math = (a, b, sign) => {
      const result = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        x: (a, b) => a * b,
        "/": (a, b) => a / b,
      };
    return result[sign](a, b);
    };

    setCalc({
      res: Math(Calc.res, Calc.num, Calc.sign),
      sign: "",
      num: 0,
    });
  };

  const handleBtnClick = () => {
    const results = {
      ".": commaClick,
      C: resetClick,
      "/": signClick,
      x: signClick,
      "-": signClick,
      "+": signClick,
      "=": equalsClick,
    };
    if (results[value]) {
      return results[value]();
    } else {
      return handleClickButton();
    }
  };
  return (
    <button
      onClick={handleBtnClick}
      className={`${getStyleName(value)} button`}
    >
      {value}
    </button>
  );
};

export default Button;
