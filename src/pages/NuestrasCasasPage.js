import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import '../styles/styles-pages/NuestrasCasasPage.css';

const customIconAlfonso = new L.Icon({
  iconUrl: "https://images.ctfassets.net/3prze68gbwl1/assetglossary-17su9wok1ui0z7w/c4c4bdcdf0d0f86447d3efc450d1d081/map-marker.png",
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

const customIconLaVictoria = new L.Icon({
  iconUrl: "https://images.ctfassets.net/3prze68gbwl1/assetglossary-17su9wok1ui0z7w/c4c4bdcdf0d0f86447d3efc450d1d081/map-marker.png",
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

const NuestrasCasas = () => {
  return (
    <div className="nuestras-casas-container">
      <h1 className="title">Nuestras Casas - Chiclayo</h1>


      <div className="map-wrapper">
        <MapContainer
          center={[-6.776013, -79.841011]}
          zoom={14}
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          <Marker position={[-6.766013, -79.841011]} icon={customIconAlfonso}>
            <Popup>
              <strong>Casa Chiclayo</strong>
              <br />
              Alfonso Ugarte 1427
            </Popup>
          </Marker>

          <Marker position={[-6.789153, -79.843735]} icon={customIconLaVictoria}>
            <Popup>
              <strong>Casa La Victoria</strong>
              <br />
              Av. los Incas 145
            </Popup>
          </Marker>
        </MapContainer>
      </div>


      <div className="Casa-Victoria-Container">
        <div className="La-Victoria-Text">
          <h1 className="La-Victoria-Title">Casa La Victoria</h1>
          <p className="La-Victoria-Description">
            Av. los Incas 145, La Victoria 14007. Chiclayo - Perú
          </p>
          <p className="La-Victoria-Details">
            <strong>Teléfono:</strong> 956 789 654<br />
            <strong>Email:</strong> lavictoria@elgoloso.pe
          </p>
        </div>
        <img
          className="La-Victoria-Image"
          src="https://5pfw99y4.cdn.imgeng.in/place/4140/cover/restaurante-costa-nova-durango-reserva-reservandonos-5.jpg?imgeng=/w_485/f_webp/cmpr_20/width=185/height=185/quality=30"
          alt="La Victoria - El Goloso"
        />
      </div>


      <div className="Casa-Chiclayo-Container">
        <img
          className="Chiclayo-Image"
          src="https://5pfw99y4.cdn.imgeng.in/place/4140/cover/restaurante-costa-nova-durango-reserva-reservandonos-5.jpg?imgeng=/w_485/f_webp/cmpr_20/width=185/height=185/quality=30"
          alt="Casa Chiclayo - El Goloso"
        />
        <div className="Chiclayo-Text">
          <h1 className="Chiclayo-Title">Casa Chiclayo</h1>
          <p className="Chiclayo-Description">
            1427 Alfonso Ugarte, Chiclayo - Perú
          </p>
          <p className="Chiclayo-Details">
            <strong>Teléfono:</strong> 01 348 7802<br />
            <strong>Email:</strong> chiclayo@elgoloso.pe
          </p>
        </div>
      </div>
    </div>
  );
};

export default NuestrasCasas;
