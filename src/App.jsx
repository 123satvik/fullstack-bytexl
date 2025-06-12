// App.jsx
import React, { useRef, useState } from "react";
import "./App.css";

const popularCars = [
  {
    id: 1,
    name: "Hyundai Creta",
    price: "₹10.87 - ₹19.20 Lakh",
    fuel: "Petrol / Diesel",
    image:
      "https://imgd.aeplcdn.com/370x208/n/cw/ec/106815/creta-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
    link: "https://www.hyundai.com/in/en/find-a-car/creta/highlights.html",
  },
  {
    id: 2,
    name: "Maruti Swift",
    price: "₹6.49 - ₹9.44 Lakh",
    fuel: "Petrol / CNG",
    image:
      "https://imgd.aeplcdn.com/370x208/n/cw/ec/159099/swift-exterior-right-front-three-quarter-31.jpeg?isig=0&q=80",
    link: "https://www.marutisuzuki.com/swift",
  },
  {
    id: 3,
    name: "Tata Nexon",
    price: "₹8.15 - ₹15.80 Lakh",
    fuel: "Petrol / Diesel",
    image:
      "https://imgd.aeplcdn.com/1056x594/n/cw/ec/141867/nexon-exterior-right-front-three-quarter-75.jpeg?isig=0&q=80&wm=1",
    link: "https://cars.tatamotors.com/suv/nexon",
  },
  {
    id: 4,
    name: "Kia Seltos",
    price: "₹10.90 - ₹20.35 Lakh",
    fuel: "Petrol / Diesel",
    image:
      "https://imgd.aeplcdn.com/370x208/n/cw/ec/174323/seltos-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
    link: "https://www.kia.com/in/seltos.html",
  },
  {
    id: 5,
    name: "Mahindra Thar",
    price: "₹11.25 - ₹17.60 Lakh",
    fuel: "Petrol / Diesel",
    image:
      "https://imgd.aeplcdn.com/1200x900/n/cw/ec/40087/thar-exterior-right-front-three-quarter-35.jpeg?isig=0&q=80",
    link: "https://auto.mahindra.com/suv/thar",
  },
  {
    id: 6,
    name: "Toyota Fortuner",
    price: "₹33.43 - ₹51.44 Lakh",
    fuel: "Diesel",
    image:
      "https://resize.indiatvnews.com/en/centered/newbucket/1200_675/2021/01/toyota-fortuner-1609933873.jpg",
    link: "https://www.toyotabharat.com/showroom/fortuner/",
  },
];

const usedCars = [
  {
    id: 1,
    name: "Used Honda City",
    price: "₹7.5 Lakh",
    fuel: "Petrol",
    image:
      "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_default/v1/editorial/honda-city-2015.jpg",
    link: "https://www.hondacarindia.com/honda-city",
  },
  {
    id: 2,
    name: "Used Swift 2018",
    price: "₹5.2 Lakh",
    fuel: "Petrol",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyDOoiZPQt3b5r34vcTadfjAxyL81veeb9cQ&s",
    link: "https://www.marutisuzuki.com/swift",
  },
  {
    id: 3,
    name: "Used i20 Sportz",
    price: "₹6.1 Lakh",
    fuel: "Petrol",
    image:
      "https://stimg.cardekho.com/car-images/carexteriorimages/930x620/Hyundai/Hyundai-i20/front-left-side-047.jpg",
    link: "https://www.hyundai.com/in/en/find-a-car/i20/highlights.html",
  },
  {
    id: 4,
    name: "Used EcoSport",
    price: "₹6.9 Lakh",
    fuel: "Diesel",
    image:
      "https://imgd.aeplcdn.com/664x374/cw/ec/20482/Ford-EcoSport-Right-Front-Three-Quarter-58983.jpg?v=201711021421&q=80",
    link: "https://www.india.ford.com/suvs/ecosport/",
  },
  {
    id: 5,
    name: "Used Baleno",
    price: "₹5.3 Lakh",
    fuel: "Petrol",
    image: "https://i.ytimg.com/vi/avH9NvUp53U/sddefault.jpg",
    link: "https://www.nexaexperience.com/baleno",
  },
];

const newCars = [
  {
    id: 1,
    name: "Upcoming Curvv",
    price: "₹12-18 Lakh",
    fuel: "Electric",
    image:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Curvv/9578/1723033064164/front-left-side-47.jpg",
    link: "https://cars.tatamotors.com/suv/curvv",
  },
  {
    id: 2,
    name: "Upcoming XUV300",
    price: "₹9-14 Lakh",
    fuel: "Petrol",
    image:
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/131907/xuv300-turbosport-exterior-right-front-three-quarter-9.jpeg?isig=0&q=80",
    link: "https://auto.mahindra.com/suvs/xuv300",
  },
  {
    id: 3,
    name: "Upcoming EV9",
    price: "₹80 Lakh",
    fuel: "Electric",
    image:
      "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/144485/ev9-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80&q=80",
    link: "https://www.kia.com/worldwide/vehicles/ev9.do",
  },
  {
    id: 4,
    name: "Alcazar Facelift",
    price: "₹17 Lakh",
    fuel: "Diesel",
    image:
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/157825/alcazar-facelift-exterior-right-front-three-quarter-10.jpeg?isig=0&q=80",
    link: "https://www.hyundai.com/in/en/find-a-car/alcazar/highlights.html",
  },
];

function CarSlider({ cars }) {
  const scrollRef = useRef(null);

  return (
    <div className="slider-wrapper">
      <button className="scroll-btn left" onClick={() => scrollRef.current.scrollBy({ left: -300, behavior: "smooth" })}>←</button>
      <div className="car-slider" ref={scrollRef}>
        {cars.map((car) => (
          <div className="car-card" key={car.id}>
            <a href={car.link} target="_blank" rel="noopener noreferrer">
              <img src={car.image} alt={car.name} className="hover-zoom" />
            </a>
            <div className="car-details">
              <h3>{car.name}</h3>
              <p className="price">{car.price}</p>
              <p className="fuel">{car.fuel}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="scroll-btn right" onClick={() => scrollRef.current.scrollBy({ left: 300, behavior: "smooth" })}>→</button>
    </div>
  );
}

function App() {
  const [tab, setTab] = useState("home");

  const renderContent = () => {
    if (tab === "home") return <><h2 className="section-title">Popular Cars</h2><CarSlider cars={popularCars} /></>;
    if (tab === "used") return <><h2 className="section-title">Used Cars</h2><CarSlider cars={usedCars} /></>;
    if (tab === "new") return <><h2 className="section-title">Upcoming New Cars</h2><CarSlider cars={newCars} /></>;
    if (tab === "contact") return (
      <div className="contact-page">
        <h2>Contact Us</h2>
        <form action="https://api.web3forms.com/submit" method="POST" className="contact-right">
          <input type="hidden" name="access_key" value="3f194de4-9848-4392-8557-6273c1ca9a69" />
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    );
  };

  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">CarDekho</div>
        <nav>
          <button onClick={() => setTab("home")}>Home</button>
          <button onClick={() => setTab("new")}>New Cars</button>
          <button onClick={() => setTab("used")}>Used Cars</button>
          <button onClick={() => setTab("contact")}>Contact</button>
        </nav>
      </header>
      <main>{renderContent()}</main>
      <footer>© 2025 CarDekho Clone. All rights reserved.</footer>
    </div>
  );
}

export default App;
