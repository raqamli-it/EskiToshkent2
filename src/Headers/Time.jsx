import { useEffect, useState } from "react";

function Time() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    const hh = String(time.getHours()).padStart(2, "0");
    const mm = String(time.getMinutes()).padStart(2, "0");
    const ss = String(time.getSeconds()).padStart(2, "0");
    return `${hh}:${mm}:${ss}`;
  };

  return (
    <div className="text-white text-[20px] xl:text-[18px] lg:text-[16px] md:w-full">
      {formatTime(time)} PM
    </div>
  );
}

export default Time;
