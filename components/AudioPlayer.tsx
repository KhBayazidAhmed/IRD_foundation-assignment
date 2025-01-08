import Image from "next/image";

export default function AudioPlayer() {
  return (
    <div>
      <div className="flex flex-row items-center gap-x-3 xs:w-full">
        <Image
          width={40}
          height={40}
          className="cursor-pointer xs:w-8"
          src="/assets/icons/audiobtn.svg"
          alt="Audio button"
        />
        <input
          className="hidden"
          type="range"
          min="0"
          max="100"
          defaultValue="0"
        />
      </div>
    </div>
  );
}
