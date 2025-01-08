import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import SettingSection from "@/components/SettingSection";

export default function Home() {
  return (
    <main className="flex align-center ">
      <NavBar />
      <div className="w-full px-6">
        <Header />
        <section className="flex justify-between mt-3">
          <div>categories</div>
          <div>dea section</div>
          <SettingSection />
        </section>
      </div>
    </main>
  );
}
