"use client"
import { Button } from "@/components/ui/button";
import StarComponent from "@/components/ui/StarComponent";
import { Poppins } from "next/font/google";
import { Playfair_Display } from "next/font/google";

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


const handleEmailRedirect = () => {
  window.open('mailto:hafsahere01@gmail.com?subject=Subject%20Here&body=Write%20your%20message%20here', '_blank', 'noopener,noreferrer');
};

const GetinTouch = () => {
  return (
    <div className="relative py-18 mb-0 flex grow-0 justify-center items-center bg-baseBrown h-screen">

      <div className="absolute top-32 left-44"><StarComponent/></div>
      <div className="absolute top-52 left-96"><StarComponent/></div>
      <div className="absolute top-96 right-44"><StarComponent/></div>
      <div className="absolute bottom-28 left-52"><StarComponent/></div>
      <div className="absolute bottom-10 right-60"><StarComponent/></div>
      <div className="absolute top-10 right-96"><StarComponent/></div>

      <div className={`relative top-30 w-96 h-96 rounded-2xl left-0 p-10 text-baseBeige bg-baseGreen ${playfair.className}`}>
        <div className="text-6xl font-semibold">Let&apos;s get in Touch </div>

        <div className={`text-sm mt-5 ${poppins.className}`}>
          I’m always looking to learn new things and connect with people who share a passion for tech. Let’s connect if you&apos;re into web development, AI, or just want to chat about cool projects ✨
        </div>
        <Button onClick={handleEmailRedirect} className={`text-md mt-5 w-80 font-semibold bg-baseOrange hover:bg-baseGreen`}>
        Send me an Email
        </Button>

      </div>



    </div>
  );
}

export default GetinTouch