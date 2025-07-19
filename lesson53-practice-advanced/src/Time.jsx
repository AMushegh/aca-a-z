import { useEffect, useState } from "react";

export const Time = () => {
  const [hours, setHours] = useState(new Date().getHours());
  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const [seconds, setSeconds] = useState(new Date().getSeconds());

  useEffect(() => {
    let itnervalId = setInterval(() => {
      console.log("Updating time");
      const now = new Date();
      setHours(now.getHours());
      setMinutes(now.getMinutes());
      setSeconds(now.getSeconds());
    }, 1000);

    return () => {
      console.log("Cleaning up interval");
      clearInterval(itnervalId);
    };
  }, []);

  return (
    <div>
      {hours}:{minutes}:{seconds}
    </div>
  );
};
