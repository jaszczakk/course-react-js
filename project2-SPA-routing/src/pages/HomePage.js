import React from "react";
import Article from "../components/Article";

const articles = [
  {
    id: 1,
    title: "Dlaczego założyłam bloga?",
    text:
      "Pomysł na to, by stworzyć własne miejsce w sieci chodził mi po głowie od dłuższego czasu. Lubię dzielić się swoimi doświadczeniami, pięknymi widokami i wszystkim, co mogłoby kogoś zainspirować. Sama często szukam inspiracji w sieci postanowiłam więc dać też innym coś od siebie",
  },
  {
    id: 2,
    title: "Na czym mi najbardziej zależało?",
    text:
      "Podróżując możemy doświadczyć wielu nowych i ciekawych rzeczy. Możemy zobaczyć widoki zapierające dech w piersiach, zjeść coś tak dobrego, że nasze kubki smakowe szaleją ze szczęcią bądź przywieźć jakieś ciekawe pamiątki z podróży. To wszystko wydaje mi się tak ekscytujące, że postanowiłam nie rezygnować z niczego, a powoli rozbudowywać bloga na trzech płaszczyznach : piękne miejsca, lokalne jedzenie i zakupy.",
  },
  {
    id: 3,
    title: "Inne ciekawostki",
    text:
      "Głównym moim założeniem jest inspirowanie ludzi do spróbowania i zobaczenia czegoś nowego, a przy okazji uczę się programować w React. Niedawno przebranżowiłam się z kontrolera finansowego na programistkę. :) ",
  },
];
const HomePage = () => {
  const artList = articles.map((article) => (
    <Article key={article.id} {...article} />
  ));
  return <div className="home">{artList}</div>;
};

export default HomePage;
