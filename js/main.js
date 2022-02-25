const btClose = document.getElementById("close");
btClose.addEventListener("click", hideContainer);
const objConteudo = [{
    titulo: "IasdSys",
    texto: "This is a project made for one religious organization, used for manage members activity, publish news, gether links and others functions.",
    link: "http://iasdcentralphb.com.br/"
}, {
    titulo: "Cientific Calc",
    texto: "This is a software created to help students who are starting in the area of ​​programming and mathematical logic as well as beginning programmers. This initiative was created after a personal analysis of the need for this tool in my college class, so I created it for assistance",
    link: "https://arreys.github.io/Programmer_Calculator"
}, {
    titulo: "Covid Dashboard",
    texto: "This is a dashboard made by me, containing all the latest data from all countries (which released) and their respective states on the new corona virus, showing the number of recovered, deaths and confirmed cases. Totally responsive and functional !",
    link: "https://arreys.github.io/Covid19_Dashboard/"
}, {
    titulo: "Eu sou mais um",
    texto: "PT - > Este é um sistema web onde participei do desenvolvimento o mesmo serve para criação de campanhas de doação de todos os tipos, totalmente responsivo e funcional. ",
    link: "https://github.com/Tiago-Alves-dos-Santos/EuSouMaisUm"
}]

function preencher(conteudo) {
    let container = document.getElementById("div-secondary")
    document.getElementById("titulo").innerHTML = objConteudo[conteudo].titulo
    document.getElementById("texto").innerHTML = objConteudo[conteudo].texto
    document.getElementById("link").href = objConteudo[conteudo].link
    showContainer(container)
}

function showContainer() {
    document.getElementById("secondary-container").classList.remove("hide");
    document.getElementById("secondary-container").classList.add("show");
}

function hideContainer() {
    document.getElementById("secondary-container").classList.remove("show");
    document.getElementById("secondary-container").classList.add("hide");
}
