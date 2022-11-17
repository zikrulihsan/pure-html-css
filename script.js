
const darkModeToggle = () => {
    let colorIds = [ "overview", "products"]
    let bwIds = ["description", "about"]
    let darkModeChecked = document.getElementById("darkMode").checked

    colorIds.map((id) => {
        document.getElementById(id).style.backgroundColor = darkModeChecked ? "black" : id == "overview" ? "rgba(246,194,119,255)" : "rgba(203,243,240,255)";
        if(id != "overview") document.getElementById(id).style.color = darkModeChecked ? "white" : "black";
    })
    
    bwIds.map((id) => {
        document.getElementById(id).style.backgroundColor = darkModeChecked ? "grey" : "white";
    })
}

