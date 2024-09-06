function customRender(whatRender, whereRender){
    // agr yanaha pr bhut sare attribute honge to sbke liye bar bar setAttribute use krna pdega isko loop me try krte hia 
    // const newElement = document.createElement(whatRender.type)
    // newElement.innerHTML= whatRender.children
    // newElement.setAttribute("href", whatRender.props.href)
    // newElement.setAttribute("target", whatRender.props.target)
    // whereRender.appendChild(newElement)

    //**************************** */

    const newElement = document.createElement(whatRender.type)
    newElement.innerHTML = whatRender.children
    for(prop in whatRender.props){
        if(prop == "children") continue;
        newElement.setAttribute(prop, whatRender.props.prop)
    }

    whereRender.appendChild(newElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: "click me to visit google"

}

const mainnContainer = document.querySelector("#root")

customRender(reactElement, mainnContainer)

