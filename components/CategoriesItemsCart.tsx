import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import SubCategories from "./SubCategories";
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

export default function CategoriesItemsCart({
  items,
  subCat,
  dua,
}: {
  items: Category[];
  subCat: Promise<SubCategory[]>;
  dua: Promise<Dua[]>;
}) {
  const searchParams = useSearchParams();
  const catId = searchParams.get("cat_id");

  useEffect(() => {
    if (catId) {
      const target = document.getElementById(`category-${catId}`);
      target?.scrollIntoView({ behavior: "smooth" });
    }
  }, [catId]);

  return (
    <div className="flex flex-col overflow-y-auto h-[70vh] gap-2 px-3">
      {items.map((item) => (
        <div key={item.id} id={`category-${item.id}`}>
          <Link
            href={`/duas/${item.cat_name_en.replaceAll(" ", "_")}?cat_id=${
              item.cat_id
            }`}
          >
            <div className="flex gap-4 items-center p-2 bg-lightBlue rounded-xl w-full">
              <div className="bg-veryLightGray rounded-md w-14 h-14 flex items-center justify-center">
                <Image
                  width={30}
                  height={30}
                  src={`/assets/icons/${item.cat_icon.replaceAll(
                    " ",
                    "_"
                  )}.svg`}
                  alt={`${item.cat_name_en} Icon`}
                />
              </div>
              <div>
                <h2>{item.cat_name_en}</h2>
                <p className="text-sm text-secondary">
                  Subcategories: {item.no_of_subcat}
                </p>
              </div>
              <div className="ml-auto text-right">
                <h2>{item.no_of_dua}</h2>
                <p className="text-xs text-secondary">Duas</p>
              </div>
            </div>
          </Link>
          {catId === item.cat_id.toString() && (
            <SubCategories
              dua={dua}
              subCat={subCat}
              categoryId={item.cat_id}
              categoryName={item.cat_name_en}
            />
          )}
        </div>
      ))}
    </div>
  );
}
