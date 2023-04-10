let properties = [];
const streetAddress = document.getElementById("streetAddress");
const propertyType = document.getElementById("propertyType");
const city = document.getElementById("city");
const state = document.getElementById("state");
const propertyListSection = document.getElementById("realEstateListHeader");
const userInputButton = document.getElementById("userInputButton");

userInputButton.addEventListener("click", ()=>{
  
    const newProperty = {
        streetAddress: streetAddress.value,
        propertyType: propertyType.value,
        city: city.value,
        state: state.value
    };

    properties.push(newProperty);


    // for(const property of properties){
    //     const renderedProperty = render(property);
    //     propertyListSection.append(renderedProperty)
    // }

    const renderedProperties = properties.map((property, idx)=>{
        const renderedProperty = render(property, idx);
        return renderedProperty
    })

    propertyListSection.replaceChildren(... renderedProperties)
})

function render(propertyObj, idx){
    const propertyWrapper = document.createElement("div");
    propertyWrapper.style.border = "2px solid"
    propertyWrapper.style.margin = "8%"

    const propertyCity = document.createElement("h1");
    propertyCity.textContent = propertyObj.city;

    const propertyType = document.createElement("p");
    propertyType.textContent = propertyObj.propertyType;

    const propertyState = document.createElement("h3");
    propertyState.textContent = propertyObj.state;

    const propertyAddress = document.createElement("p");
    propertyAddress.textContent = propertyObj.streetAddress;

    const propertyDeleteButton = document.createElement("button");
    propertyDeleteButton.textContent = "Delete X"
    propertyDeleteButton.style.backgroundColor = "red"
    propertyDeleteButton.style.borderRadius = "40%"

    propertyDeleteButton.addEventListener("click", function(){
        properties.splice(idx, 1);
        const renderedProperties = properties.map((property, idx)=>{
            const renderedProperty = render(property, idx);
            return renderedProperty
        })
    
        propertyListSection.replaceChildren(... renderedProperties)
    })

    propertyWrapper.append(propertyCity, propertyState, propertyAddress, propertyType, propertyDeleteButton)

    return propertyWrapper;

}


