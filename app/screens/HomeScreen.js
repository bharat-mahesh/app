import Swiper from 'react-native-swiper';

import HomeScreen1 from './HomeScreen1';
import HomeScreen2 from './HomeScreen2';

const HomeScreen = ( props ) => {
    return (
        <Swiper loop={false} index={0}>
            <HomeScreen1 />

            <HomeScreen2 />
        </Swiper>
    );
}

export default HomeScreen;