import cat_dog_header from './cat_dog_header.jpg'
import cat_person_about_us from './cat_person_about_us.jpg'
import cat_category from './cat_category.jpg'
import dog_category from './dog_category.jpg'
import luna from './luna.jpg'
import nick from './nick.jpg'
import pingo from './pingo.jpg'
import timtim from './timtim.jpg'
import dna from './dna.png'
import gender from './gender.png'




export const assets = {
    cat_dog_header,
    cat_person_about_us,
    luna,
    nick,
    pingo,
    timtim,
    dna,
    gender
}

export const listaDeEspecies = [
    {   
        id: 1,
        especie: "Gatos",
        imagem: cat_category
    },
    {
        id: 2,
        especie: "Cães",
        imagem: dog_category
    }
]

export const petsParaAdocao = [
    {
        id: 1,
        imagem: nick,
        especie: "Gatos",
        nome: "Nick Mason",
        sexo: "macho",
        cidade: "Cataguases",
        estado: "MG",
        descricao: "",
        status: true
  
      },
      {
        id: 2,
        imagem: timtim,
        especie: "Cães",
        nome: "Tim Tim",
        sexo: "macho",
        cidade: "Cataguases",
        estado: "MG",
        descricao: "",
        status: true
      },
      {
        id: 3,
        imagem: pingo,
        especie: "Gatos",
        nome: "Pingo",
        sexo: "macho",
        cidade: "Leopoldina",
        estado: "MG",
        descricao: "",
        status: true
      },
      {
        id: 4,
        imagem: luna,
        nome: "Luna",
        especie: "Gatos",
        sexo: "femea",
        cidade: "Leopoldina",
        estado: "MG",
        descricao: "",
        status: true
      }

]

