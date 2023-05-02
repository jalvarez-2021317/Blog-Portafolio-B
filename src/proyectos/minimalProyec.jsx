import { Card, Button, Row, Col } from 'react-bootstrap';
import { Navbar } from '../navbar/Navbar';
import { Footer } from '../footer/Footer';

function ProyectosMinimal() {
  const cardData = [
    { id: 1, title: 'Mi Primera Pagina Web', text: 'Completado', url: 'https://github.com/jalvarez-2021317/Primera-pagina-web-jalvarez' },
    { id: 2, title: 'Control Academico / Grupal', text: 'Incompleto', url: 'https://github.com/jalvarez-2021317/javafx-control-academico-in5vb-2022' },
    { id: 3, title: 'Proyecto Calculadora', text: 'Completado', url: 'https://github.com/jalvarez-2021317/calculadora' },
    { id: 4, title: 'Billion Pizzas (grupal)', text: 'Completado', url: 'https://github.com/jalvarez-2021317/billion-pizzas-in5bv-grupo-1' },
    
  ];

  // Divide los cards en grupos de 3
  const cardGroups = [];
  for (let i = 0; i < cardData.length; i += 3) {
    cardGroups.push(cardData.slice(i, i + 3));
  }

  return (
    <div className='container'>
       
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
    </div>
  );
}

export default ProyectosMinimal;
