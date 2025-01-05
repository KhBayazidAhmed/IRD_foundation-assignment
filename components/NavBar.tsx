import Image from "next/image";
import duaLogo from "@/public/assets/icons/dua-logo.svg";
import supportIcon from "@/public/assets/nav/support.svg";
import { navBarIcons } from "@/config/nav";

export default function NavBar() {
  return (
    <div className="bg-white w-[100px] rounded-3xl px-4 flex flex-col justify-between h-[90vh] py-7 items-center overflow-y-auto gap-7">
      <Image src={duaLogo} alt="Dua & Ruqyah" />
      <div className="flex flex-col gap-7 items-center justify-between">
        {navBarIcons.map((icon) => (
          <div
            key={icon.link}
            className="flex flex-col items-center bg-light-blue h-10 w-10 rounded-full justify-center"
          >
            <Image src={icon.src} alt={icon.link} width={20} height={20} />
          </div>
        ))}
      </div>
      <Image src={supportIcon} alt="support" />
    </div>
  );
}
