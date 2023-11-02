import Image from "next/image";
import React from "react";
import { raleway } from "../fonts";

function About() {
  return (
    <section id="about">
      <div className="py-32 px-16">
        <div className="flex flex-col items-center gap-2 mb-10">
          <h1 className="text-4xl font-bold text-[#333435]">About</h1>
          <div className="w-20 h-1 bg-[#919EAB]"></div>
        </div>
        <div className="flex flex-col items-center gap-4 px-[15rem] mb-24">
          <p className="text-[#637381] text-center">
            Neuronworks Indonesia is a company that moving on information
            technology sector. We are specialize in developing end-to-end
            solutions to empowering other company effectively navigate to
            dynamic business challenges. By today we have successfully managed
            over 1000+ local and international IT projects, including most
            popular international ventures such as Telkomcel Timor Leste and
            Telin Malaysia.
          </p>
          <button className="px-5 py-3 rounded-lg text-[#D61924] border-2 border-[#D61924] font-medium text-lg">
            Learn more
          </button>
        </div>
        <div className="bg-gradient-to-br from-red-500 to-rose-800 rounded-xl shadow flex items-center gap-10 p-12">
          <Image
            src="/assets/about-thumbnail.svg"
            alt="Neuron 3.0 Program"
            width={1000}
            height={1000}
            className="w-[15rem] h-[15rem]"
          />
          <div className={`space-y-6 text-white ${raleway.className}`}>
            <h1 className="text-5xl font-bold">Neuron 3.0 Program</h1>
            <div className="w-20 h-1 bg-white" />
            <p>
              Launch at 2022, Neuron 3.0 Start to Lead program aimed the
              Neuronworks team to reach out the corporate vision and mission.
              This program is dedicated to bolstering the passions and
              performance of all member within the Neuronworks family, thereby
              driving swift and substantial positive change for our
              organization. This Neuron 3.0 Start to Lead program has been
              designed to accelerate the realization of Leading self, Leading
              team & Leading business.
            </p>
            <h4 className="font-black">
              Leading Self - Leading Team - Leading Business
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
