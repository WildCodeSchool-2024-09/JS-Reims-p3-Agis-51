import "./ProfilUser.css";
import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import avatar from "../assets/images/avatar.jpg";

interface Errors {
  firstname: string;
  lastname: string;
  email: string;
  phone_number: string;
  address: string;
}

type User = {
  id: number;
  email: string;
  isAdmin?: boolean;
  firstname: string;
  lastname: string;
  address: string;
  phone_number: string;
};

type Auth = {
  user: User;
  message: string;
};

type Context = {
  auth: Auth | null;
  setAuth: (auth: Auth | null) => void;
};

const ProfilUser = () => {
  const { auth, setAuth } = useOutletContext() as Context;
  const [formData, setFormData] = useState({
    firstname: auth?.user?.firstname || "",
    lastname: auth?.user?.lastname || "",
    email: auth?.user?.email || "",
    phoneNumber: auth?.user?.phone_number || "",
    address: auth?.user?.address || "",
  });
  const [isdisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth?.user) {
      setFormData({
        firstname: auth.user.firstname || "",
        lastname: auth.user.lastname || "",
        email: auth.user.email || "",
        phoneNumber: auth.user.phone_number || "",
        address: auth.user.address || "",
      });
    }
  }, [auth]);

  const [errors, setErrors] = useState<Errors>({
    firstname: "",
    lastname: "",
    email: "",
    phone_number: "",
    address: "",
  });

  const validatePhoneNumber = (phone_number: string) => {
    return phone_number.length === 10 && /^\d+$/.test(phone_number);
  };

  const handleChange = (event: { target: { name: string; value: string } }) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

    setErrors((prevErrors: Errors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleEditProfile = () => {
    alert("édition de profil !");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({
      phone_number: "",
      email: "",
      firstname: "",
      lastname: "",
      address: "",
    });

    if (formData.phoneNumber && !validatePhoneNumber(formData.phoneNumber)) {
      setErrors((prev) => ({
        ...prev,
        phone_number: "Le numéro de téléphone doit contenir 10 chiffres",
      }));
      return;
    }
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/users/${auth?.user?.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            email: formData.email,
            phone_number: formData.phoneNumber,
            firstname: formData.firstname,
            lastname: formData.lastname,
            address: formData.address,
          }),
        },
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }
      alert("Vos modifications sont bien enregistrées !");
      setIsDisabled(true);
    } catch (error) {
      console.error("Error updating user:", error);
      setErrors((prev) => ({
        ...prev,
        submit: "Erreur lors de la mise à jour",
      }));
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/logout`,
        {
          method: "POST",
          credentials: "include",
        },
      );

      if (response.ok) {
        setAuth(null);
        navigate("/");
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <div className="profilUser-container">
      <div className="profil-header">
        <h2>Mon Profil</h2>
        <button type="button" onClick={handleLogout}>
          Se déconnecter
        </button>
      </div>

      <div className="profilUser-header">
        <img className="profilUser-img" src={avatar} alt="user" />
        <button
          type="button"
          className="btn-edit-profile"
          onClick={handleEditProfile}
        >
          Edit Profil
        </button>
      </div>
      <h2>Mes informations personnelles</h2>
      <form className="profilUser-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstname">Prénom :</label>
          <input
            className="input-profiluser"
            type="text"
            id="firstname"
            name="firstname"
            disabled={isdisabled}
            value={formData.firstname}
            onChange={handleChange}
            placeholder="Prénom"
          />
          {errors.firstname && <p className="error">{errors.firstname}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="lastname">Nom :</label>
          <input
            className="input-profiluser"
            type="text"
            id="lastname"
            name="lastname"
            disabled={isdisabled}
            value={formData.lastname}
            onChange={handleChange}
            placeholder="Nom"
          />
          {errors.lastname && <p className="error">{errors.lastname}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email :</label>
          <input
            className="input-profiluser"
            type="email"
            id="email"
            name="email"
            disabled={isdisabled}
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Numéro de Téléphone :</label>
          <input
            className="input-profiluser"
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            disabled={isdisabled}
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Numéro de Téléphone"
          />
          {errors.phone_number && (
            <p className="error">{errors.phone_number}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="address">Adresse :</label>
          <input
            className="input-profiluser"
            type="text"
            id="address"
            name="address"
            disabled={isdisabled}
            value={formData.address}
            onChange={handleChange}
            placeholder="Adresse"
          />
          {errors.address && <p className="error">{errors.address}</p>}
        </div>
        <button
          type={isdisabled ? "submit" : "button"}
          onClick={() => setIsDisabled(!isdisabled)}
          disabled={false}
          className="btn-profiluser"
        >
          {isdisabled ? "Modifier" : "Enregistrer"}
        </button>
      </form>
    </div>
  );
};

export default ProfilUser;
