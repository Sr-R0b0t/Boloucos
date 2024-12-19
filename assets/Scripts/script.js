function copiarFrase(){
    //criar elemento de texto temporario
    let tempInput = document.createElement("input");
    tempInput.value = "00020126580014br.gov.bcb.pix0136e0694138-aa0f-4d7e-bf90-c32daf9dea44520400005303986540550.005802BR5925PATRICIA CRISTOVAM DOS SA6009SAO PAULO62070503***6304C78E";
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
}

