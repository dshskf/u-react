import React from 'react'
import { InputVariant, InputLabel, SubInput, TextInput, SubmitButton, SubVariant, Paragraph, Span, Variant } from './styles'

class ProductVariant extends React.Component {
    render() {
        const { addVariant, removeVariant, variantData, inputHandler, inputValue } = this.props
        return (
            <InputVariant>
                <InputLabel>Variant</InputLabel>
                <SubInput>
                    <TextInput spellcheck="false" onChange={inputHandler} value={inputValue} />
                    <SubmitButton id="add-button" onClick={addVariant} />
                </SubInput>
                <Variant>
                    {
                        variantData.length > 0 ?
                            variantData.map((data, index) => {
                                return (
                                    <SubVariant key={index} id={`removecontainer${index}`}>
                                        <Paragraph>
                                            {data}
                                            <Span key={index} id={`remove-variant-${index}`} onClick={removeVariant}>&#10005;</Span>
                                        </Paragraph>
                                    </SubVariant>
                                )
                            })
                            :
                            null
                    }
                </Variant>
            </InputVariant>
        )
    }
}

export default ProductVariant
