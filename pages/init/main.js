import bodyDiv from "./comps/body/main.js"
import topoDiv from "./comps/top/main.js"
function initPageAddFunctionsToButtons(){
}

export default function initMain(){
    const root = document.getElementById("root")
    root.innerHTML = topoDiv() + bodyDiv()
    initPageAddFunctionsToButtons()
}