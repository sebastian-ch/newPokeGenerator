import { useState, useEffect } from "react";
import { PokemonsType, imageUrl } from "./config";

function CardList({ pokemon }: { pokemon: PokemonsType[] }) {
  //console.log(pokemon);
  const [validImages, setValidImages] = useState<any>([]);

  useEffect(() => {
    const checkImageExists = (url: string, callback: any) => {
      const img = new Image();
      img.onload = function () {
        callback(true);
      };
      img.onerror = function () {
        callback(false);
      };
      img.src = url;
    };
    const validateImages = () => {
      const promises = pokemon.map((image: any) => {
        return new Promise((resolve) => {
          const ui = imageUrl + image.name + ".jpg";

          checkImageExists(ui, (exists: any) => {
            resolve({ ...image, exists });
          });
        });
      });

      // Wait for all promises to resolve
      Promise.all(promises).then((results) => {
        console.log(results);
        setValidImages(results);
      });
    };

    // Call the function to validate images
    validateImages();
  }, []);

  return (
    <>
      {validImages.length ? (
        validImages?.map((po: any) => {
          return (
            po.exists && (
              <div className="card">
                <h4
                  style={{ color: "whitesmoke", padding: "1px", margin: "2px" }}
                >
                  {po.name}
                </h4>

                <img
                  src={imageUrl + po.name + ".jpg"}
                  alt={po.name}
                  width="256"
                  height="256"
                />
              </div>
            )
          );
        })
      ) : (
        <h1>Loading..</h1>
      )}
    </>
  );
}

export default CardList;
