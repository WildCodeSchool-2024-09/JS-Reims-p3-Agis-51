import { useState } from "react";

type Errors = {
  name: string;
  email: string;
  message: string;
};

const FormLoc = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [file, setFile] = useState<File | null>(null);

  const [errors, setErrors] = useState<Errors>({
    name: "",
    email: "",
    message: "",
  });

  const isValidEmail = (email: string): boolean => {
    const atIndex = email.indexOf("@");
    const dotIndex = email.lastIndexOf(".");
    return atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 1;
  };

  const handleChange = (event: { target: { name: string; value: string } }) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const validate = () => {
    let valid = true;
    const newErrors: Errors = {
      name: "",
      email: "",
      message: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      valid = false;
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Invalid email format.";
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

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

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (validate()) {
      const fileName = file ? file.name : "Aucun fichier sélectionné";
      alert(
        `Nom: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}\nFichier: ${fileName}`,
      );
      setFormData({ name: "", email: "", message: "" });

      if (file) {
        handleUpload();
      } else {
        console.error("Aucun fichier à télécharger");
      }
    }
  };

  return (
    <form className="formLoc-container" onSubmit={handleSubmit}>
      <label htmlFor="name">Nom et Prénom:</label>
      <input
        className="username-loc"
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      {errors.name && <p className="error">{errors.name}</p>}

      <label htmlFor="email">Adresse email:</label>
      <input
        className="email-loc"
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <p className="error">{errors.email}</p>}

      <label htmlFor="message">Votre Message:</label>
      <textarea
        className="message-loc"
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
      />
      {errors.message && <p className="error">{errors.message}</p>}

      <label htmlFor="file-upload">Vos Documents:</label>
      <input type="file" id="file-upload" onChange={handleFileChange} />

      <button className="submit-button" type="submit">
        Envoyer
      </button>
    </form>
  );
};

export default FormLoc;
