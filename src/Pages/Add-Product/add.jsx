import React from 'react'
import ProductContainer from '../../Components/Add-Product/Container/container'
import ProductVariant from '../../Components/Add-Product/Variant/product-variant'
import ProductImage from '../../Components/Add-Product/Image/img-product'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { pullUser } from '../../Redux/User/user-selector'
import { post_add_start } from '../../Redux/Product/product-action'

import { Container, Form, AddVariant, SubmitButton } from './styles'

class AddProductPage extends React.Component {
    state = {
        show: false,
        variantInput: null,
        variant: [],
        imageUrl: [],
        prodName: "",
        stock: "",
        price: "",
        desc: "",
        err: null
    }

    addClick = e => {
        e.preventDefault()
        if (this.state.variantInput) {
            this.setState(prevState => ({
                variant: [...prevState.variant, this.state.variantInput],
                variantInput: ""
            }))
        }
    }

    variantInputHandler = e => {
        this.setState({
            variantInput: e.target.value
        })
    }

    removeVariant = e => {
        let buttonId = e.target.id

        buttonId = buttonId.split("-")
        buttonId[1] = "container"

        this.state.variant.splice([parseInt(buttonId[2])], 1)
        this.setState({ variant: this.state.variant })
    }

    selectFile = () => {
        document.getElementById('selectedFile').click();
    }

    showFile = e => {
        for (let j = 0; j < e.target.files.length; j++) {
            this.readURL(e.target, j);
        }
        this.setState({ show: !this.state.show })
    }

    removeFile = () => {
        this.setState({ imageUrl: [] })
        this.setState({ show: !this.state.show })
    }

    readURL = (input, index) => {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = e => {
                this.setState(prevState => ({
                    imageUrl: [...prevState.imageUrl, e.target.result]
                }))
            }
            reader.readAsDataURL(input.files[index]);
        }
    }

    inputHandler = e => {
        const { value, name } = e.target
        this.setState({ [name]: value })
    }

    onSubmit = e => {
        const { user } = this.props
        if (this.state.variant.length === 0) {
            e.preventDefault()
            this.setState({ err: "Empty Variant" })
            return
        } else if (!this.state.prodName || !this.state.stock || !this.state.price || !this.state.desc) {
            e.preventDefault()
            this.setState({ err: "Invalid Product Data!" })
            return
        }
        const dataToParse = {
            userId: user.id,
            variant: this.state.variant
        }
        document.getElementById("userInput").value = JSON.stringify(dataToParse)
    }

    render() {
        return (

            <Container>
                {/* In here im redirect to the server without fetch because
                    if passing with fetch, multer can't read the image data
                    this is absolutely a bad practice of using react
                */}
                <Form action='http://localhost:9000/seller/add-product' method="post" encType="multipart/form-data">
                    <ProductContainer inputHandler={this.inputHandler} errValue={this.state.err}></ProductContainer>                    
                    <AddVariant>
                        <ProductVariant
                            addVariant={this.addClick}
                            removeVariant={this.removeVariant}
                            variantData={this.state.variant}
                            inputHandler={this.variantInputHandler}
                            inputValue={this.state.variantInput}
                        >
                        </ProductVariant>

                        <ProductImage
                            removeFile={this.removeFile}
                            addFile={this.selectFile}
                            imageData={this.state.imageUrl}
                            showFile={this.showFile}
                            additionalURL=""
                            isEdit={this.state.show}
                        >
                        </ProductImage>
                        <input type="hidden" id="userInput" name="userInput"></input>
                        <SubmitButton type="submit" onClick={this.onSubmit} value="ADD PRODUCT" />
                    </AddVariant>
                </Form>
            </Container >
        )
    }
}

const stateProps = createStructuredSelector({
    user: pullUser
})

const dispatchProps = dispacth => ({
    post_add_start: (userInput) => dispacth(post_add_start({ userInput }))
})

export default connect(stateProps, dispatchProps)(AddProductPage)