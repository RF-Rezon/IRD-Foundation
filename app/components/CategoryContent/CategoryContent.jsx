const CategoryContent = () => {
  return (
    <>
    <div className="overflow-y-scroll scrollbar-thin scrollbar-thumb-black max-h-screen pr-3 h-[785px]">
      <div className="space-y-4">
        <div className="w-full rounded-lg bg-white p-4">
          <p className="font-medium text-sm text-cumtomGreen">
            পরিচ্ছেদঃ
            <span className="text-cumtomBlack">বান্দা তার রবের মুখাপেক্ষী</span>
          </p>
        </div>
        <div className="w-full rounded-lg bg-white p-4">
          <div className="flex flex-row  justify-start items-center ">
            <img src="https://duaruqyah.com/assets/duacard.svg" alt="" className="mr-3"/>
            <p className="text-cumtomGreen font-medium">বান্দা তার রবের মুখাপেক্ষী #১</p>
          </div>
          <div className="flex flex-col justify-start items-start">
            <div className="w-full">
              <p className="mt-5 text-base">
                <span>
                  সকল মানুষ নিজেদের দ্বীন-দুনিয়ার বিভিন্ন বিষয়ে নিজেদের
                  কল্যাণ-সাধন ও অনিষ্ট প্রতিরোধের ক্ষেত্রে আল্লাহ্‌ তা'আলার
                  মুখাপেক্ষী। আল্লাহ্‌ তা'আলা বলেন -
                </span>
              </p>
            </div>
            <div>
            <p class="mt-5 text-base text-cumtomGreen">রেফারেন্স</p>
            <div class="mt-1 text-base"><span> সূরা আল-ফাতিরঃ ৩৫:১৫</span></div>
            </div>
          </div>
          <div className="flex items-center justify-end mt-4">
        <div className="h-[50px] w-[25%] mr-3 flex items-center justify-between">
            <img className="w-6 h-6" src="https://duaruqyah.com/assets/others/copy.svg" />
            <img className="w-6 h-6" src="https://duaruqyah.com/assets/others/bookmark.svg" />
            <img className="w-6 h-6" src="https://duaruqyah.com/assets/others/plan.svg" />
            <img className="w-6 h-6" src="https://duaruqyah.com/assets/others/share.svg" />
            <img className="w-6 h-6" src="https://duaruqyah.com/assets/others/report.svg" />
        </div>
        </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default CategoryContent;
