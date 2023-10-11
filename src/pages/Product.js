import { Link } from 'react-router-dom';

const PRODUCTS = [
  { id: 'p1', title: 'Product 1' },
  { id: 'p2', title: 'Product 2' },
  { id: 'p3', title: 'Product 3' },
  { id: 'p4', title: 'Product 4' },
  { id: 'p5', title: 'Product 5' },
];

const ProductsPage = () => {
  return (
    <div>
      <p>This is product page</p>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            {/* <Link to={`/products/${product.id}`}>{product.title}</Link> */}
            <Link to={product.id}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;