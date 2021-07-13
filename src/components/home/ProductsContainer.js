import React, {useState} from "react";
import dataJson from "../../data.json";
import { Card, Button } from "react-bootstrap";

const ProductContainer = () => {
  const data = dataJson.products;

  const firstView = data.filter((elem) => elem.type === "Aceites");
  const [products, setProducts] = useState(firstView);

  const productsType = (option) => {
    // eslint-disable-next-line default-case
    switch (option) {
      case "Aceites":
        const aceites = data.filter((elem) => elem.type === option);
        setProducts(aceites);
        break;
      case "Conservas":
        const conservas = data.filter((elem) => elem.type === option);
        setProducts(conservas);
        break;
      case "Detergentes":
        const detergentes = data.filter((elem) => elem.type === option);
        setProducts(detergentes);
        break;
      case "Jabones":
        const jabones = data.filter((elem) => elem.type === option);
        setProducts(jabones);
        break;
      case "Pastas":
        const pastas = data.filter((elem) => elem.type === option);
        setProducts(pastas);
        break;
    }
  };
  return( 
    <section className='w-100 pt-5 mt-5'>
      <article className='w-30'>
      <nav>
        <ul>
            <div>
              <li onClick={() => productsType("Aceites")}>Aceites</li>
              <li onClick={() => productsType("Abarrotes")}>Abarrotes</li>
              <li onClick={() => productsType("Frutas y verduras")}>
                Frutas y verduras
              </li>
              <li onClick={() => productsType("Congelados")}>Congelados</li>
              <li onClick={() => productsType("Conservas")}>Conservas</li>
              <li onClick={() => productsType("Higiene")}>Higiene</li>
            </div>
          </ul>
        </nav>
      </article>
      <article className='w-60'>
          {products.map((product) => (
            <Card key={product.id} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={product.img} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
                <Button variant="primary">Agregar</Button>
              </Card.Body>
            </Card>
          ))}
      </article>
    </section>
  );
};

export default ProductContainer;
