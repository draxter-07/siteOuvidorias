import initMain from "./init/main.js"
import homeMain from "./home/main.js"

export default async function constructMain(goTo){
    const root = document.getElementById("root")
    root.innerHTML = ""
    if(goTo == null){
        initMain()
    }
}