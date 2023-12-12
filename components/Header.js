import { defineLanguage } from "../reducers/language";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Popover } from "react-tiny-popover";
import Image from "next/image";
import Contact from "./Contact";
import CV from "./CV";

function Header() {
  const dispatch = useDispatch();
  const [isPopoverOpen, setIsPopoeverOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false)
  const language = useSelector((state) => state.language.value);
  let data = {};
  const engData = {
    m2: "Projects",
    m3: "Resume",
  };
  const frData = {
    m2: "Projets",
    m3: "CV",
  };
  if (language === "english") {
    data = engData;
  } else {
    data = frData;
  }

  const handleSend = () => {
    setIsModalOpen(false)
  }
  const handleClose = () => {
    setIsCVModalOpen(false)
  }

  return (
    <div className="w-screen h-36 flex flex-row-reverse justify-start items-center pr-8 ">
      <Popover
        isOpen={isPopoverOpen}
        positions={["bottom", "left", "right", "top"]}
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
      <div className="flex flex-row justify-evenly w-1/2 pl-96">
        <ul className="text-white flex flex-row  items-center space-x-10">
          <li
            className="hover:text-cyan-400 cursor-pointer"
            onClick={() => setIsCVModalOpen(true)}
          >
            {data.m3}
          </li>

          <li
            className="hover:text-cyan-400 cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            Contact
          </li>
        </ul>
        {isModalOpen ? <Contact handleSend={handleSend} /> : null}
        {isCVModalOpen ? <CV handleClose={handleClose} /> : null}
      </div>
    </div>
  );
}

export default Header;
