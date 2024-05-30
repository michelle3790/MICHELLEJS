import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import kit1 from "../Media/kit 1.png";
import kit2 from "../Media/kit 2.png";
import kit3 from "../Media/kit 3.png";
import kit4 from "../Media/kit 4.png";
import kit5 from "../Media/kit 5.png";
import kit6 from "../Media/kit 6.png";
import kit7 from "../Media/kit 6.png";
import kit8 from "../Media/kit 6.png";
import kit9 from "../Media/kit 6.png";
import kit10 from "../Media/kit 6.png";
import kit11 from "../Media/kit 6.png";
import kit12 from "../Media/kit 6.png";
import kit13 from "../Media/kit 6.png";
import kit14 from "../Media/kit 6.png";
import kit15 from "../Media/kit 6.png";
import kit16 from "../Media/kit 6.png";
import kit17 from "../Media/kit 6.png";
import kit18 from "../Media/kit 6.png";
import kit19 from "../Media/kit 6.png";
import kit20 from "../Media/kit 6.png";
import kit21 from "../Media/kit 6.png";
import kit22 from "../Media/kit 6.png";
import kit23 from "../Media/kit 6.png";
import kit24 from "../Media/kit 6.png";
import kit25 from "../Media/kit 6.png";
import kit26 from "../Media/kit 6.png";
import kit27 from "../Media/kit 6.png";
import kit28 from "../Media/kit 6.png";
import kit29 from "../Media/kit 6.png";
import kit30 from "../Media/kit 6.png";
// Import all kit images as needed
import Header from "../components/header";
import "./Solicitud.css";

export default function Picking() {
  const [pedido, setPedido] = useState([]);
  const [kitCounts, setKitCounts] = useState({});

  useEffect(() => {
    const fetchData = () => {
      fetch("http://localhost:5000/inventario_rack")
        .then((response) => {
          if (!response.ok) {
            throw new Error("No se pudo obtener la respuesta del servidor");
          }
          return response.json();
        })
        .then((data) => {
          const counts = {};
          data.forEach((item) => {
            counts[item.Nombre] = item.Cantidad;
          });
          setKitCounts(counts);
        })
        .catch((error) =>
          console.error("Error al cargar los datos del inventario:", error)
        );
    };

    // Realizar la primera llamada para obtener los datos iniciales
    fetchData();

    // Establecer un intervalo para realizar la consulta cada segundo
    const intervalId = setInterval(fetchData, 1000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalId);
  }, []);

  const añadirKit = (kitNumero) => {
    const nombreKit = `Kit ${kitNumero}`;

    // Actualizar primero los contadores antes de modificar el pedido
    setKitCounts((prevCounts) => {
      if (prevCounts[nombreKit] > 0) {
        const newCounts = {
          ...prevCounts,
          [nombreKit]: prevCounts[nombreKit] - 1,
        };

        // Si hay disponibles, actualizar el pedido
        setPedido((prevPedido) => {
          const nuevoPedido = [...prevPedido, kitNumero];
          return nuevoPedido;
        });

        return newCounts;
      } else {
        return prevCounts; // Retornar los contadores antiguos si no hay disponibles
      }
    });
  };

  const descontarKit = (kitNumero) => {
    const index = pedido.indexOf(kitNumero);
    if (index > -1) {
      const nuevoPedido = [...pedido];
      const nombreKit = `Kit ${kitNumero}`;
      nuevoPedido.splice(index, 1);
      setPedido(nuevoPedido);
      setKitCounts((prevCounts) => ({
        ...prevCounts,
        [nombreKit]: prevCounts[nombreKit] + 1,
      }));
    }
  };

  const limpiarCarrito = () => {
    fetch("http://localhost:5000/inventario_rack")
      .then((response) => response.json())
      .then((data) => {
        const counts = {};
        data.forEach((item) => {
          counts[item.Nombre] = item.Cantidad;
        });
        setKitCounts(counts);
        setPedido([]);
      })
      .catch((error) =>
        console.error("Error al cargar los datos del inventario:", error)
      );
  };

  const solicitar = () => {
    if (pedido.length === 0) {
      alert("No hay kits en el carrito para solicitar.");
      return;
    }

    const data = {
      nuevoPedido: pedido.join(","),
    };

    fetch("http://localhost:5000/solicitar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((message) => {
        alert("Solicitud realizada con éxito: " + message);
        setPedido([]);
        limpiarCarrito(); // Restablece el carrito y los contadores después de una solicitud exitosa.
      })
      .catch((error) => {
        console.error("Error al realizar la solicitud:", error);
        alert("Error al realizar la solicitud: " + error.message);
      });
  };

  const kitDescriptions = [
    "Este kit contiene: pieza 1x2, pieza 2x2.", "Este kit contiene: pieza", "Este kit contiene: tornillos, puertas y ventanas", "Este kit contiene: tornillos, puertas y ventanas", "Este kit contiene: tornillos, puertas y ventanas", "Este kit contiene: tornillos, puertas y ventanas", "Este kit contiene: tornillos, puertas y ventanas", "Este kit contiene: tornillos, puertas y ventanas", "Este kit contiene: tornillos, puertas y ventanas", "Este kit contiene: tornillos, puertas y ventanas", "Este kit contiene: tornillos, puertas y ventanas", "Este kit contiene: tornillos, puertas y ventanas", "Este kit contiene: tornillos, puertas y ventanas", "Este kit contiene: tornillos, puertas y ventanas", "Este kit contiene: tornillos, puertas y ventanas", "Este kit contiene: tornillos, puertas y ventanas", "Este kit contiene: tornillos, puertas y ventanas", "Este kit contiene: tornillos, puertas y ventanas", "Este kit contiene: tornillos, puertas y ventanas", 
    "Este kit contiene: tornillos, puertas y ventanas", "Este kit contiene: tornillos, puertas y ventanas", 
    "Este kit contiene: tornillos, puertas y ventanas", "Este kit contiene: tornillos, puertas y ventanas",
     "Este kit contiene: tornillos, puertas y ventanas", "Este kit contiene: tornillos, puertas y ventanas", "Este kit contiene: tornillos, puertas y ventanas", "Este kit contiene: tornillos, puertas y ventanas", "Este kit contiene: tornillos, puertas y ventanas", "Este kit contiene: tornillos, puertas y ventanas", "Este kit contiene: tornillos, puertas y ventanas"
    
  ]; // Descripciones de todos los kits

  const kitImages = [
    kit1, kit2, kit3, kit4, kit5, kit6, kit7, kit8, kit9, kit10, kit11, kit12, kit13, kit14, kit15, kit16, kit17, kit18, kit19, kit20, kit21, kit22, kit23, kit24, kit25, kit26, kit27, kit28, kit29, kit30
    // Imágenes de los kits
  ];

  return (
    <div style={{ overflowY: "auto" }}>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header titulo="SOLICITUD DE MATERIALES" />
      <div className="container-items">
        {kitImages.map((image, index) => (
          <div key={index} className="Kit">
            <div className="info-product">
              <div className="info-text">
                <h2>Kit {index + 1}</h2>
                <p>{kitDescriptions[index]}</p>
                <p>Disponibles: {kitCounts[`Kit ${index + 1}`] || 0}</p>
              </div>
              <div className="button-container">
                <button className="button" onClick={() => añadirKit(index + 1)}>
                  +
                </button>
                <button
                  className="button"
                  onClick={() => descontarKit(index + 1)}
                >
                  -
                </button>
              </div>
            </div>
            <figure>
              <img
                src={image}
                alt={`Icono del Kit ${index + 1}`}
                className="icono"
              />
            </figure>
          </div>
        ))}
      </div>
      <div className="button-panel">
        <div>
          <span>
            Pedido actual: {pedido.map((num) => `Kit ${num}`).join(", ")}
          </span>
        </div>
        <button className="action-button" onClick={solicitar}>
          Solicitar
        </button>
        <button className="action-button" onClick={limpiarCarrito}>
          Limpiar carrito
        </button>
      </div>
    </div>
  );
}
