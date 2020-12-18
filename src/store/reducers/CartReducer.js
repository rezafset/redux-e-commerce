const initState  = {
    products: [],
    totalPrice: 0,
    totalQuantity: 0
}

const CartReducer = (state = initState , action) => {
    let findProduct;
    let index;
    switch(action.type){

        case 'ADD_TO_CART':
        const {product,quantity} = action.payload;
        // console.log(product,quantity)
        const check = state.products.find(pr => pr.id === product.id);
        if(check){
            return state;
        } else {
            const productPrice = state.totalPrice + product.discountPrice * quantity;
            const productQuantity = state.totalQuantity + quantity;
            // console.log(productPrice, productQuantity)
            // selected product quantity + increased quantity
            product.quantity = quantity;
            return {
                ...state, 
                products: [...state.products, product],totalPrice: productPrice, 
                totalQuantity: productQuantity 
            }

        }
        case 'INC':

            findProduct = state.products.find(product=> product.id === action.payload);
            index = state.products.findIndex(product=> product.id === action.payload);
            findProduct.quantity += 1;
            findProduct[index] = index;
            return {
                ...state, 
                totalPrice: state.totalPrice + findProduct.discountPrice, 
                totalQuantity: state.totalQuantity + 1
            }
        case 'DEC':
            findProduct = state.products.find(product=> product.id === action.payload);
            index = state.products.findIndex(product=> product.id === action.payload);
            if(findProduct.quantity > 1){
                findProduct.quantity -= 1;
                findProduct[index] = index;

                return{
                    ...state, 
                    totalPrice: state.totalPrice - findProduct.discountPrice, 
                    totalQuantity: state.totalQuantity - 1
                }
            }
            else{
                return state;
            }
        case 'DELETE':
            findProduct = state.products.find(product=> product.id === action.payload);
            const remove = state.products.filter(product=> product.id !== action.payload);
            
            return {
                ...state,
                products: remove,
                totalPrice: state.totalPrice - findProduct.discountPrice * findProduct.quantity,
                totalQuantity: state.totalQuantity - findProduct.quantity
            }

        default:
            return state;
    }
};

export default CartReducer;