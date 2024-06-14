import { Single } from '../../components/single/Single';
import { singleProduct } from '../../data';
import './product.scss';

export const Product = () => {
    //Fetch data and send to Single component
    return (
        <div className="product">
            <Single {...singleProduct} />
        </div>
    );
};
