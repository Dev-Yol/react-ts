import { IProduct } from "models/interfaces";
import { useSelector } from "react-redux";
import { useParams} from "react-router-dom";
const ProductDetails = () => {
    const params = useParams();
    const product = useSelector((state: any) => state.app_store.products).find(
        (product: IProduct) => product.id === Number(params.id)
    );
    return <div>{JSON.stringify(product)}</div>;
};

export default ProductDetails;