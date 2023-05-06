import "./style.scss"
import {useState} from "react";
import testImage from "../../../../assets/style/images/logo.png"
import testImage1 from "../../../../assets/style/images/banner.webp"


const useValidateNewProduct = (carName) => {

    const [newAutoParts, setNewAutoParts] = useState({
        name: '',
        description: '',
        productImages: [],
        price: '',
        starPoints: '',
        productType: '',
        vendor: "",
        weight: '',
        productTags: '',
        vehicleType: '',

    })

    const [errorText, setErrorText] = useState({
        name: '',
        description: '',
        productImages: '',
        price: '',
        starPoints: '',
        productType: '',
        vendor: "",
        weight: '',
        productTags: '',
        vehicleType: '',

    })

    const validation = () => {
        let validate = true
        let errorString = {
            name: '',
            description: '',
            productImages: '',
            price: '',
            starPoints: '',
            productType: '',
            vendor: "",
            weight: '',
            productTags: '',
            vehicleType: '',
        }
        if (!newAutoParts.name.trim().length) {
            errorString.name = "Fill in the required product name"
            validate = false

        }
        if (!newAutoParts.productImages.length) {
            errorString.productImages = "Fill in the required product images"
            validate = false

        }
        if (newAutoParts.starPoints.length && newAutoParts.starPoints.length > 1) {
            errorString.starPoints = "Write a single digit number only"
            validate = false
        }
        if (newAutoParts.starPoints && newAutoParts.starPoints.length <= 1) {
            let starLength = newAutoParts.starPoints
            for (let i = 0; i < starLength; i++) {
                if (i > 4) {
                    validate = false
                    errorString.starPoints = 'Length should not exceed 5'
                }
            }
        }


        if (!newAutoParts.price.trim().length) {
            errorString.price = "Fill in the required price"
            validate = false
        }
        if (!newAutoParts.productType.trim().length) {
            errorString.productType = "Fill in the required product type"
            validate = false

        }
        if (!newAutoParts.vendor.trim().length) {
            errorString.vendor = "Fill in the required vendor"
            validate = false

        }
        if (!newAutoParts.weight.trim().length) {
            errorString.weight = "Fill in the required weight"
            validate = false

        }
        if (!newAutoParts.productTags.trim().length) {
            errorString.productTags = "Fill in the product tags"
            validate = false

        }
        if (!newAutoParts.vehicleType.trim().length) {
            errorString.vehicleType = "Fill in the required vehicle type"
            validate = false

        }
        if (newAutoParts.vehicleType.trim().length && newAutoParts.vehicleType !== carName ) {
            errorString.vehicleType = `Create a spare part only for the given car, eg ${carName}`
            validate = false

        }

        setErrorText(errorString)
        return validate
    }
    return {validation, newAutoParts, errorText, setNewAutoParts, setErrorText}
}
export default useValidateNewProduct