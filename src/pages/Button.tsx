import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function examples(children: ReactNode) {
  if (children == "Ejemplo 1") {
    document.getElementsByTagName("textarea")[0].value = "https://www.eldebate.com/economia/20231220/asalto-sepi-telefonica-tomadura-pelo-tres-actos_161750.html";
  }
  if (children == "Ejemplo 2") {
    document.getElementsByTagName("textarea")[0].value = "https://www.elconfidencial.com/espana/2023-12-21/por-que-feijoo-prefiere-ver-sanchez-congreso_3796656/";
  }
  if (children == "Ejemplo 3") {
    document.getElementsByTagName("textarea")[0].value = "https://www.periodistadigital.com/periodismo/tv/20231214/ana-rosa-desprecia-senalamiento-mediatico-miriam-nogueras-sopla-video-689404962647/";
  }
}

const Button = ({ children }: Props) => {
  return (
    <button className={"btn-sf-primary"} onClick={() => examples(children)}>
      {children}
    </button>
  );
};

export default Button;
