import React, { useEffect, useState } from "react";
import axios from "axios";

interface Props {
  noticia: string;
}

export default function Analysis({ noticia }: Props) {
  const [intro, setIntro] = useState("");
  const [noticias, setNoticias] = useState("");
  const [comments_raw, setCommentsRaw] = useState([]);
  const [noticiasError, setNoticiasError] = useState("");
  const [noticiasLoading, setNoticiasLoading] = useState(false);
  const [toxicidad, setToxicidad] = useState("");
  const [constructividad, setConstructividad] = useState("");
  const [confiabilidad, setConfiabilidad] = useState("");

  useEffect(() => {
    calls();
  }, []);

  useEffect(() => {
    if (comments_raw)
      models();
  }, [comments_raw]);

  useEffect(() => {
    if (toxicidad && constructividad) {
      const ul = document.getElementById("lista-comments");
      //const li = document.createElement("li");
      //ul!.appendChild(li);
      let index = 0;
      comments_raw.forEach((element: string) => {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(element));
        if (constructividad[index]["label"] == "Si") {
          li.appendChild(document.createTextNode(" ✔️"));
        } else {
          li.appendChild(document.createTextNode(" ❌"));
        }
        switch (toxicidad[index]["label"]) {
          case "No tóxico":
            li.style.backgroundColor = "rgba(119, 221, 119, 0.4)";
            break;
          case "Ligeramente tóxico":
            li.style.backgroundColor = "rgba(253, 253, 150, 0.4)";
            break;
          case "Tóxico":
            li.style.backgroundColor = "rgba(255, 179, 71, 0.4)";
            break;
          case "Muy tóxico":
            li.style.backgroundColor = "rgba(255, 105, 97, 0.4)";
            break;
        }
        li.setAttribute("class", "lista-scraped-comments");
        ul!.appendChild(li);
        index++;
      });
    }
  }, [toxicidad, constructividad]);

  const models = async () => {
    const constructividad = await axios.post(
      "https://socialfairness.demos.gplsi.es/models/constructividad",
      {
        texts: comments_raw,
      }
    );
    console.log(constructividad.data["predictions"][0]["label"]);
    const toxicidad = await axios.post(
      "https://socialfairness.demos.gplsi.es/models/toxicidad",
      {
        texts: comments_raw,
      }
    );
    console.log(toxicidad.data["predictions"][0]["label"]);
    setToxicidad(toxicidad.data["predictions"]);
    setConstructividad(constructividad.data["predictions"]);
  };

  const calls = async () => {
    setNoticiasLoading(true);
    try {
      const result = await axios.post(
        "https://socialfairness.demos.gplsi.es/api/scrap_news",
        {
          url: noticia,
        }
      );
      setNoticias(result.data["news"][0]["body"]);
      setIntro(result.data["news"][0]["headline"]);
      const result2 = await axios.post(
        "https://socialfairness.demos.gplsi.es/api/scrap",
        {
          url: noticia,
        }
      );
      setCommentsRaw(result2.data["comments"]);
    } catch (err) {
      console.log(err);
      setNoticiasError("Unexpected error");
    } finally {
      setNoticiasLoading(false);
    }
  };

  return (
    <>
      <div className="features-inner section-inner">
        <hr id="hr"></hr>
        <div className="mt-100">
          <h4 className="confi">Análisis de confiabilidad</h4>
          <div className="progress2 progress-moved">
            <div className="progress-bar2"></div>
          </div>
          <p className="porcentajes">
            Nivel de confiabilidad: <strong>85%</strong>
          </p>
          <h4 className="results">Noticia analizada:</h4>
          <h5 className="results">{intro}</h5>
          <p className="results-noticia">{noticias}</p>
          <h4 className="confi">Análisis de toxicidad y constructividad</h4>
          <div className="toxic-row">
            <div className="toxic-column">
              <ul>
                <li>
                  Comentario no tóxico: <span className="dot-green"></span>
                </li>
                <li>
                  Comentario ligeramente tóxico:{" "}
                  <span className="dot-yellow"></span>
                </li>
                <li>
                  Comentario tóxico: <span className="dot-orange"></span>
                </li>
                <li>
                  Comentario muy tóxico: <span className="dot-red"></span>
                </li>
              </ul>
            </div>
            <div className="toxic-column">
              <ul>
                <li>Comentario constructivo: ✔️</li>
                <li>Comentario no constructivo: ❌</li>
              </ul>
            </div>
          </div>
          <h4 className="noticia-analizada">
            Comentarios de la noticia analizados:
          </h4>
          <div className="lista-box">
            <ul id="lista-comments"></ul>
          </div>
        </div>
      </div>
    </>
  );
}
