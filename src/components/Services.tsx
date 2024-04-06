import { FaBeer } from 'react-icons/fa'
import { IconContext } from "react-icons"

export default function Services(){
    return(
        <IconContext.Provider value={{size:"1.5em", color:"#7E74F1"}}>
            <div className='flex flex-col items-center text-center py-16 bg-background-2'>
                <div className='text-left'>
                    <p>Services</p>
                    <h1>Specialized in</h1>
                </div>
                <div className='flex flex-col items-center sm:flex-row'>
                    <div className='w-5/6 mt-4 p-12 bg-background-1 rounded-md mb-2'>
                        <div className='w-fit mx-auto p-6 bg-service-bg rounded-2xl'>
                            <FaBeer/>
                        </div>
                        <h2 className='my-3'>Lorem ipsum</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur totam reprehenderit a in inventore ex itaque. In cumque</p>
                    </div>
                    <div className='w-5/6 mt-4 p-12 bg-background-1 rounded-md mb-2'>
                        <div className='w-fit mx-auto p-6 bg-service-bg rounded-2xl'>
                        <FaBeer/>
                        </div>
                        <h2 className='my-3'>Lorem ipsum</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur totam reprehenderit a in inventore ex itaque. In cumque</p>
                    </div>
                    <div className='w-5/6 mt-4 p-12 bg-background-1 rounded-md'>
                        <div className='w-fit mx-auto p-6 bg-service-bg rounded-2xl'>
                            <FaBeer/>
                        </div>
                        <h2 className='my-3'>Lorem ipsum</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur totam reprehenderit a in inventore ex itaque. In cumque</p>
                    </div>
                </div>
            </div>
        </IconContext.Provider>
    )
}