import { ImageUpload } from "@/components/image-upload";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-8 items-center  bg-slate-900 text-white py-8">
      <h1 className="text-3xl font-semibold">Upload Image</h1>
      <ImageUpload />
    </main>
  );
}
