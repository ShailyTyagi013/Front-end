function run(){
    let htmlCode = document.getElementById("htmlcode").value;
    let cssCode = document.getElementById("csscode").value;
    let jsCode = document.getElementById("jscode").value;
    let Output = document.getElementById("output");

    Output.contentDocument.body.innerHTML = htmlCode+"<style>"+cssCode+"</style>";
    Output.contentWindow.eval(jsCode);
}