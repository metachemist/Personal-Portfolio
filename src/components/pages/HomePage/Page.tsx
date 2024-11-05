import Image from "next/image";
import { Poppins } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import StarComponent from "@/components/ui/StarComponent";

const playfair = Playfair_Display({
  weight: ["400", "700", "900"], // Specify the weights you need
  style: ["normal", "italic"], // Define styles if needed
  subsets: ["latin"],
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const poppins = Poppins({
  weight: ["400", "700"], // Specify the weights you need
  style: ["normal", "italic"], // Define styles if needed
  subsets: ["latin"], // Add the appropriate subset
  variable: "--font-poppins", // Optional: Use a CSS variable for the font
});

const HomePage = () => {
  return (
    <div className="relative mt-20 p-20 m-0 flex flex-col justify-center items-center bg-baseGreen h-screen">
      {/* Star elements */}
      <section className="absolute top-96 right-52 align-left text-2xl font-bold">
        <StarComponent />
      </section>

      {/* Base Yellow Portfolio Text */}
      <section className={`relative flex flex-col justify-center items-center pb-10 ${playfair.className}`}>
        <div className="opacity-15 text-8xl text-stroke text-baseYellow font-semibold">PORTFOLIO</div>
        <div className="opacity-15 text-8xl text-stroke text-baseYellow font-semibold">PORTFOLIO</div>
        <div className="opacity-15 text-8xl text-stroke text-baseYellow font-semibold">PORTFOLIO</div>
      </section>

      {/* Beige Portfolio Text */}
      <section className={`absolute top-0 left-0 z-20 flex justify-center items-center w-full mt-14 ${playfair.className}`}>
        <h1 className="text-8xl flex-col items-center font-semibold text-baseOrange"> PORTFOLIO</h1>
        {/* Star elements */}
        <section className="top-96 -right-20  pr-3.5 align-left text-2xl font-bold">
          <StarComponent />
        </section>

      </section>

      {/* Socials */}
      <section className={`absolute top-64 right-56 text-baseBeige text-lg ${poppins.className}`}>
        {/* <div>IG:@the.typical.browngirl_ <br /></div> */}
        <div>Email: hafsahere01@gmail.com<br /></div>
        <div>GitHub: /metachemist <br /></div>
        <div>LeetCode: /metachemist <br /></div>
        <div>Discord: /hafsa_shahid <br /></div>
      </section>

      {/* Centered Image */}
      <section className={`absolute top-1/2 right-[60%] transform -translate-y-1/2 z-10`} style={{ transform: 'translate(-calc(50% + 20px), -55%)', top: 'calc(50% - 20px)', }}>
        <Image
          src="/images/anime.jpeg"
          alt="Person's picture"
          width={300}
          height={300}
          className="opacity-90" // Adjust opacity if needed
        />

        {/* Star elements */}
        <section className="absolute top-1 -left-2 -mt-32 align-bottom text-2xl font-bold">
          <StarComponent />
        </section>
        <section className="absolute top-72 -left-9 -mt-40 pr-3.5 align-left text-2xl font-bold">
          <StarComponent />
        </section>
      </section>

    </div>
  );
};
export default HomePage;
