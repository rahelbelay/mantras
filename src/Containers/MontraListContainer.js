import {
    connect
} from 'react-redux';

import MantraList from '../components/MantraList'
import { ADD_MANTRA } from '../action';

function mapStateToProps(state) {
    return {
        mantras: state
    }

}


const reduxConnector = connect(mapStateToProps);
export default reduxConnector(MantraList);