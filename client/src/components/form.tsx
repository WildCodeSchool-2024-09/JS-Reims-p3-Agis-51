import { useState } from "react";

type Errors = {
  name: string;
  surname: string;
  email: string;
  message: string;
};

export default function Message() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({
    name: "",
    surname: "",
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
      surname: "",
      email: "",
      message: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Veuillez entrer votre prénom";
      valid = false;
    }
    if (!formData.surname.trim()) {
      newErrors.surname = "Veuillez entrer votre nom de famille";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Veuillez entrer votre email";
      valid = false;
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Veuillez entrer une adresse email valide";
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Veuillez entrer votre message";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (validate()) {
      alert(
        `Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}  Surname: ${formData.surname}`,
      );
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label htmlFor="surname">Nom de famille</label>
      <input
        className="username"
        type="text"
        id="surname"
        name="surname"
        value={formData.surname}
        onChange={handleChange}
      />
      {errors.surname && <p className="error">{errors.surname}</p>}

      <label htmlFor="name">Prenom </label>
      <input
        className="username"
        type="text"
        id="name"
        name="name"
        value={formData.name}
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
