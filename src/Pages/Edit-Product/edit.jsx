import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { pullUser } from '../../Redux/User/user-selector'
import { pullDetails } from '../../Redux/Product/product-selector'
import { edit_start } from '../../Redux/Product/product-action'
import ProductContainer from '../../Components/Add-Product/Container/container'
import ProductVariant from '../../Components/Add-Product/Variant/product-variant'
import ProductImage from '../../Components/Add-Product/Image/img-product'
import { Container, AddVariant, SubmitButton, Form } from '../Add-Product/styles'
import ProgressBar from '../../Components/Progress-bar/bar'

export class EditProductPage extends Component {
    state = {
        show: true,
        variant: [],
        variantInput: null,
        imageUrl: [],
        URL: "http://localhost:9000/",
        prodName: "",
        stock: "",
        price: "",
        desc: "",
        isEdit: false,
        gotData: false
    }

    componentDidMount() {
        const { productId } = this.props.match.params
        const { edit_start } = this.props
        if (this.state.gotData === false) {
            edit_start(productId)
        }
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
        this.setState({ variant: this.state.variant, isEdit: true })
    }

    selectFile = () => {
        document.getElementById('selectedFile').click();
    }

    showFile = e => {
        for (let j = 0; j < e.target.files.length; j++) {
            this.readURL(e.target, j);
        }
        this.setState({ URL: "", show: !this.state.show })
    }

    removeFile = () => {
        this.setState({
            URL: "",
            imageUrl: [],
            isEdit: true,
            show: !this.state.show
        })
    }

    readURL = (input, index) => {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = e => {
                this.setState(prevState => ({
                    imageUrl: [...prevState.imageUrl, e.target.result],
                    isEdit: true
                }))
            }
            reader.readAsDataURL(input.files[index]);
        }
    }

    inputHandler = e => {
        console.log("hello")
        const { value, name } = e.target
        this.setState({ [name]: value, isEdit: true })
    }

    onSubmit = e => {
        const { productId } = this.props.match.params
        const dataToParse = {
            prodId: productId,
            variant: this.state.variant
        }
        document.getElementById("inputData").value = JSON.stringify(dataToParse)
    }


    render() {
        return (
            <Container>
                {
                    this.props.product && this.state.gotData === false ||
                        this.props.product && JSON.stringify(this.props.product.products.productImg) !== JSON.stringify(this.state.imageUrl) && this.state.isEdit === false ?
                        this.setState({
                            variant: this.props.product.products.variant,
                            imageUrl: this.props.product.products.productImg,
                            prodName: this.props.product.products.name,
                            stock: this.props.product.products.stock,
                            price: this.props.product.products.price,
                            desc: this.props.product.products.description,
                            gotData: true
                        })
                        :
                        null
                }
                {
                    this.props.product ?
                        <Form action="http://localhost:9000/seller/edit-product" method="post" encType="multipart/form-data">
                            {/* <form onSubmit={this.onSubmit} encType="multipart/form-data"> */}
                            <ProductContainer inputHandler={this.inputHandler} {...this.state}></ProductContainer>
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
                                    additionalURL={this.state.URL}
                                    isEdit={this.state.show}
                                >
                                </ProductImage>
                                <input type="hidden" id="inputData" name="userInput"></input>
                                <SubmitButton type="submit" onClick={this.onSubmit} value="UPDATE PRODUCT" />
                            </AddVariant>
                        </Form>
                        :
                        <ProgressBar></ProgressBar>
                }

            </Container>
        )
    }
}

const stateProps = createStructuredSelector({
    product: pullDetails,
    user: pullUser
})

const dispatchProps = dispatch => ({
    edit_start: (uid) => dispatch(edit_start({ uid }))
})

export default connect(stateProps, dispatchProps)(EditProductPage)

