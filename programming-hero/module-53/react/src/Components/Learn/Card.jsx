/* eslint-disable react/prop-types */
import { SiDictionarydotcom } from "react-icons/si";
import { RiSpeakFill, RiBook3Fill } from "react-icons/ri";
import { AiFillSound } from "react-icons/ai";
import { Gi3dStairs } from "react-icons/gi";
import { useEffect, useState } from "react";

const Card = ({ card }) => {
  // state for color
  const [color, setColor] = useState("");
  const [btnColor, setBtnColor] = useState("");

  const {
    word,
    pronunciation,
    meaning,
    part_of_speech,
    difficulty,
    when_to_say,
    example,
  } = card;

  //check difficulty
  useEffect(() => {
    if (difficulty === "easy") {
      setColor("bg-[#d3e3f0]");
      setBtnColor(
        "hover:bg-[#76a2c7] hover:text-white hover:border-transparent"
      );
    } else if (difficulty === "medium") {
      setColor("bg-[#ddd2f5]");
      setBtnColor(
        "hover:bg-[#9e7ddd] hover:text-white hover:border-transparent"
      );
    } else {
      setColor("bg-[#fad4d3]");
      setBtnColor(
        "hover:bg-[#fd7e7f] hover:text-white hover:border-transparent"
      );
    }
  }, [difficulty]);

  //pronounce
  const pronounceWord = (word) => {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "ja-JP"; // Japanese
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div>
      <div
        className={`text-xl w-full h-[450px] content-center rounded-xl px-5 hover:shadow-xl cursor-pointer lg:tooltip transition-all duration-300 ${color}`}
        data-tip="Click Card for Pronunciation"
        onClick={() => pronounceWord(pronunciation)}
      >
        <div>
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center">{word}</h2>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <SiDictionarydotcom />
                Meaning: {meaning}
              </p>
              <p className="flex items-center gap-2">
                <RiSpeakFill />
                Pronunciation: {pronunciation}
              </p>
              <p className="flex items-center gap-2">
                <RiBook3Fill />
                Part of speech : {part_of_speech}
              </p>
              <p className="flex items-center gap-2">
                <Gi3dStairs />
                Difficulty: {difficulty}
              </p>
            </div>
          </div>
          <div className="text-center mt-10">
            <button
              className={`btn btn-outline flex items-center text-xl h-14 w-full ${btnColor}`}
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              <AiFillSound /> When to Say
            </button>
          </div>
        </div>
      </div>

      {/* modal */}
      <dialog id="my_modal_5" className="modal modal-bottom md:modal-middle">
        <div className="modal-box rounded-none md:rounded-2xl space-y-5 py-10 text-lg">
          <h2 className="text-3xl font-bold text-center pt-5">{word}</h2>
          <p className="flex items-center gap-2">
            <SiDictionarydotcom size={23} />
            Meaning: {meaning}
          </p>

          <p className="flex items-center gap-2">
            <RiSpeakFill size={30} />
            When to say: {when_to_say}
          </p>

          <p className="flex items-center gap-2">Example: {example}</p>
          <div className="modal-action justify-center">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn custom-btn h-14 text-lg font-bold px-16">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Card;
