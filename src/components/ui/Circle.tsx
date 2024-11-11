import { Playfair_Display, Poppins } from "next/font/google";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
  
const Circle = () => {
  return (
    <div className={`absolute -bottom-30 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] bg-baseOrange rounded-full flex items-center justify-center z-10`}>
      <span className={`text-baseBlack font-semibold text-md ${poppins.className}`}>Scroll down</span>
      
    </div>
   
  );
};

export default Circle;
