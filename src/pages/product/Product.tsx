import { Single } from '../../components/single/Single';
import './product.scss';

export const Product = () => {
    //Fetch data and send to Single component
    return (
        <div className="product">
            <Single />
        </div>
    );
};
