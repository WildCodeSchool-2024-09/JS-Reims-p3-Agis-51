import { useState } from "react";

const UploadFunction = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files?.[0] || null);
  };

  const handleUpload = async () => {
    if (!file) {
      console.error("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
      } else {
        console.error("File upload failed with status:", response.status);
      }
    } catch (error) {
      console.error("An error occurred during file upload:", error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button type="button" onClick={handleUpload}>
        Télécharger
      </button>
    </div>
  );
};

export default UploadFunction;
