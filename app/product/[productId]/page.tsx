export default async function productDetails({params}:{
    params: {
        productId: string;
    }
}){
    const {productId} = await params;
    return (
        <div>
            Product Details {productId}
        </div>
    );
}