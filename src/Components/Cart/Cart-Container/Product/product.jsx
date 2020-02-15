import React from 'react'
import Quantity from '../../../qty-handler/qty'

import { CartProduct, Input, CartImage, CartDetail, CartPrice, CartSymbols, LinkButton, CartVariant } from './styles'

class Product extends React.Component {
    render() {
        const { productId, name, price, productImg, qty, index, variant,
            indexPosition, checkItem, deleteItem
        } = this.props
        return (
            <CartProduct>
                <Input id={indexPosition} name={index} type="checkbox" onClick={checkItem} alt="" checkBox />
                <CartImage src={"http://localhost:9000/" + productImg} />

                <CartDetail>
                    <LinkButton to={'/product/' + productId}>{name}</LinkButton>
                    <Quantity
                        qty={qty}
                        position={indexPosition}
                        parentPosition={index}
                    ></Quantity>
                </CartDetail>

                <CartVariant>
                    <p>{variant}</p>
                </CartVariant>

                <CartPrice>
                    <p>Rp {price}</p>
                </CartPrice>

                <CartSymbols>
                    <Input type="submit" id={indexPosition} name={index} onClick={deleteItem} value="&#9747;" />
                </CartSymbols>
            </CartProduct>
        )
    }
}

export default Product