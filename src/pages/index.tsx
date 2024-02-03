import { Inter, Plus_Jakarta_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function Home() {
  return <main className={`flex h-custom-screen ${jakarta.className}`}></main>;
}
