import { useSearchParams } from "next/navigation";
import { use, useEffect } from "react";
import Image from "next/image";
import { Dua } from "@/types/dua";

interface SubCategory {
  id: number;
  cat_id: number;
  subcat_id: number;
  subcat_name_bn: string;
  subcat_name_en: string;
  no_of_dua: number;
}

export default function SubCategories({
  subCat,
  categoryId,
  categoryName,
  dua,
}: {
  subCat: Promise<SubCategory[]>;
  dua: Promise<Dua[]>;
  categoryId: number;
  categoryName: string;
}) {
  const subCate = use(subCat);
  const duas = use(dua);
  const dua_id = useSearchParams().get("dua_id");
  const filteredSubCats = subCate.filter((sub) => sub.cat_id === categoryId);
  const searchParams = useSearchParams();
  const subCatId = searchParams.get("subcat_id");

  useEffect(() => {
    if (dua_id) {
      const target = document.getElementById(`${dua_id}`);
      target?.scrollIntoView({ behavior: "smooth" });
    }
  }, [dua_id]);

  return (
    <div className="flex flex-col gap-2 border-l-2 border-dotted border-primary ml-3 pl-4">
      {filteredSubCats.map((sub) => (
        <div key={sub.id}>
          <div className="bg-primary translate-y-4 -translate-x-5 mt-1.5 w-1.5 rounded-full h-1.5"></div>
          <div
            className="cursor-pointer"
            onClick={() => {
              window.history.pushState(
                null,
                "",
                `/duas/${categoryName.replaceAll(
                  " ",
                  "_"
                )}?cat_id=${categoryId}&subcat_id=${sub.subcat_id}`
              );
            }}
          >
            {sub.subcat_name_en}
          </div>
          {subCatId === sub.subcat_id.toString() && (
            <div className="flex flex-col gap-3 pt-3">
              {duas
                .filter(
                  (dua) =>
                    dua.subcat_id === sub.subcat_id && dua.cat_id === categoryId
                )
                .map(
                  (dua, i) =>
                    dua.dua_name_en && (
                      <div key={i} className="flex items-center gap-2">
                        <Image
                          width={16}
                          height={10}
                          src="/assets/icons/duaarrow.svg"
                          alt=""
                        />
                        <div
                          onClick={() => {
                            window.history.pushState(
                              null,
                              "",
                              `/duas/${categoryName.replaceAll(
                                " ",
                                "_"
                              )}?cat_id=${categoryId}&subcat_id=${
                                sub.subcat_id
                              }&dua_id=${dua.dua_id}`
                            );
                          }}
                          className={`text-sm cursor-pointer ${
                            dua.dua_id.toString() === dua_id
                              ? "text-primary"
                              : "text-secondary"
                          }`}
                        >
                          {dua.dua_name_en}
                        </div>
                      </div>
                    )
                )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
