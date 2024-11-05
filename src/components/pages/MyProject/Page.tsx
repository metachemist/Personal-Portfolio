import { Playfair_Display, Poppins } from "next/font/google"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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

const MyProjects = () => {
  return (
    <div className="relative py-18 mb-0 flex grow-0 justify-center items-center bg-baseGreen h-screen">
      <div className={`relative top-30 w-96 h-96 left-0 p-10 bg-baseBeige `}>
        
      </div>

   
  
    </div>

  )
}

export default MyProjects