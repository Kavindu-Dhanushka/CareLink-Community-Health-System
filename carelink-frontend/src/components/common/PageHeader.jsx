import React from "react";
import { images } from "../../assets/image";

function PageHeader() {
  return (
    <section
      className="relative w-full h-[380px] flex items-center justify-center"
      style={{
        backgroundImage: `
          linear-gradient(
             rgba(222, 232, 238, 0.75),
              rgba(54, 111, 172, 0.85)
          ),
          url(${images.healthCover})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center px-4 max-w-3xl text-white">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Expert-verified advice <br />
          for a healthier life
        </h1>

        <p className="mt-4 text-sm md:text-base text-blue-100">
          Access our library of trusted health resources maintained by verified
          community professionals. Your health, our priority.
        </p>

        <div className="mt-8 flex bg-white rounded-lg overflow-hidden shadow-lg max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search symptoms, topics, or doctors..."
            className="flex-1 px-4 py-3 text-sm text-gray-700 outline-none"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-sm font-medium">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}

export default PageHeader;
