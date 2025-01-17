import React, { useState } from "react";
import "./presse.css";
import { useCallback } from "react";
import Union from "../assets/images/Union.png";
import lemag from "../assets/images/lemag.png";
import lhebdoDuVendredi from "../assets/images/lhebdo-du-vendredi.png";
import metropole from "../assets/images/metropole.png";

function Presse() {
  const [zoomed, setZoomed] = useState(false);

  const toggleZoom = (
    e:
      | React.MouseEvent<HTMLImageElement>
      | React.KeyboardEvent<HTMLImageElement>,
  ) => {
    setZoomed(!zoomed);
    e.stopPropagation();
  };

  const handleClickOutside = useCallback(() => {
    if (zoomed) {
      setZoomed(false);
    }
  }, [zoomed]);

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div>
      <h1 className="press-title">Articles de presse</h1>

      <div className="article-container">
        <div className="article">
          <h2>Inauguration Agis 51</h2>
          <p>source : journal l'Union.</p>
          <img
            className={`Union zoom-image ${zoomed ? "zoomed" : ""}`}
            src={Union}
            alt="L'Union"
            onClick={toggleZoom}
            onKeyDown={(e) => {
              if (e.key === " " || e.key === "Enter") {
                toggleZoom(e);
              }
            }}
          />
        </div>
        <div className="article">
          <h2>Ouverture du garage</h2>
          <p>source : journal le mag.</p>
          <img
            className={`lemag zoom-image ${zoomed ? "zoomed" : ""}`}
            src={lemag}
            alt="Le mag"
            onClick={toggleZoom}
            onKeyDown={(e) => {
              if (e.key === " " || e.key === "Enter") {
                toggleZoom(e);
              }
            }}
          />
        </div>
        <div className="article">
          <h2>L'insertion par le travail</h2>
          <p>source : journal L'hebdo du vendredi.</p>
          <img
            className={`lhebdo-du-vendredi zoom-image ${zoomed ? "zoomed" : ""}`}
            src={lhebdoDuVendredi}
            alt="lhebdo-du-vendredi"
            onClick={toggleZoom}
            onKeyDown={(e) => {
              if (e.key === " " || e.key === "Enter") {
                toggleZoom(e);
              }
            }}
          />
        </div>
        <div className="article">
          <h2>La mobilité</h2>
          <p>source : Reims Metropole.</p>
          <img
            className={`metropole zoom-image ${zoomed ? "zoomed" : ""}`}
            src={metropole}
            alt="Reims-metropole"
            onClick={toggleZoom}
            onKeyDown={(e) => {
              if (e.key === " " || e.key === "Enter") {
                toggleZoom(e);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Presse;
