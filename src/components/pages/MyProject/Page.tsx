"use client"
import { Button } from "@/components/ui/button";
import StarComponent from "@/components/ui/StarComponent";
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

const handleIntegrateAPITodoListRedirect = () => {
  window.open('https://github.com/metachemist/Todo-s-List-Integrated-API', '_blank', 'noopener,noreferrer');
};

const handleExpenseTrackerRedirect = () => {
  window.open('https://github.com/metachemist/Expense-Tracker', '_blank', 'noopener,noreferrer');
};

const handlePostifyRedirect = () => {
  window.open('https://github.com/metachemist/Postify_SpotifysClone', '_blank', 'noopener,noreferrer');
};

const handlePrompterestRedirect = () => {
  window.open('https://github.com/metachemist/Prompterest', '_blank', 'noopener,noreferrer');
};
const MyProjects = () => {
  return (
    <div className="relative py-18 mb-0 flex grow-0 justify-center items-center bg-baseGreen h-screen">

      {/* Base Yellow Portfolio Text */}
      <section className={`absolute left-96 flex flex-col justify-center items-center pb-10 ${playfair.className}`}>
        <div className="opacity-15 text-8xl text-stroke text-baseYellow font-semibold">My Projects</div>
        <div className="opacity-15 text-8xl text-stroke text-baseYellow font-semibold">My Projects</div>
        <div className="opacity-15 text-8xl text-stroke text-baseYellow font-semibold">My Projects</div>
      </section>


      {/* Orange Project Text */}
      <section className={`absolute top-0 -left-5 z-20 flex justify-center items-center w-full mt-14 ${playfair.className}`}>
        <h1 className="text-8xl flex-col items-center font-semibold text-baseOrange"> My Projects</h1>
        {/* Star elements */}
        {/* <section className="top-96 -right-20  pr-3.5 align-left text-2xl font-bold">
          <StarComponent />
        </section> */}
      </section>

      {/* Right section  */}
      <div className={`z-10 absolute top-32 w-96 h-96 right-28 p-5 text-baseBeige ${poppins.className}`}>
        <section>
          <div className={`text-xl font-semibold mt-5 ${playfair.className}`}>1. Todo-s-List-Integrated-API</div>
          <div className={`text-sm mt-1`}>A task management application that helps users efficiently add, edit, delete, and set due dates for to-do items. It integrates with an API to provide seamless functionality for managing tasks.</div>
          <Button onClick={handleIntegrateAPITodoListRedirect} className={`z-30 relative top-0 right-28 m-3 text-sm w-64 font-sm pl-2 bg-baseYellow hover:bg-baseBlack hover:text-baseBeige`}>
            Todo&lsquo;s List Github Repo
          </Button>
        </section>

        <section>
          <div className={`text-xl font-semibold ${playfair.className}`}>2. Expense-Tracker</div>
          <div className={`text-sm mt-1`}>This project is a Python-based application designed to help users track and categorize their monthly expenses. It also allows users to set a budget for better financial management.</div>
          <Button onClick={handleExpenseTrackerRedirect} className={`z-30 relative top-0 left-28 text-sm m-3 w-64 font-sm pl-2 bg-baseYellow hover:bg-baseBlack hover:text-baseBeige`}>
            Expense Tracker Github Repo
          </Button>
        </section>
      </div>

      {/* Left Section  */}
      <div className={`z-10 absolute top-[120px] left-28 w-96 h-96 pl-5 text-baseBeige ${poppins.className}`}>
        <section>
          <div className={`text-xl font-semibold ${playfair.className}`}>3. Postify_SpotifyClone </div>
          <div className={`text-sm mt-1`}>A web application replicating the core functionalities of Spotify. It features a design and interface that mirrors the popular music streaming platform.</div>
          <Button onClick={handlePostifyRedirect} className={`z-30 relative top-0 left-32 text-sm mb-3 w-64 font-sm pl-2 bg-baseYellow hover:bg-baseBlack hover:text-baseBeige`}>
            Postify Github Repo
          </Button>
        </section>
      
     
        <section>
          <div className={`text-xl font-semibold mt-1 ${playfair.className}`}>4. Prompterest</div>
          <div className={`text-sm mt-1`}>An AI-powered prompting tool for users to discover, create, and share creative prompts. It leverages modern technologies like Next.js and TypeScript to offer a seamless user experience.</div>
          <Button onClick={handlePrompterestRedirect} className={`z-30 relative top-0 left-10 text-sm m-3 w-64 font-sm pl-2 bg-baseYellow hover:bg-baseBlack hover:text-baseBeige`}>
            Prompterest Github Repo
          </Button>
          </section>
          </div>
      </div>


  )
}

export default MyProjects