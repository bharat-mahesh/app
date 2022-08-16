import { View } from 'react-native';

import colors from '../../configs/colors';


const SectionSeparator = ({ color=colors.light, height=30 }) => {

    return (
        <View style={{backgroundColor: color, height: height}} />
    );
}

export default SectionSeparator;