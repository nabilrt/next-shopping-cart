import { Inter } from "@next/font/google";
import Login from "./login";
import SignUp from "./sign-up";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <SignUp />
    </>
  );
}
