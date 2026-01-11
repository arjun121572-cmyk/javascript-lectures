const h1=document.querySelector('h1')
const container = document.querySelector(".container")
// const firstImg = document.querySelector('img')

 const paragraph= document.createElement('p')
// paragraph.innerText="hi"
// paragraph.classList.add('my-para')
// paragraph.id='my-id'
//  container.append(paragraph)
const newImage=document.createElement('img')
newImage.src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
container.append(newImage)


for(let i=2;i<=100;i++){
    const newImage=document.createElement('img')
    container.appendChild(newImage)
    newImage.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
}