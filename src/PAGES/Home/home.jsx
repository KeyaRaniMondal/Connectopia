import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import splashScreen from '../../assets/splashScreen.jpg'
const Home = () => {
    return (
        <div style={
            {
                backgroundImage: `url(${splashScreen})`,
                width: '100%',
                height: '100vh',

            }
        }>

            <div className='pt-32 w-[1000px]'>
                <DotLottieReact
                    src={'Animation - 1738508469128.lottie'}
                    loop
                    autoplay

                />
            </div>

        </div>
    )
}
export default Home