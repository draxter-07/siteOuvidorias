import bodyDiv from "./comps/body/main.js"
import topDiv from "./comps/top/main.js"

function homePageAddFunctionsToButtons(){
}

export default function homeMain(){
    const root = document.getElementById("root")
    root.innerHTML = topDiv() + bodyDiv()
    homePageAddFunctionsToButtons()
}