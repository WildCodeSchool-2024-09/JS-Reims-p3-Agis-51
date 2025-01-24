import React, { useState } from "react";
import "./presse.css";
import { useCallback } from "react";
import Union from "../assets/images/Union.png";
import lemag from "../assets/images/lemag.png";
import lhebdoDuVendredi from "../assets/images/lhebdo-du-vendredi.png";
import metropole from "../assets/images/metropole.png";

function Presse() {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const toggleZoom = (
    e:
      | React.MouseEvent<HTMLImageElement>
      | React.KeyboardEvent<HTMLImageElement>,
    imageId: string,
  ) => {
    setZoomedImage(zoomedImage === imageId ? null : imageId);
    e.stopPropagation();
  };

  const handleClickOutside = useCallback(() => {
    if (zoomedImage) {
      setZoomedImage(null);
    }
  }, [zoomedImage]);

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div>
      <h2 className="press-title">Articles de presse</h2>

      <div className="article-container">
        <div className="article">
          <h3>Inauguration Agis 51</h3>
          <p>source : journal l'Union.</p>
          <img
            className={`Union zoom-image ${zoomedImage === "Union" ? "zoomed" : ""}`}
            src={Union}
            alt="L'Union"
            onClick={(e) => toggleZoom(e, "Union")}
            onKeyDown={(e) => {
              if (e.key === " " || e.key === "Enter") {
                toggleZoom(e, "Union");
              }
            }}
          />
        </div>
        <div className="article">
          <h3>Ouverture du garage</h3>
          <p>source : journal le mag.</p>
          <img
            className={`lemag zoom-image ${zoomedImage === "lemag" ? "zoomed" : ""}`}
            src={lemag}
            alt="Le mag"
            onClick={(e) => toggleZoom(e, "lemag")}
            onKeyDown={(e) => {
              if (e.key === " " || e.key === "Enter") {
                toggleZoom(e, "lemag");
              }
            }}
          />
        </div>
        <div className="article">
          <h3>L'insertion par le travail</h3>
          <p>source : journal L'hebdo du vendredi.</p>
          <img
            className={`lhebdo-du-vendredi zoom-image ${zoomedImage === "lhebdo-du-vendredi" ? "zoomed" : ""}`}
            src={lhebdoDuVendredi}
            alt="lhebdo-du-vendredi"
            onClick={(e) => toggleZoom(e, "lhebdo-du-vendredi")}
            onKeyDown={(e) => {
              if (e.key === " " || e.key === "Enter") {
                toggleZoom(e, "lhebdo-du-vendredi");
              }
            }}
          />
        </div>
        <div className="article">
          <h3>La mobilité</h3>
          <p>source : Reims Metropole.</p>
          <img
            className={`metropole zoom-image ${zoomedImage === "metropole" ? "zoomed" : ""}`}
            src={metropole}
            alt="Reims-metropole"
            onClick={(e) => toggleZoom(e, "metropole")}
            onKeyDown={(e) => {
              if (e.key === " " || e.key === "Enter") {
                toggleZoom(e, "metropole");
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Presse;
