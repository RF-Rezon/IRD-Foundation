import { useEffect, useState } from "react";
import Duas from "../Duas/Duas";

const Subcategories = ({cat_id}) => {
  const [subCategories, setSubCategories] = useState([]);
  const [openDuas, setOpenDuas] = useState(false);
  
  useEffect(() => {
    fetch(`/api/category/${cat_id}`) // Update the route accordingly
      .then((response) => response.json())
      .then((data) => setSubCategories(data))
      .catch((error) => console.error("Error fetching sub-categories:", error));
  }, []);

  const handleOpenDuas = ()=> {
    setOpenDuas(true)
  }
  return (
    <>
    {subCategories?.map(each => (
        <div key={each.subcat_id} onClick={handleOpenDuas} className="ml-12 border-l-2 border-dotted my-2 border-cumtomGreen">
        <div className="flex border-dotted flex-col justify-start items-start gap-y-2 ml-3">
          <div className="flex flex-row my-2">
            <div className="bg-cumtomGreen -translate-x-4 mt-1.5 w-1.5 rounded-full h-1.5"></div>
            <div className="flex flex-col justify-start items-start">
              {/* <a href=""> */}
                <p className="cursor-pointer font-medium text-left text-sm text-cumtomGreen">
                  {each.subcat_name_bn}
                </p>
              {/* </a> */}
             {openDuas && (<Duas cat_id={cat_id} subcat_id={each.subcat_id}/>)}
            </div>
          </div>
        </div>
      </div>
     ))} 
    </>
  )
}

export default Subcategories