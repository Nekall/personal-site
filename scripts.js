//console.log(window.location.href.split("/")[3]);
console.clear();
console.log(
  "  _   _               ",
  "\n",
  "( ) ( )              ",
  "\n",
  "| |_| |   __   _   _ ",
  "\n",
  "|  _  | /'__`\\( ) ( )",
  "\n",
  "| | | |(  ___/| (_) |",
  "\n",
  "(_) (_)`\\____)`\\__, |",
  "\n",
  "              ( )_| |",
  "\n",
  "              `\\___/'"
);
console.log(
  "N'hésitez pas à me contacter si vous êtes intéressés par mon profil ☺"
);

/* Modal Projects */
const projectsBtns = document.getElementsByClassName("project-btn");
console.log(projectsBtns);

const open = (id) => {
  for (let i = 0; 0 < projectsBtns.length; i++) {
    projectsBtns[i].setAttribute("id", id === i ? "open" : "");
  }
};

for (let i = 0; i < projectsBtns.length; i++) {
  console.log(i);
  projectsBtns[i].addEventListener("click", () => open(i));
}
