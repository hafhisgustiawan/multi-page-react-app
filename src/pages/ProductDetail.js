import { Link, useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  const params = useParams();

  return (
    <div>
      <h1>Product Details!</h1>
      <p>{params.productId}</p>
      <button>
        {/*disini kita back ke path parent bukan ke halaman sebelumnya atau bisa di setting dengan relative props di Link componen, cek video 312*/}
        <Link to=".." relative="path">
          {' '}
          BACK
        </Link>
      </button>
    </div>
  );
};

export default ProductDetailPage;
