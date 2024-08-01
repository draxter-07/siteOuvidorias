import bodyDiv from "./comps/body/main.js"
import topoDiv from "./comps/top/main.js"
async function initPageAddFunctionsToButtons(){
    let i = 0;
    while(true){
        const carr = document.getElementsByClassName("carrosseis")[0]
        await new Promise(resolve => setTimeout(resolve, 3000))
        i += 1
        if(i == 1){
            carr.style.translate = "-33%"
        }
        else if(i == 2){
            carr.style.translate = "-66%"
        }
        else if(i == 3){
            carr.style.translate = "0%"
            i = 0
        }
    }
}

export default async function initMain(){
    const root = document.getElementById("root")
    root.innerHTML = topoDiv() + bodyDiv()
    await initPageAddFunctionsToButtons()
}