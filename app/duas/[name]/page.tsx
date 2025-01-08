import DuaCard from "@/components/DuaCard";
import { runQuery } from "@/DB/queryRunner";
import { Dua } from "@/types/dua";

interface Category {
  id: number;
  cat_id: number;
  cat_name_bn: string;
  cat_name_en: string;
  no_of_subcat: number;
  no_of_dua: number;
  cat_icon: string;
}

interface SubCategory {
  id: number;
  cat_id: number;
  subcat_id: number;
  subcat_name_bn: string;
  subcat_name_en: string;
  no_of_dua: number;
}
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;
export const revalidate = 100000;
export async function generateStaticParams() {
  const data = (await runQuery("SELECT * FROM category")) as Category[];

  return [
    ...data.map((item) => ({
      name: item.cat_name_en,
    })),
  ];
}

export default async function page({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const catId = params?.cat_id as string | undefined;
  const data = (await runQuery(
    `SELECT * FROM dua WHERE cat_id = ${catId}`
  )) as Dua[];
  const subCat = (await runQuery(
    `SELECT * FROM sub_category WHERE cat_id = ${catId}`
  )) as SubCategory[];
  return (
    <div className="h-[84vh] overflow-auto">
      {subCat.map((item) => (
        <div key={item.id}>
          <div className="flex undefined mb-5  rounded-xl flex-row bg-white rounded-2lg px-5 py-4 justify-start items-center dark:bg-dark-bg">
            <p className="text-title font-medium leading-[25px] dark:text-dark-text text-mss style-Kalpurush ">
              <span className="text-primary  font-medium leading-[25px] text-mss style-Kalpurush">
                Section:{" "}
              </span>
              {item.subcat_name_en}
            </p>
          </div>
          {data
            .filter((element) => item.subcat_id === element.subcat_id)
            .map(
              (item, i) => item.dua_name_en && <DuaCard key={i} dua={item} />
            )}
        </div>
      ))}
    </div>
  );
}
