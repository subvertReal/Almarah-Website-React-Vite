import { useParams } from "react-router-dom";

function Product(){
    const { id } = useParams();
    return(
        <>
            <div>prop id output {id}</div>
        </>
    )
}

export default Product;