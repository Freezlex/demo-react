import {Platform} from 'react-native';

function url(){
    if (Platform.OS === 'web'){
        return 'localhost'
    }
    else {
        return '10.0.2.2'
    }
}


export default url();
