import {
    connect
} from 'react-redux';

import MantraForm from '../components/MantraForm'
import { actionAddMantra } from '../action';


function mapDispatchToProps(dispatch) {
    return {
        handleSubmit: (newMantra) => {
            dispatch(actionAddMantra(newMantra))
        }

    }
}
const reduxConnector = connect(null, mapDispatchToProps)
    ; export default reduxConnector(MantraForm);