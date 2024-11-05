// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Poppins } from 'next/font/google'
import HomePage from "@/components/pages/HomePage/Page";
import About from "@/components/pages/About/Page";
import MyProject from "@/components/pages/MyProject/Page";
import GetinTouch from "@/components/pages/GetInTouch/Page";
import Circle from "@/components/ui/Circle";



// eslint-disable-next-line @typescript-eslint/no-unused-vars
const poppins = Poppins({
  weight: ['300', '700'], // Specify the weights you need
  style: ['normal', 'italic'], // Define styles if needed
  subsets: ['latin'], // Add the appropriate subset
  variable: '--font-poppins', // Optional: Use a CSS variable for the font
});

export default function Home() {
  return (
    <main>
      {/* Navbar component in layout.tsx */}
      <HomePage/>
      <Circle/>
      <About/>
      <MyProject/>
      <GetinTouch/>
    </main>

    
    
  );
}
