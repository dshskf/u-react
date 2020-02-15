import React from "react";
import ErrorBox from '../../Error-box/error'
import {
  AddContainer,
  AddParagraph,
  Input,
  ProductPrice,
  AddTextArea,
  PriceSpan
} from "./styles";

class ProductContainer extends React.Component {
  render() {
    const { prodName, stock, price, desc, inputHandler, errValue } = this.props;

    return (
      <AddContainer>
        <AddParagraph>Name</AddParagraph>
        <Input
          type="text"
          name="prodName"
          spellcheck="false"
          value={prodName}
          onChange={inputHandler}
        />
        <AddParagraph>Stock</AddParagraph>
        <Input
          type="number"
          name="stock"
          min="1"
          max="999"
          value={stock}
          onChange={inputHandler}
        />
        <AddParagraph>Price</AddParagraph>
        <ProductPrice>
          <PriceSpan>Rp</PriceSpan>
          <Input
            type="number"
            name="price"
            min="1"
            value={price}
            onChange={inputHandler}
          />
        </ProductPrice>
        <AddParagraph>Description</AddParagraph>
        <AddTextArea
          name="desc"
          spellcheck="false"
          autocorrect="off"
          value={desc}
          onChange={inputHandler}
        />
        {
          errValue ?
            <ErrorBox errMsg={errValue} />
            :
            null
        }
      </AddContainer>
    );
  }
}

export default ProductContainer;
