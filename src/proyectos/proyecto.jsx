import { Card, Button, Row, Col } from 'react-bootstrap';
import { Navbar } from '../navbar/Navbar';
import { Footer } from '../footer/Footer';

function Proyectos() {
  const cardData = [
    { id: 1, title: 'Mi Primera Pagina Web', text: 'Completado', url: 'https://github.com/jalvarez-2021317/Primera-pagina-web-jalvarez' },
    { id: 2, title: 'Control Academico / Grupal', text: 'Incompleto', url: 'https://github.com/jalvarez-2021317/javafx-control-academico-in5vb-2022' },
    { id: 3, title: 'Proyecto Calculadora', text: 'Completado', url: 'https://github.com/jalvarez-2021317/calculadora' },
    { id: 4, title: 'Billion Pizzas (grupal)', text: 'Completado', url: 'https://github.com/jalvarez-2021317/billion-pizzas-in5bv-grupo-1' },
    { id: 5, title: 'Primera Pagina Web (2023)', text: 'Completado', url: 'https://github.com/jalvarez-2021317/Pruevaz' },
    { id: 6, title: 'Fake Google ', text: 'Incompleto', url: 'https://github.com/jalvarez-2021317/False-Google' },
    { id: 7, title: 'Laboratorio Web 2023', text: 'Completado', url: 'https://github.com/jalvarez-2021317/Laboratorio-1-Pagina-web-html-ccs' },
    { id: 8, title: 'Agenda Web ', text: 'Completado.', url: 'https://github.com/jalvarez-2021317/Agenda-Web-IN6BV' },
    { id: 9, title: 'Control Estudiantes', text: 'Completado', url: 'https://github.com/jalvarez-2021317/controlEstudiantes' },
    { id: 10, title: 'Back End Gestor de Empresas', text: 'Completado', url: 'https://github.com/jalvarez-2021317/Gestion-Empresas' },
    { id: 11, title: 'Tienda Online Back End', text: 'Completado', url: 'https://github.com/jalvarez-2021317/Online-shop-IN6BV' },
    { id: 12, title: 'Gift App React', text: 'Completado', url: 'https://github.com/jalvarez-2021317/gift-App-React-Proyect' }
  ];

  // Divide los cards en grupos de 3
  const cardGroups = [];
  for (let i = 0; i < cardData.length; i += 3) {
    cardGroups.push(cardData.slice(i, i + 3));
  }

  return (
    <div className='container'>
         <Navbar />
      {cardGroups.map((group, index) => (
        <Row key={index} className="mb-4">
          {group.map((card) => (
            <Col md={4} key={card.id}>
              <Card>
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.text}</Card.Text>
                  <Button href={card.url}>Go to website</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ))}
      <Footer/>
    </div>
  );
}

export default Proyectos;
