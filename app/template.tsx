import CategoriesSection from "@/components/CategoriesSection";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import SettingSection from "@/components/SettingSection";
import { runQuery } from "@/DB/queryRunner";

export default async function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = runQuery("SELECT * FROM category");
  const subCat = runQuery("SELECT * FROM sub_category");
  const dua = runQuery(
    "SELECT cat_id, subcat_id, dua_id, dua_name_en FROM dua id"
  );
  return (
    <main className="flex align-center">
      <NavBar />
      <div className="w-full px-6">
        <Header />
        <section className="flex justify-between mt-3 h-[84vh] gap-2 ">
          <CategoriesSection subCat={subCat} data={data} dua={dua} />
          <div className=" w-full rounded-md">{children}</div>
          <SettingSection />
        </section>
      </div>
    </main>
  );
}
