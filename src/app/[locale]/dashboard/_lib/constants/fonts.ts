import { Montserrat, Space_Mono } from "next/font/google";
import { Poppins } from "next/font/google";

export const POPPINS = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const SPACE_MONO = Space_Mono({
  weight: "700",
  subsets: ["latin"],
});

export const MONT_SERRAT = Montserrat({
  weight: "700",
  subsets: ["latin"],
});
