import { Dua } from "@/types/dua";
import Image from "next/image";
import React from "react";
import AudioPlayer from "./AudioPlayer";

export default function DuaCard({ dua }: { dua: Dua }) {
  return (
    <div
      id={dua.dua_id.toString()}
      className="p-6 bg-white rounded-2xl mb-5 flex flex-col gap-3"
    >
      <div className="flex gap-2 items-center text-primary font-medium">
        <Image width={50} height={50} src="/assets/icons/duacard.svg" alt="" />
        <h1>
          {dua.id}. {dua.dua_name_en}
        </h1>
      </div>
      <p className=" mt-5 text-xl">{dua.top_en}</p>
      <p className=" mt-5  font-meQuran text-right text-2xl">
        {dua.dua_arabic}
      </p>
      {dua.transliteration_en && (
        <div className="flex gap-2 font-bold italic ">
          <h2>Transliteration:</h2>
          <p className="font-medium">{dua.transliteration_en}</p>
        </div>
      )}
      {dua.translation_en && (
        <div className="flex gap-2 font-bold italic">
          <h2>Translation:</h2>
          <p className="font-medium">{dua.translation_en}</p>
        </div>
      )}

      {dua.refference_en && (
        <div className="flex gap-2 font-bold  flex-col">
          <h2 className="text-primary font-normal text-xl">Reference: </h2>
          <p className="font-medium">{dua.refference_en}</p>
        </div>
      )}
      <div className="flex flex-row items-center justify-between px-6">
        {dua.audio && (
          <div className="py-4 flex flex-row items-center xs:w-full xs:gap-x-4">
            <AudioPlayer />

            <div className="hidden">
              <Image
                width={30}
                height={30}
                className="cursor-pointer w-8 opacity-60"
                alt="shuffle"
                src="/assets/memorize/suffle.svg"
              />
            </div>
          </div>
        )}
        <div className="flex items-center flex-row justify-between py-6 gap-x-8 xs:gap-x-6">
          <div id="copy" className="relative w-6">
            <Image
              width={30}
              height={30}
              className="cursor-pointer"
              src="/assets/icons/copy.svg"
              alt="copy"
            />
          </div>
          <div id="bookmark" className="relative w-6">
            <Image
              width={30}
              height={30}
              className="cursor-pointer"
              src="/assets/icons/bookmark.svg"
              alt="bookmark"
            />
          </div>
          <div id="plan" className="relative w-6">
            <Image
              width={30}
              height={30}
              className="cursor-pointer"
              src="/assets/icons/plan.svg"
              alt="plan"
            />
          </div>
          <div id="share" className="relative w-6">
            <Image
              width={30}
              height={30}
              className="cursor-pointer"
              src="/assets/icons/share.svg"
              alt="share"
            />
          </div>
          <div id="report" className="relative w-6">
            <Image
              width={30}
              height={30}
              className="cursor-pointer"
              src="/assets/icons/report.svg"
              alt="report"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
