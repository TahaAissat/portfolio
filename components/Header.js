import { defineLanguage } from "../reducers/language";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Popover } from "react-tiny-popover";
import Image from "next/image";
function Header() {
  const dispatch = useDispatch();
  const [isPopoverOpen, setIsPopoeverOpen] = useState(false);
  const language = useSelector((state) => state.language.value);
  let data = {};
  const engData = {
    m1: "About",
    m2: "Projects",
    m3: "Resume",
  };
  const frData = {
    m1: "A propos",
    m2: "Projets",
    m3: "CV",
  };
  if (language === "english") {
    data = engData;
  } else {
    data = frData;
  }

  return (
    <div className="w-screen h-36 flex flex-row-reverse justify-start items-center pr-12 ">
      <Popover
        isOpen={isPopoverOpen}
        position={["bottom", "left", "right", "top"]}
        onClickOutside={() => setIsPopoeverOpen(false)}
        padding={10}
        content={
          <div className="flex flex-col w-hit h-fit bg-white p-2 rounded">
            <Image
              src="/france.png"
              width={30}
              height={30}
              onClick={() => {
                dispatch(defineLanguage("french")), setIsPopoeverOpen(false);
              }}
            />
            <Image
              src="/united-kingdom.png"
              width={30}
              height={30}
              onClick={() => {
                dispatch(defineLanguage("english")), setIsPopoeverOpen(false);
              }}
            />
          </div>
        }
      >
        <button
          className="text-white"
          onClick={() => setIsPopoeverOpen(!isPopoverOpen)}
        >
          {language === "english" ? (
            <Image src="/united-kingdom.png" width={30} height={30} />
          ) : (
            <Image src="/france.png" width={30} height={30} />
          )}
        </button>
      </Popover>
      <div className="flex flex-row justify-evenly w-1/2 pl-72">
        <ul className="text-white flex flex-row  items-center space-x-10">
          <li>{data.m1}</li>
          <li>{data.m2}</li>
          <li>{data.m3}</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
