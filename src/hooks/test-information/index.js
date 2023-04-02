import slider1 from "../../assets/style/images/slider-1.webp"
import slider2 from "../../assets/style/images/slider-2.webp"
import slider3 from "../../assets/style/images/slider-3.webp"
import slider4 from "../../assets/style/images/slider-4.webp"
import product2 from "../../assets/style/images/product2.avif"
import product1 from "../../assets/style/images/product1.avif"
import product3 from "../../assets/style/images/product3.avif"
import product4 from "../../assets/style/images/product4.avif"
import product5 from "../../assets/style/images/product5.avif"
import product6 from "../../assets/style/images/product6.avif"
import product7 from "../../assets/style/images/product7.avif"


const useInformation = () => {
    let homeSliderInfo = [
        {img: slider1, title: 'Your Wheels Are In', description: "GOOD HANDS!", road: 'READ MORE'},
        {img: slider2, title: 'Your Wheels Are In', description: "GOOD HANDS!", road: 'READ MORE'},
        {img: slider3, title: 'Your Wheels Are In', description: "GOOD HANDS!", road: 'READ MORE'},
        {img: slider4, title: 'Your Wheels Are In', description: "GOOD HANDS!", road: 'READ MORE'}
    ]
    let featuredProducts = [
        {
            img: product7,
            name: "AIR INTAKE HOSE FOR TOYOTA CAMRY COMPATIBLE2 ",
            prise: 220,
            Color: "Black",
            ProductType: "Lighting",
            Vendor: "China",
            Weight: " 2.0 kg"

        },
        {
            img: product6,
            name: "AIR INTAKE HOSE FOR TOYOTA CAMRY COMPATIBLE2 ",
            prise: 220,
            Color: "Black",
            ProductType: "Lighting",
            Vendor: "China",
            Weight: " 2.0 kg"

        },
        {
            img: product5,
            name: "AIR INTAKE HOSE FOR TOYOTA CAMRY COMPATIBLE2 ",
            prise: 220,
            Color: "Black",
            ProductType: "Lighting",
            Vendor: "China",
            Weight: " 2.0 kg"

        },
        {
            img: product4,
            name: "AIR INTAKE HOSE FOR TOYOTA CAMRY COMPATIBLE2 ",
            prise: 220,
            Color: "Black",
            ProductType: "Lighting",
            Vendor: "China",
            Weight: " 2.0 kg"

        },
        {
            img: product3,
            name: "AIR INTAKE HOSE FOR TOYOTA CAMRY COMPATIBLE2 ",
            prise: 220,
            Color: "Black",
            ProductType: "Lighting",
            Vendor: "China",
            Weight: " 2.0 kg"

        },
        {
            img: product2,
            name: "AIR INTAKE HOSE FOR TOYOTA CAMRY COMPATIBLE2 ",
            prise: 220,
            Color: "Black",
            ProductType: "Lighting",
            Vendor: "China",
            Weight: " 2.0 kg"

        },
        {
            img: product1,
            name: "AIR INTAKE HOSE FOR TOYOTA CAMRY COMPATIBLE2 ",
            prise: 220,
            Color: "Black",
            ProductType: "Lighting",
            Vendor: "China",
            Weight: " 2.0 kg"

        },
    ]
    let catalog = [
        {
            name: "Body Parts",
            productsCount: 0,
            img: slider1,
            description: "Even if you don’t like speed and power, racing and all this stuff, but you love your car, you are still in the right place because you might be interested in professional spare parts.Our goods are real bestsellers; we are offering a great list of some unique spare parts that have no analogues.Have you ever noticed that we often try to talk to the car as if it was a human? We believe that everything must be perfect in our business. Car is a part of culture because we spend a significant amount of time of our lives by the steering wheel. We spend endless hours in traffic jams; we like to eat in a car, like to listen to music and so on. Just remember that" +
                " we estimate our clients and improve our support and delivery systems.",
            id: 1
        },
        {
            name: "Exterior ",
            productsCount: 0,
            img: slider2,
            description: "We spend endless hours in traffic jams; we like to eat in a car, like to listen to music and so on. And you know it is true. We believe that everything must be perfect in our business. We produce and sell only professional parts - that’s why we have a great number of devoted clients all over the country and there is nothing better than the happy and satisfied customers. We use the achievements of progress and provide some new technologies. Car is more than a piece of a metal, it became a social phenomenon. Our goods are real bestsellers; we are offering a great list of some unique spare parts that have no analogues. Have you ever noticed that we often try to talk to " +
                "the car as if it was a human? We use the achievements of progress and provide some new technologies.",
            id: 2
        },
        {
            name: "Interior",
            productsCount: 0,
            img: slider3,
            description: "Our industry made a great number of legendary cars, and this is a true argument that it is essential part of our life.So, if you like listening to the sound of your engine, or if you like the smell of burning rubber of your wheels, you are in the right place. Even if you don’t like speed and power, racing and all this stuff, but you love your car, you are still in the right place because you might be interested in professional spare parts.The secret of our success is that our goods are an unbeaten combination of high quality and fair price. Nowadays car is not just a vehicle, it is a part of you, it influences your style and your character. " +
                "Have you ever noticed that we often try to talk to the car as if it was a human?",
            id: 3
        },
        {
            name: "Lighting",
            productsCount: 0,
            img: slider4,
            description: "Nowadays car is not just a vehicle, it is a part of you, it influences your style and your character. We spend endless hours in traffic jams; we like to eat in a car, like to listen to music and so on. Our industry made a great number of legendary cars, and this is a true argument that it is essential part of our life.The secret of our success is that our goods are an unbeaten combination of high quality and fair priceYou know, psychologists claim that style of driving shows some striking features of character. And you know it is true. Car is more than a piece of a metal, it became a social phenomenon. Have you ever noticed that we often try to talk to the " +
                "car as if it was a human? Our manufacturers and vendors guarantee its high quality.",
            id: 4
        },
        {
            name: "Sale",
            productsCount: 0,
            img: slider1,
            description: 'So, if you like listening to the sound of your engine, or if you like the smell of burning rubber of your wheels, you are in the right place.We provide auto spare parts and our main goal is to satisfy all of our customers. The secret of our success is that our goods are an unbeaten combination of high quality and fair price. We produce and sell only professional parts - that’s why we have a great number of devoted clients all over the country and there is nothing better than the happy and satisfied customers. Our goods are real bestsellers; we are offering a great list of some unique spare parts that have no analogues. We believe that everything must be perfect in our business. And don’t' +
                ' forget you can save your money with the help of our system of benefits and discounts.',
            id: 5
        },


    ]

    return {homeSliderInfo, featuredProducts, catalog}
}
export default useInformation