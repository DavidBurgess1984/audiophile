import './product-images.css'
import { ProductProps } from "../../../types/PRODUCTS";

const ProductImages = ({product}:ProductProps ) => {

    return (
        <div className='product__images-container'>
            <div className='product__images-left-container'>
                <div className="product__image-left">
                    <img alt='main-product-1' className="product__image-left-photo" src={product.gallery.first.desktop} />
                </div>
                <div className="product__image-left">
                    <img alt='main-product-2' className="product__image-left-photo" src={product.gallery.second.desktop} />
                </div>
            </div>
            <div className='product__images-main-container'>
                <img alt='main-product-3' className="product__image-main-photo" src={product.gallery.third.desktop} />
            </div>
        </div>
    );
}

export default ProductImages