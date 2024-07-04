import { useState } from "react";
import Analysis from "./Analysis";

const TextField = () => {
  const [analisis, setAnalisis] = useState<string[]>([]);
  let noticia = "";
  const delay = (ms: any) => new Promise((res) => setTimeout(res, ms));
  const scroll = async () => {
    await delay(100);
    let hr = document.getElementById("hr");
    hr!.scrollIntoView({ behavior: "smooth" });
  };

  function handleSubmit(e: any) {
    let hidden = document.getElementById("hide");
    let bubble2 = document.getElementById("bubble2");
    let bubble3 = document.getElementById("bubble3");
    //Le decimos al navegador que no recargue la página
    e.preventDefault();

    //Procesamos la noticia
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    noticia = formJson.noticia.toString();
    console.log(noticia);

    //Analizar la noticia
    if (noticia.length != 0) {
      hidden!.style.visibility = "visible";
      bubble2!.style.visibility = "visible";
      bubble3!.style.visibility = "visible";
      setAnalisis((analisis) => [noticia]);
      scroll();
    }
  }

  return (
    <>
      <form method="post" onSubmit={handleSubmit}>
        <textarea
          name="noticia"
          id="noticia"
          className="text-field"
          placeholder="Pega aquí la URL de tu noticia para analizar su confiabilidad y su toxicidad"
        ></textarea>
        <button type="submit" className="btn-sf-primary btn-sf-analizar">
          Analizar
        </button>
      </form>
      {analisis.map((item) => (
        <Analysis noticia={item} key={item}></Analysis>
      ))}
    </>
  );
};

export default TextField;
