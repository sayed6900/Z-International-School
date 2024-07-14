import { Link } from "react-router-dom";
import photoGallery from '../../assets/image/PhotoGalleryHeader2.jpg'
import img1 from '../../assets/image/campus1.jpg'
import img2 from '../../assets/image/campus2.jpg'
import img3 from '../../assets/image/campus4.jpg'
import img4 from '../../assets/image/campus5.jpg'



const Gallery = () => {
    return (
        <div>
        <div className="breadcrumbs text-base">
  <ul>
    <li><Link to='/'>Home</Link></li>
    <li><a>Photo Gallery</a></li>
    
  </ul>
</div>
            <div> <img className="w-full" src={photoGallery} alt="" /></div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 m-4">
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src={img1} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={img4} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src={img2} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src={img3} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt=""/>
        </div>
    </div>
</div>

        </div>
    );
};

export default Gallery;