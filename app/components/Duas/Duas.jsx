import { useEffect, useState } from "react";

const Duas = ({cat_id,subcat_id}) => {
  const [duas, setDuas] = useState([]);

  useEffect(() => {
    fetch(`/api/category/${cat_id}/${subcat_id}`) // Update the route accordingly
      .then((response) => response.json())
      .then((data) => setDuas(data))
      .catch((error) => console.error("Error fetching duas:", error));
  }, []);
  return (
    <>
          {duas.map(each => (
              <div key={each.dua_id} className="mt-2 cursor-pointer">
              {/* <a href="#"> */}
                <div className="flex flex-row">
                  <img
                    src="https://duaruqyah.com/assets/duaarrow.svg"
                    alt=""
                    className="-translate-y-1 mr-2"
                  />
                  <p className="text-sm my-3 text-left w-[95%] font-medium">
                    {each.dua_name_bn}
                  </p>
                </div>
              {/* </a> */}
            </div>
          ))
          
          }
    </>
  )
}

export default Duas