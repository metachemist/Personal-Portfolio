// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Image from "next/image";

import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      hello there! <span>&#9733;</span>
      <svg height="50" width="50">
        <polygon points="25,0 31,15 47,15 34,23 39,38 25,30 11,38 16,23 3,15 19,15"
          style={{ fill: '#ffcc00', stroke: '#000', strokeWidth: 1 }} />
      </svg>

    </div>


  );
}
