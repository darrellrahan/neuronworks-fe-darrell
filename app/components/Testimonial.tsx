import Image from "next/image";
import React from "react";
import { raleway } from "../fonts";

function Testimonial() {
  return (
    <section id="testimonial">
      <div className={`${raleway.className} py-16 px-48`}>
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-bold text-[#333435]">Trusted by</h1>
          <div className="w-20 h-1 bg-[#919EAB]"></div>
          <p className="text-[#637381] text-center px-28">
            We are dedicated to provide a strategic and highly effecient
            solutions for our customer, each of solutions meticulously crafted
            by professional and trusted talent.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-4 my-12">
          <div className="h-[8rem] rounded-xl border border-gray-300 flex justify-center items-center">
            <Image
              src="/assets/client-1.svg"
              alt="Jabar Energi"
              width={150}
              height={75}
            />
          </div>
          <div className="h-[8rem] rounded-xl border border-gray-300 flex justify-center items-center">
            <Image
              src="/assets/client-2.svg"
              alt="Jabar Energi"
              width={150}
              height={75}
            />
          </div>
          <div className="h-[8rem] rounded-xl border border-gray-300 flex justify-center items-center">
            <Image
              src="/assets/client-3.svg"
              alt="Jabar Energi"
              width={150}
              height={75}
            />
          </div>
          <div className="h-[8rem] rounded-xl border border-gray-300 flex justify-center items-center">
            <Image
              src="/assets/client-4.svg"
              alt="Jabar Energi"
              width={150}
              height={75}
            />
          </div>
          <div className="h-[8rem] rounded-xl border border-gray-300 flex justify-center items-center">
            <Image
              src="/assets/client-5.svg"
              alt="Jabar Energi"
              width={150}
              height={75}
            />
          </div>
          <div className="h-[8rem] rounded-xl border border-gray-300 flex justify-center items-center">
            <Image
              src="/assets/client-6.svg"
              alt="Jabar Energi"
              width={150}
              height={75}
            />
          </div>
          <div className="h-[8rem] rounded-xl border border-gray-300 flex justify-center items-center">
            <Image
              src="/assets/client-7.svg"
              alt="Jabar Energi"
              width={150}
              height={75}
            />
          </div>
          <div className="h-[8rem] rounded-xl border border-gray-300 flex justify-center items-center">
            <Image
              src="/assets/client-8.svg"
              alt="Jabar Energi"
              width={150}
              height={75}
            />
          </div>
          <div className="h-[8rem] rounded-xl border border-gray-300 flex justify-center items-center">
            <Image
              src="/assets/client-9.svg"
              alt="Jabar Energi"
              width={150}
              height={75}
            />
          </div>
          <div className="h-[8rem] rounded-xl border border-gray-300 flex justify-center items-center">
            <Image
              src="/assets/client-10.svg"
              alt="Jabar Energi"
              width={150}
              height={75}
            />
          </div>
          <div className="h-[8rem] rounded-xl border border-gray-300 flex justify-center items-center">
            <Image
              src="/assets/client-11.svg"
              alt="Jabar Energi"
              width={150}
              height={75}
            />
          </div>
          <div className="h-[8rem] rounded-xl border border-gray-300 flex justify-center items-center">
            <Image
              src="/assets/client-12.svg"
              alt="Jabar Energi"
              width={150}
              height={75}
            />
          </div>
          <div className="h-[8rem] rounded-xl border border-gray-300 flex justify-center items-center">
            <Image
              src="/assets/client-13.svg"
              alt="Jabar Energi"
              width={150}
              height={75}
            />
          </div>
          <div className="h-[8rem] rounded-xl border border-gray-300 flex justify-center items-center">
            <Image
              src="/assets/client-14.svg"
              alt="Jabar Energi"
              width={150}
              height={75}
            />
          </div>
          <div className="h-[8rem] rounded-xl border border-gray-300 flex justify-center items-center">
            <Image
              src="/assets/client-15.svg"
              alt="Jabar Energi"
              width={150}
              height={75}
            />
          </div>
          <div className="h-[8rem] rounded-xl border border-gray-300 flex justify-center items-center">
            <Image
              src="/assets/client-16.svg"
              alt="Jabar Energi"
              width={150}
              height={75}
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-60">
          <div>
            <div className="space-y-3 mb-8">
              <p className="text-lg">
                "Working with Neuronworks has transformed the way we run our
                business. With their IT solutions, our efficiency and
                productivity have significantly increased!"
              </p>
              <div className="w-20 h-1 bg-[#919EAB]"></div>
              <h4 className="font-bold text-gray-500">
                Massri - Director PT. Telkom Indonesia
              </h4>
            </div>
            <Image
              src="/assets/five-star.svg"
              alt="five star"
              width={135}
              height={24}
            />
          </div>
          <div className="flex gap-3">
            <button>
              <Image
                src="/assets/arrow-prev-service.svg"
                alt="next"
                width={64}
                height={64}
              />
            </button>
            <button>
              <Image
                src="/assets/arrow-next-service.svg"
                alt="next"
                width={64}
                height={64}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
