"use client";

import { UploadButton, UploadDropzone } from "@/utils/uploadthing";
import Image from "next/image";
import { useState } from "react";

export function ImageUpload() {
    const [image, setImage] = useState(null);

    return (
        <div className="flex flex-col items-center justify-center gap-4">

            <UploadDropzone className="border-2 border-slate-200 rounded-lg "
                endpoint="imageUploader"
                onClientUploadComplete={(res: any) => {
                    // Do something with the response
                    console.log("Files: ", res);
                    setImage(res[0].url);
                }}
                onUploadError={(error: Error) => {
                    // Do something with the error.
                    alert(`ERROR! ${error.message}`);
                }}
            />

            {image && <Image src={image} alt="uploaded image" className="rounded-lg border-slate-200 border-2" width={300} height={300} />}

        </div>
    );
}