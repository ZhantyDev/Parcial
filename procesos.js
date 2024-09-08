const BaseUrl = "https://rickandmortyapi.com/api/"

const valorInput = () => {
    let textoImput = document.getElementById('input_juego')
    let texto = textoImput.value   
    const endPoint = `character/${texto}`
    const url = `${BaseUrl}${endPoint}`     
    axios.get(url)
    .then(res => ImprimirInfo(res.data))
    .catch(err => console.log(err))
}
const MostrarReco = () => {
    let vec = []
    let vecData=[]
    for (let i = 0; i<19 ; i++){
        numAl= Math.floor(Math.random() * (826)) + 1;               
        vec.push(numAl)   
        const endPoint = `character/${numAl}`
        const url = `${BaseUrl}${endPoint}`     
        axios.get(url)
        .then(res => vecData.push(res.data.name))
        .catch(err => console.log(err))      
    }  
    console.log(vec)
    console.log(vecData)
    let respuesta = document.getElementById('reco')
    respuesta.innerHTML=`
    <h2 class = "text">${vec[0]}</h2>    
    <h2 class = "text">${vec[1]}</h2>    
    <h2 class = "text">${vec[2]}</h2>    
    <h2 class = "text">${vec[3]}</h2>    
    <h2 class = "text">${vec[4]}</h2>    
    <h2 class = "text">${vec[5]}</h2>    
    <h2 class = "text">${vec[6]}</h2>    
    <h2 class = "text">${vec[7]}</h2>    
    <h2 class = "text">${vec[8]}</h2>    
    <h2 class = "text">${vec[9]}</h2>    
    <h2 class = "text">${vec[10]}</h2>    
    <h2 class = "text">${vec[11]}</h2>    
    <h2 class = "text">${vec[12]}</h2>    
    <h2 class = "text">${vec[13]}</h2>    
    <h2 class = "text">${vec[14]}</h2>    
    <h2 class = "text">${vec[15]}</h2>    
    <h2 class = "text">${vec[16]}</h2>    
    <h2 class = "text">${vec[17]}</h2>    
    <h2 class = "text">${vec[18]}</h2>
    `
}

const ImprimirInfo = (data) => {
    let respuesta = document.getElementById('impresion')
    respuesta.innerHTML=`
    <h2 class = "text">Nombre: ${data.name}</h2>
    <h2 class = "text">Origen: ${data.origin['name']}</h2>    
    <h2 class = "text">especie: ${data.species}</h2>    
    <h2 class = "text">genero: ${data.gender}</h2>    
    <h2 class = "text" >estado: ${data.status}</h2>
    <img src ="${data.image}"></img>
    `
}
window.onload = MostrarReco
