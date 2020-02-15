import React from 'react'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { pullData, pullPostData } from '../../Redux/Cart/cart-selector'
import { onUpdateCart, onSubmitCart } from '../../Redux/Cart/cart-action'
import { CartQuantity, Input } from './styles'

class Quantity extends React.Component {


    temp = {
        tempText: "",
        defaultBool: "",
        onCheckPrice: [],
        total: []
    }


    addQty = e => {
        const { name, id } = e.target
        let { cartData: { cart }, postData } = this.props

        cart.products[name].productData[id].qty += 1

        if (postData) {
            this.updateTotal()
        }

        this.temp.tempText = ""
        this.updatePrice()
    }

    subtractQty = e => {
        const { name, id } = e.target
        const { cartData: { cart }, postData } = this.props
        if (cart.products[name].productData[id].qty > 1) {
            cart.products[name].productData[id].qty -= 1
        } else {
            return
        }

        if (postData) {
            this.updateTotal()
        }

        this.temp.tempText = ""
        this.updatePrice()
    }

    updatedQty = e => {
        const convert = String.fromCharCode(e.keyCode)
        const { name, id } = e.target
        const { cartData: { cart }, postData } = this.props

        if (this.temp.defaultBool.name !== name || this.temp.defaultBool.id !== id) {
            this.temp.tempText = ""
        }
        if (e.keyCode === 8) {
            this.temp.tempText = this.temp.tempText.slice(0, this.temp.tempText.length - 1)
        }
        else if (e.keyCode >= 48 && e.keyCode <= 57) {
            this.temp.tempText += convert
        } else {
            return
        }
        this.temp.defaultBool = {
            name: name,
            id: id
        }
        cart.products[name].productData[id].qty = parseInt(this.temp.tempText) || 1

        if (postData) {
            this.updateTotal()
        }

        this.updatePrice()
    }

    updatePrice = () => {
        let { cartData: { cart, users }, onUpdateCart } = this.props
        let totalPrice = []
        let priceCount = 0

        cart.products.map((data, index) => {
            data.productData.map(item => {
                if (item) {
                    priceCount += item.price * item.qty
                }
            })
            totalPrice.push(priceCount)
            priceCount = 0
        })

        this.temp.total = totalPrice;

        console.log(totalPrice)
        onUpdateCart({ cart, users, totalPrice });
    }

    updateTotal = () => {
        let { cartData: { cart }, postData } = this.props
        let countPrice = 0

        postData.products.map((data, index) => {
            if (data) {
                data.productData.map(item => {
                    if (item) {
                        countPrice += item.price * item.qty
                    }
                })
                postData.total[index] = countPrice
                countPrice = 0
            }
        })

        const dataToParse = {
            userId: cart.userID,
            products: postData.products,
            total: postData.total
        }
        onSubmitCart(dataToParse)
    }

    render() {
        const { qty, position, parentPosition } = this.props
        return (
            <CartQuantity>
                <div className="qty-span">
                    <Input type="submit" id={position} name={parentPosition} value="-" onClick={this.subtractQty} />
                </div>
                <Input type="number" min="1" id={position} name={parentPosition} value={qty} onKeyDown={this.updatedQty} numberinput />
                <div className="qty-span">
                    <Input type="submit" id={position} name={parentPosition} value="+" onClick={this.addQty} />
                </div>
            </CartQuantity>
        )
    }
}

const stateProps = createStructuredSelector({
    cartData: pullData,
    postData: pullPostData
})

const dispatchProps = dispatch => ({
    onUpdateCart: data => dispatch(onUpdateCart(data)),
    onSubmitCart: data => dispatch(onSubmitCart(data))
})

export default connect(stateProps, dispatchProps)(Quantity)