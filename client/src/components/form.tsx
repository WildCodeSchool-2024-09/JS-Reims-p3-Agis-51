import { useState } from "react";
import "./form.css";

type Errors = {
  name: string;
  email: string;
  message: string;
};

export default function Message() {
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

  const handleChange = (event: {
    target: { name: string; value: string };
  }) => {
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
      newErrors.name = "Veuillez saisir votre nom.";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Veuillez saisir une adresse email.";
      valid = false;
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Votre email n'est pas valide.";
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Veuillez saisir un message.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (validate()) {
      alert(
        `Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message} `,
      );
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label htmlFor="name">Nom et Prénom</label>
      <input
        className="username"
        type="text"
        id="name"
        name="name"
        onChange={handleChange}
      />
      {errors.name && <p className="error">{errors.name}</p>}

      <label htmlFor="email">Adresse email:</label>
      <input
        className="email"
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <p className="error">{errors.email}</p>}

      <label htmlFor="message">Votre Message:</label>
      <textarea
        className="message"
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
      />
      {errors.message && <p className="error">{errors.message}</p>}

      <button className="submit-button" type="submit">
        Envoyer
      </button>
    </form>
  );
}
