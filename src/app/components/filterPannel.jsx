import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { categories } from "@/data/shared";
import { brands } from "@/data/shared";
function FilterPannel() {
  return (
    <div className=" bg-light-black rounded-2xl p-4 space-y-6">
      <div className="flex items-center justify-between">
        <p className=" text-main font-bold">Filter</p>
        <Button className=" cursor-pointer text-main flex items-center gap-2 border-none hover:gap-3 transition-all duration-300 bg-transparent hover:bg-transparent">
          <RiDeleteBin6Fill />
          Clear Filter
        </Button>
      </div>
      <div className=" space-y-4">
        <div className=" space-y-4 bg-black rounded-2xl p-4">

        <h3 className=" text-main font-bold">Category</h3>
        {categories.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <Checkbox id="terms" className={" border border-white"} />
              <Label htmlFor="terms" className={"text-white"}>
                {item}
              </Label>
            </div>
          ))
        }
        </div>
        <div className=" space-y-4 bg-black rounded-2xl p-4">
                   <h3 className=" text-main font-bold">Brands</h3>
        {brands.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <Checkbox id="terms" className={" border border-white"} />
              <Label htmlFor="terms" className={"text-white"}>
                {item}
              </Label>
            </div>
          ))
        } 
        </div>

      </div>
    </div>
  );
}

export default FilterPannel;
