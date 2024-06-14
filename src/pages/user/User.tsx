import { Single } from '../../components/single/Single';
import './user.scss';

export const User = () => {
    //Fetch data and send to Single component
    return (
        <div className="user">
            <Single />
        </div>
    );
};
