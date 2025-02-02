import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import splashScreen from '../../assets/splashScreen.jpg'
import { TypeAnimation } from 'react-type-animation'
const Home = () => {
    return (
        <div style={
            {
                backgroundImage: `url(${splashScreen})`,
                width: '100%',
                height: '100vh',

            }
        }>
            <div className='flex gap-1'>
                <div className='pt-32 w-[1000px]'>
                    <DotLottieReact
                        src={'Animation - 1738508469128.lottie'}
                        loop
                        autoplay

                    />
                </div>
                <div>
                    <h2 className="text-6xl text-center mt-80 font-bold">Connectopia</h2>
                    <p className='text-xl'> 
                         <TypeAnimation
                        sequence={[
                            'Connect',
                            1000,
                            'Collaborate',
                            1000,
                            'Create',
                            1000,

                        ]}
                        speed={50}
                        style={{ fontSize: '2em' }}
                        repeat={Infinity}/>
                        </p>
                </div>


            </div>

        </div>
    )
}
export default Home