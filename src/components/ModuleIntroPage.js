import { useState, useEffect } from "react"


const ModuleIntroPage = ({ userDevice }) => {

    const [introSegment, setIntroSegment] = useState(0)
    const [scrollPosition, setScrollPosition] = useState(0)

    // const easeInCss = "opacity-100 transition-opacity duration-1000 ease-in";
    // const easeOutCss = "opacity-0 transition-opacity duration-1000 ease-out";


    const handleScroll = () => {
        const position = window.pageYOffset
        console.log('da ', position)
        setScrollPosition(position)
    }


    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useEffect(() => {
        if (scrollPosition > 4 * window.innerHeight) {
            if (introSegment !== 4) {
                setIntroSegment(4)
            }
        }
        else if (scrollPosition > 3 * window.innerHeight) {
            if (introSegment !== 3) {
                setIntroSegment(3)
            }
        }
        else if (scrollPosition > 2 * window.innerHeight) {
            if (introSegment !== 2) {
                setIntroSegment(2)
            }

        }
        else {
            if (introSegment !== 1) {
                setIntroSegment(1)
            }
        }


    }, [scrollPosition, introSegment])




    return (
        <div className={`w-full bg-about_bg_img bg-fixed `}>



            <div className={` flex h-screen w-full justify-end  `}>
                <img
                    className=" w-full"
                    src={`/images/new_temp_images/${userDevice}/06_Club.png`}
                    alt="06_Club.png"
                />
            </div>

            <div className={` flex h-screen w-full justify-start`}>
                <img
                    className=" w-full "
                    src={`/images/new_temp_images/${userDevice}/07_Studio.png`}
                    alt="07_Studio.png"
                />
            </div>

            <div className={` flex h-screen w-full justify-end`}>
                <img
                    className=" w-full "
                    src={`/images/new_temp_images/${userDevice}/08_Market.png`}
                    alt="08_Market.png"
                />
            </div>


            <div className={` h-screen flex  w-full justify-center`}>
                <img
                    className="w-full "
                    src={`/images/new_temp_images/${userDevice}/09_Lazyverse.png`}
                    alt="09_Lazyverse.png"
                />
            </div>



        </div>
    )


}


export default ModuleIntroPage