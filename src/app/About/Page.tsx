"use client"
import { Poppins } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Button } from "@/components/ui/button";

const playfair = Playfair_Display({
  weight: ["400", "700", "900"], // Specify the weights you need
  style: ["normal", "italic"], // Define styles if needed
  subsets: ["latin"],
});


const poppins = Poppins({
  weight: ["400", "700"], // Specify the weights you need
  style: ["normal", "italic"], // Define styles if needed
  subsets: ["latin"], // Add the appropriate subset
  variable: "--font-poppins", // Optional: Use a CSS variable for the font
});


const handleLinkedInRedirect = () => {
  window.open('https://www.linkedin.com/in/hafsa-shahid-8a1850247/', '_blank', 'noopener,noreferrer');
};


const About = () => {
  return (
    <div className="relative py-18 mb-0 flex grow-0 justify-center items-center bg-baseBrown h-screen">

      <section className="flex flex-row items-start justify-around gap-1 w-full">

        {/* first section */}
        <section className={`flex flex-col w-96 h-96 px-10 rounded-3xl text-baseBlack ${playfair.className}`}>
          <div className="text-6xl font-semibold">Hello,<br />I&apos;m Hafsa !</div>

          <div className={`text-sm mt-5 ${poppins.className}`}>
            I&apos;m a second-year BSCS student at the University of Karachi, specializing in front-end development with experience in Next.js, Angular, and React. I&apos;m also exploring Cloud Native Generative AI Engineering to expand my skills in tech.
          </div>

          <Button onClick={handleLinkedInRedirect} className={`text-md mt-5 w-80 font-semibold bg-baseOrange hover:bg-baseGreen`}>
            linkedin.com/in/hafsa_shahid
          </Button>
        </section>

        {/* second section */}
        <section className={`flex flex-col w-96 h-96 rounded-3xl bg-baseOrange px-10`}>
          <div className={`text-3xl font-semibold pl-12 mt-2 text-baseBlack ${playfair.className}`}>Technical Skills</div>

          {/* Frontend Development */}

          <div className={`flex flex-col gap-2 mt-2 ${poppins.className}`}>
            {/* Row 1 */}
            <div className={`font-semibold ${poppins.className}`}>Frontend development</div>
            <div className="flex flex-row gap-1">
              <section className="text-sm m-1 w-20 h-5 text-baseBlack px-6 pl-5 rounded-xl bg-baseYellow">
                HTML
              </section>
              <section className="text-sm m-1 w-16 h-5 text-baseBlack px-6 pl-4 rounded-xl bg-baseYellow">
                CSS
              </section>
              <section className="text-sm m-1 w-24 h-5 text-baseBlack px-6 pl-4 rounded-xl bg-baseYellow">
                Angular
              </section>
            </div>

            {/* Row 2 */}
            <div className="flex flex-row gap-1">
              <section className="text-sm m-1 w-32 h-5 text-baseBlack px-6 pl-5 rounded-xl bg-baseYellow">
                TailwindCSS
              </section>
              <section className="text-sm m-1 w-20 h-5 text-baseBlack px-6 pl-4 rounded-xl bg-baseYellow">
                NextJS
              </section>
            </div>


          </div>

          {/* Software Skills */}
          <div className={`flex flex-col gap-2 mt-2 ${poppins.className}`}>
            {/* Row 1 */}
            <div className={`font-semibold ${poppins.className}`}>Software Skills</div>
            <div className="flex flex-row gap-1">
              <section className="text-sm m-1 w-20 h-5 text-baseBlack px-6 pl-5 rounded-xl bg-baseYellow">
                Figma
              </section>
              <section className="text-sm m-1 w-24 h-5 text-baseBlack px-6 pl-4 rounded-xl bg-baseYellow">
                AdobeXD
              </section>
              <section className="text-sm m-1 w-24 h-5 text-baseBlack px-6 pl-4 rounded-xl bg-baseYellow">
                Click up
              </section>
            </div>
          </div>


          {/* Core CS Courses */}
          <div className={`flex flex-col gap-2 mt-2 ${poppins.className}`}>
            {/* Row 1 */}
            <div className={`font-semibold ${poppins.className}`}>Core CS Courses</div>
            <div className="flex flex-row gap-1">
              <section className="text-sm m-1 w-16 h-5 text-baseBlack px-6 pl-5 rounded-xl bg-baseYellow">
                DSA
              </section>
              <section className="text-sm m-1 w-16 h-5 text-baseBlack px-6 pl-4 rounded-xl bg-baseYellow">
                OOPs
              </section>
              <section className="text-sm m-1 w-28 h-5 text-baseBlack px-6 pl-4 rounded-xl bg-baseYellow">
                Electronics
              </section>
            </div>

            {/* row 2 */}
            <div className="flex flex-row gap-1">
              <section className="text-sm m-1 w-80 h-5 text-baseBlack px-6 pl-4 rounded-xl bg-baseYellow">
                System design with microprocessor
              </section>
            </div>

            {/* row 3 */}
            <div className="flex flex-row gap-1">
              <section className="text-sm m-1 w-48 h-5 text-baseBlack px-6 pl-4 rounded-xl bg-baseYellow">
                Project Management
              </section>
            </div>

          </div>
        </section>

        {/* third section */}
        <section className={`flex flex-col w-96 h-96 px-10 justify-center items-center text-baseBlack rounded-t-3xl bg-baseOrange ${poppins.className}`}>
          <div className={`absolute top-32 right-40 text-3xl font-semibold pl-12 mt-2 text-baseBlack ${playfair.className}`}>Education</div>
          
          <div className="w-full p-0 ">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1.5 -top-4 w-1 h-full bg-baseBlack"></div>

              {/* Timeline Item 1 */}
              <div className="flex items-start mb-5 mt-10">
                {/* Icon */}
                <div className="relative z-10 bg-baseYellow rounded-full h-4 w-4 flex items-center justify-center text-white">
                </div>
                {/* Content */}
                <div className="ml-7">
                  <p className="text-lg font-semibold">2023 - 2027</p>
                  <p className="text-md font-semibold">University of Karachi, Karachi</p>
                  <p className="text-sm">Bachelor Degree, Computer Science</p>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="flex items-start mb-5">
                {/* Icon */}
                <div className="relative z-10 bg-baseYellow rounded-full h-4 w-8 flex items-center justify-center text-white">
                </div>
                {/* Content */}
                <div className="ml-7">
                  <p className="text-lg font-semibold">2023 - 2025</p>
                  <p className="text-md font-semibold">Governor Initiative for Artificial Intelligence Course, Karachi</p>
                  <p className="text-sm">Certificate, Cloud Applied Generative AI Engineering</p>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="flex items-start">
                {/* Icon */}
                <div className="relative z-10 bg-baseYellow rounded-full h-4 w-5 flex items-center justify-center text-white">
                </div>
                {/* Content */}
                <div className="ml-7">
                  <p className="text-lg font-semibold">2020 - 2022</p>
                  <p className="text-md font-semibold">Sir Syed Govt Girls College, Karachi</p>
                  <p className="text-sm">Intermediate, Pre-Engineering</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* for extra height of container */}
        <div className={`absolute right-[30px] bottom-[113px] flex flex-row w-96 h-4 justify-center rounded-b-3xl items-center bg-baseOrange ${poppins.className}`}></div>

      </section>
    </div >

  )
}

export default About