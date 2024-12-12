import { useEffect, useState } from "react";


export default function OutsideClick(refs) {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      const isOutside = refs.every(
        (ref) => ref.current && !ref.current.contains(event.target)
      );
      setIsClicked(isOutside);
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refs]);

  return isClicked;
}
