import React from "react";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx"
import Footer from "./Footer.jsx";

// components 
{/* <>  
// const Home = () => {
// 	return (
// 		<div className="text-center">
            

// 			<h1 className="text-center mt-5">Hello Rigo!</h1>
// 			<p>
// 				<img src={rigoImage} />
// 			</p>
// 			<a href="#" className="btn btn-success">
// 				If you see this green button... bootstrap is working...
// 			</a>
// 			<p>
// 				Made by{" "}
// 				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
// 				love!
// 			</p>
// 		</div>
// 	);
// };
</> */}
const Home = () => {
	const viajestravelHub = [
		{
			id: 1,
			titulo: "Aventura en las Montañas",
			descripcion: "Explora las majestuosas montañas con rutas de senderismo y vistas impresionantes.",
			imageUrl: "https://eventosmultiaventura.com/wp-content/uploads/2023/05/pexels-andrei-tanase-1271619.jpg?v=1683798545",

		},
		{
			id: 2,
			titulo: "Descubre Playas Paradisíacas",
			descripcion: "Relájate en playas de arena blanca y aguas cristalinas en destinos exóticos.",
			imageUrl: "https://s3.ppllstatics.com/diariovasco/www/multimedia/2025/07/08/playa-albania-k4G-U2302310260932O1G-1200x840@Diario%20Vasco.jpg",

		},
		{
			id: 3,
			titulo: "Cultura y Historia",
			descripcion: "Sumérgete en la rica historia y cultura de ciudades emblemáticas alrededor del mundo.",
			imageUrl: "https://www.ahmadiyya-islam.org/es/wp-content/uploads/sites/10/2019/10/colosseum-690384_640.jpg",

		},
		{
			id: 4,
			titulo: "Safari en África",
			descripcion: "Vive la emoción de un safari y observa la vida salvaje en su hábitat natural.",
			imageUrl: "https://www.aeroermo.com/home/wp-content/uploads/2025/02/Turkish-Airlines-destinos-Africa.jpg",

		}
	]

	return (
		<>
			<Navbar />
			<Jumbotron />
			
				<div className="row m-2">
					{
						viajestravelHub.map(viaje => {
							return (
								<Card key={viaje.id} viaje={viaje} />
							)
						})
					}

				</div>
			
			<Footer />

		</>
	);
};

export default Home;