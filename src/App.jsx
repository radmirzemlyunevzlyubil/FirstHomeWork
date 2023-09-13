import React, { useState } from "react";
import "./App.css";

function Card(props) {
  const { title, description, price, image } = props;
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <button onClick={toggleDescription}>
        {showDescription ? "Скрыть описание" : "Показать описание"}
      </button>
      {showDescription && <p>{description}</p>}
      <p>Цена: {price}</p>
    </div>
  );
}

function App() {
  const cardData = {
    title: "Джейн Эйр. Вечные истории. Young Adult | Бронте Шарлотта",
    description:
      'Знаменитый роман Шарлотты Бронте в самом полном и близком к оригиналу переводе Ирины Гуровой. История Джейн, в раннем возрасте оставшейся сиротой на попечение равнодушной тети, позже отданной в приют и работающей гувернанткой в доме со странным, угрюмым хозяином. Роман о зарождающемся чувстве, свободе, великодушии и верности, несмотря на все преграды. Нестареющая классика английской литературы. "Я прижала губы к руке, лежавшей у меня на плече. Я так сильно его любила! Так сильно, что не могла выразить, — так сильно, что для этого не было слов".',
    price: "233,33 рубля",
    image: "https://ir.ozone.ru/s3/multimedia-f/wc1000/6725118795.jpg",
  };

  return (
    <div className="App">
      <Card {...cardData} />
    </div>
  );
}

export default App;