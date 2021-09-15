const button = document.getElementById("button")

button.addEventListener("click", (e) => {
    e.preventDefault();
    //console.log("testando preventDefault()")

    const bim1 = parseFloat(document.getElementById("bim1").value.replace(",", "."));
    const bim2 = parseFloat(document.getElementById("bim2").value.replace(",", "."));
    const bim3 = parseFloat(document.getElementById("bim3").value.replace(",", "."));
    const bim4 = parseFloat(document.getElementById("bim4").value.replace(",", "."));

    const media = ((bim1 + bim2 + bim3 + bim4)/4).toFixed(1);

    const result = document.getElementById("result");

   if (media >= 7) {
        //console.log("passou")
        result.innerHTML = `Parabéns, você passou de ano! Sua média escolar foi ${media.replace(".", ",")}.`
    } else {
       //console.log("não passou")
        result.innerHTML = `Reprovado, sua média escolar foi ${media.replace(".", ",")}.`
    };  
});
