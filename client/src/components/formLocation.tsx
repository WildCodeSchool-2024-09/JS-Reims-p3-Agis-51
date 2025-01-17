import { useState } from "react";
import UploadFunction from "./UploadFunction.tsx";
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

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (validate()) {
      // Envoyer les données au serveur ici
      alert(
        `Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}, `,
      );
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
      <UploadFunction />
      {/* <input
        className="file-upload-loc"
        type="file"
        id="file-upload"
        name="file-upload"
        onChange={handleChange}
        accept=".pdf, .jpg, .jpeg, .png"
        multiple
      /> */}

      <button className="submit-button" onClick={handleSubmit} type="submit">
        Envoyer
      </button>
    </form>
  );
};

export default FormLoc;
