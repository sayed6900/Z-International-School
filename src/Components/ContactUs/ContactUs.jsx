import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon from "../../assets/image/mapMarker.jpg"; 

const ContactUs = () => {

    const customIcon = L.icon({
        iconUrl: markerIcon,
        iconSize: [40, 50], // Adjust the size as needed
        iconAnchor: [12.5, 41], // Adjust the anchor point as needed
        popupAnchor: [0, -41] // Adjust the popup anchor point as needed
      }); 

  return (
    <div className="flex">
     <div className="p-8 bg-white rounded shadow-md w-2/3">
      <h2 className="text-3xl font-bold mb-4 text-black text-center">Z International School</h2>
      <div className="h-96 border-2 border-blue-400 rounded">
        <MapContainer center={[23.7925, 90.4078]} zoom={13} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[23.7925, 90.4078]} icon={customIcon}>
            <Popup>
             Z International School,Dhaka
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
    <div className=" lg:mt-40 pl-10">
                <h1 className="text-3xl font-bold text-blue-700 mb-5">Admission Office Address</h1>
                <ul className="font-semibold">
                    <li>Office Phone No.         : 48812164, 48812165, +8801322547575</li>
                    <li>Email                    : <span className="text-blue-600">z.intschool@gmail.com</span></li>
                    <li>Address : House no. 06, Road no. 24, Gulshan 1, Dhaka-1212, Bangladesh</li>
                </ul>
            </div>
    </div>
  );
};

export default ContactUs;
