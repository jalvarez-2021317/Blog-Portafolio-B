import { Footer } from "../footer/Footer"
import { Navbar } from "../navbar/Navbar"

export const IM = () => {
  return (
    <>
    <body>
        <Navbar/>
        <div className="container">
      <div className="d-flex flex-column align-items-center">
        <img src='/Full.jpg'/>
        <br />
        <h1>Quien Soy</h1>
        <p className="mt-3">Soy Joshua Alvarez de origen Guatemalteco de 19 años, tengo un gusto particular por los videojugos que tiene una gran historia
        y tambien por quellos que ofrecen algo nuevo , tambien soy un programador con poca expereiencia en muchos lenguajes pero aspiro a tener mucha mas expreiencia
        con lenguajes de programacion como pyton , c# , y cuento con conocmientos en photoshop y en edicion de videos , espero algun dia poder tener una base amplia de lo que es el contenido web
        y sus muchas maneras de reproduccion ya sea a base de lenguajes de programcion en la edicion de videos o imagenes</p>
      </div>
      <Footer />
    </div>
    </body>
    </>
  )
}
