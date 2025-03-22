import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { Loader } from "./ui/Loader";

export const GifGrid = ({category}) => {
    
    const {images, isLoading } = useFetchGifs(category)

    return (
        <>
        <h3>{category}</h3>
        {
            isLoading && <Loader />
        }
        <div className='card-grid'>
            {
                images.map((image) => (
                    <GifItem 
                    key={image.id}
                    { ...image}/>
                ))
            }
        </div>
        </>
    )
}
