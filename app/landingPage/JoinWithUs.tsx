import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import img from "../../app/Img/ukraine-help (1).svg"; // Ensure this path is correct

export default function JoinWithUs() {
  return (
    <section>
      <div className="specail_title flex-col gap-2 pb-6 flex">
        <h3 className="md:text-4xl text-2xl">Join with us</h3>
      </div>
      <div className="flex gap-6 md:gap-2 flex-col md:flex-row p-6 hover:shadow-md transition-all duration-300 border rounded-xl drop-shadow-lg">
        <div className="flex items-center md:items-start justify-center flex-col gap-6 w-full md:w-2/3">
          <h3 className="md:text-2xl text-xl font-medium">We support Palestine</h3>
          <p className="text-md font-light capitalize text-center">
            We are taking action to help our freelancers, our clients, and the
            people of Palestine. You can too.
          </p>
          <Button className="px-8 py-4 text-xl">Learn more</Button>
        </div>

        {/* Display the image using Next.js Image component */}
        <div className="w-full md:flex hidden justify-center md:justify-end md:w-1/3">
          <Image
            src={img} // Use the imported image here
            alt="Join with us"
            className="w-2/3 md:w-1/3"
          />
        </div>
      </div>
    </section>
  );
}
