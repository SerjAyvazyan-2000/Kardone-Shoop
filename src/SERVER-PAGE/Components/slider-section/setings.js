
const useSettings = () => {
    let settings = {
        dots:true,
        infinite: true,
        arrows: false,
        speed: 500,
        autoplay: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnFocus: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots:false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    dots:false

                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots:false

                }
            }
        ]
    };

    return {settings}
}
export default useSettings