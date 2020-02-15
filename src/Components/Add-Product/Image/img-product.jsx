import React from 'react';
import {
	InputImage,
	AddImage,
	RemoveImage,
	UploadImage,
	Paragraph,
	Input,
	Span,
} from './styles';

class ProductImage extends React.Component {
	render() {
		const { removeFile, addFile, imageData, showFile, additionalURL, isEdit } = this.props;
		console.log(imageData);
		return (
			<InputImage id='input-image'>
				<AddImage id='add-image' editprod={isEdit}>
					<Input
						id='selectedFile'
						type='file'
						accept='.png, .jpg, .jpeg'
						name='imgInput'
						onChange={showFile}
						multiple
						selectFile
					/>
					<Input type='button' onClick={addFile} />
					<Span>+</Span>
					<Paragraph>Add Picture</Paragraph>
				</AddImage>

				<RemoveImage id='remove-image' onClick={removeFile} editprod={isEdit}>
					<Span>-</Span>
					<Paragraph>CLEAR</Paragraph>
				</RemoveImage>

				{
					imageData.length > 0 ?
						imageData.map((data, index) => {
							return (
								<UploadImage>
									<img key={index} src={additionalURL + data} />
								</UploadImage>
							);
						})
						:
						null
				}
			</InputImage>
		);
	}
}

export default ProductImage;
