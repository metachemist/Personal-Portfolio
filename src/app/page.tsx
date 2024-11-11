import HomePage from "@/app/HomePage/Page";
import About from "@/app/About/Page";
import MyProject from "@/app/MyProject/Page";
import GetinTouch from "@/app/GetInTouch/Page";


export default function Home() {
  return (
    <main>
      {/* Navbar component in layout.tsx */}
      <HomePage/>
      {/* <Circle/> */}
      <About/>
      <MyProject/>
      <GetinTouch/>
    </main>
  );
}
