import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alat Shop",
  description: "This is Home page",
  // other metadata
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
