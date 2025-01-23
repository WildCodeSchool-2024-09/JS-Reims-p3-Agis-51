import "./ProfilUser.css";
import { useState } from "react";
import avatar from "../assets/images/avatar.jpg";

interface Errors {
  firstname: string;
  lastname: string;
  email: string;
  PhoneNumber: string;
  adresse: string;
}

const ProfilUser = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    PhoneNumber: "",
    adresse: "",
  });

  const [errors, setErrors] = useState<Errors>({
    firstname: "",
    lastname: "",
    email: "",
    PhoneNumber: "",
    adresse: "",
  });

  const isValidEmail = (email: string): boolean => {
    const atIndex = email.indexOf("@");
    const dotIndex = email.lastIndexOf(".");
    return atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 1;
  };

  const handleChange = (event: { target: { name: string; value: string } }) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    setErrors((prevErrors: Errors) => ({ ...prevErrors, [name]: "" }));
  };

  const validate = () => {
    let valid = true;
    const newErrors: Errors = {
      firstname: "",
      lastname: "",
      email: "",
      PhoneNumber: "",
      adresse: "",
    };

    if (!formData.firstname.trim()) {
      newErrors.firstname = "Le prenom est requis.";
      valid = false;
    }
    if (!formData.lastname.trim()) {
      newErrors.lastname = " Le nom est requis.";
      valid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis.";
      valid = false;
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "email invalide.";
      valid = false;
    }
    if (!formData.PhoneNumber.trim()) {
      newErrors.PhoneNumber = "Numéro de téléphone est requis.";
      valid = false;
    }
    if (!formData.adresse.trim()) {
      newErrors.adresse = "L'adresse est requis.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSave = () => {
    if (validate()) {
      localStorage.setItem("profilUser", JSON.stringify(formData));
      console.info("Data saved successfully to localStorage:", formData);
      alert("Vos informations ont été enregistrées avec succès !");
    }
  };
  const handleEditProfile = () => {
    alert("édition de profil !");
  };
  return (
    <form className="profilUser-container">
      <h1>Mon Profil</h1>

      <div className="profilUser-header">
        <div className="avatar-container">
          <img className="profilUser-img" src={avatar} alt="user" />
        </div>
        <button
          type="button"
          className="btn-edit-profile"
          onClick={handleEditProfile}
        >
          Edit Profil
        </button>
        <hr className="profilUser-divider" />
      </div>

      <h2>Mes informations personnelles</h2>

      <div className="profilUser-form">
        <div className="form-group">
          <label htmlFor="firstname">Prénom:</label>
          <input
            className="input-profiluser"
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            placeholder="Prénom"
          />
          {errors.firstname && <p className="error">{errors.firstname}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="lastname">Nom:</label>
          <input
            className="input-profiluser"
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            placeholder="Nom"
          />
          {errors.lastname && <p className="error">{errors.lastname}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            className="input-profiluser"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="PhoneNumber">Numéro de Téléphone:</label>
          <input
            className="input-profiluser"
            type="text"
            id="PhoneNumber"
            name="PhoneNumber"
            value={formData.PhoneNumber}
            onChange={handleChange}
            placeholder="Numéro de Téléphone"
          />
          {errors.PhoneNumber && <p className="error">{errors.PhoneNumber}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="adresse">Adresse:</label>
          <input
            className="input-profiluser"
            type="text"
            id="adresse"
            name="adresse"
            value={formData.adresse}
            onChange={handleChange}
            placeholder="Adresse"
          />
          {errors.adresse && <p className="error">{errors.adresse}</p>}
        </div>

        <div className="btn-group">
          <button type="button" className="btn-profiluser" onClick={handleSave}>
            Enregistrer
          </button>
        </div>
      </div>
    </form>
  );
};

export default ProfilUser;
