"use client";
import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";

const DateTime = () => {
  const isMobile = useMediaQuery("(max-width: 1200px)");
  var [date, setDate] = useState(new Date());
  var [timerText, setTimerText] = useState("");
  let str = "\u00B7";
  let emp = "";
  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()));
    return function cleanup() {
      clearInterval(timer);
    };
  });
  useEffect(() => {
    setTimerText(
      date.getUTCFullYear() +
        " " +
        (date.getUTCMonth() + 1).toString().padStart(2, "0") +
        " " +
        date.getUTCDate() +
        " " +
        (!isMobile ? str + " " : "") +
        (date.getUTCHours() + 1).toString().padStart(2, "0") +
        ":" +
        date.getUTCMinutes().toString().padStart(2, "0") +
        ":" +
        date.getUTCSeconds().toString().padStart(2, "0") +
        ":" +
        date.getUTCMilliseconds().toString().padStart(3, "0")
    );
  }, [date, isMobile, str]);
  return (
    <div className="flex text-red-500 font-mono md:text-right">
      <small className="px-0 md:px-2">{timerText}</small>
    </div>
  );
};

export default DateTime;
