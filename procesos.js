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
    respuesta.innerHTML = vec.map((numero) => `
    <h2 class="text"> ${numero}</h2>`).join('')    
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
