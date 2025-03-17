import Image from "next/image";
import Main from "./_components/Main";
import Navbar from "./_components/Navbar";

export default function Home() {
  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  );
}
