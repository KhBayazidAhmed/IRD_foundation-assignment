import Image from "next/image";
import { navBarIcons } from "@/config/nav";

export default function NavBar() {
  return (
    <div className="bg-white w-[100px] rounded-3xl px-4 flex flex-col justify-between h-[90vh] py-7 items-center overflow-y-auto gap-7">
      <Image
        width={50}
        height={50}
        src="/assets/icons/dua-logo.svg"
        alt="Dua & Ruqyah"
      />
      <div className="flex flex-col gap-7 items-center justify-between">
        {navBarIcons.map((icon) => (
          <div
            key={icon.link}
            className="flex flex-col items-center bg-lightBlue h-10 w-10 rounded-full justify-center"
          >
            <Image src={icon.src} alt={icon.link} width={20} height={20} />
          </div>
        ))}
      </div>
      <Image
        width={50}
        height={50}
        src="/assets/nav/support.svg"
        alt="support"
      />
    </div>
  );
}
