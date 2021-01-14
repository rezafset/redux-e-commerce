import img1 from '../../images/luisesquivel.jpg';
import img2 from '../../images/iphone.jpg';
import img3 from '../../images/blackshoe.jpg';
import img4 from '../../images/headphone.jpg';
import img5 from '../../images/redTshirt.jpg';
import img6 from '../../images/camera.jpg';
import img7 from '../../images/gold-zipper.jpg';
import img8 from '../../images/watches.jpg';


const initialState = {
    products : [
        {
            id: 1, name: 'Luis Esquivel',  image: img1, price: '60', discount: 3, discountPrice: 60 - 3/100 * 60, quantity: 1, description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, culpa. Vitae porro repudiandae eum esse!"
        },
        {
            id: 2, name: 'iPhone',  image: img2, price: '100', discount: 5, discountPrice: 100 - 5/100 * 100, quantity: 1, description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, culpa. Vitae porro repudiandae eum esse!"
        },
        {
            id: 3, name: 'Black Shoe',  image: img3, price: '70', discount: 4, discountPrice: 70 - 4/100 * 70, quantity: 1, description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, culpa. Vitae porro repudiandae eum esse!"
        },
        {
            id: 4, name: 'Headphone',  image: img4, price: '40', discount: 3, discountPrice: 40 - 3/100 * 40, quantity: 1, description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, culpa. Vitae porro repudiandae eum esse!"
        },
        {
            id: 5, name: 'T-Shirt',  image: img5, price: '50', discount: 4, discountPrice: 50 - 4/100 * 50, quantity: 1, description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, culpa. Vitae porro repudiandae eum esse!"
        },
        {
            id: 6, name: 'Camera',  image: img6, price: '40', discount: 3, discountPrice: 40 - 3/100 * 40, quantity: 1, description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, culpa. Vitae porro repudiandae eum esse!"
        },
        {
            id: 7, name: 'Ladies Bag',  image: img7, price: '50', discount: 4, discountPrice: 50 - 4/100 * 50, quantity: 1, description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, culpa. Vitae porro repudiandae eum esse!"
        },
        {
            id: 8, name: 'Watch',  image: img8, price: '40', discount: 3, discountPrice: 40 - 3/100 * 40, quantity: 1, description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, culpa. Vitae porro repudiandae eum esse!"
        },
    ],
    product : {}
}

const ProductReducer = (state = initialState, action) => {
    // console.log(typeof action.id);
    switch(action.type){
        
        case "PRODUCT": 
        return {...state, product: state.products.find(product=> product.id === parseInt(action.id))}
        
        default:
            return state;
    }
};

export default ProductReducer;