import Image from "next/image";
import React from "react";

const Introduction = () => {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div className="relative">
          <Image
            src="https://avatars.githubusercontent.com/u/116024992?v=4"
            alt="Vinay Chhabra"
            width="192"
            height="192"
            quality="95"
            priority={true}
            className="rounded-full h-24 w-24 border-[0.35rem] border-white shadow-xl"
          />
          <span className="text-4xl absolute right-0 bottom-0">👋</span>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
