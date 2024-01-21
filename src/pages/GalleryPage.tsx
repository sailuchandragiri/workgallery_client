import Gallery_1 from '../assets/gallery/Gallery_1.svg';
import Gallery_2 from '../assets/gallery/Gallery_2.svg';
import Gallery_3 from '../assets/gallery/Gallery_3.svg';
import Gallery_4 from '../assets/gallery/Gallery_4.svg';

const GalleryPage = () => {
  const Gallery_Images = [
    Gallery_1,
    Gallery_2,
    Gallery_3,
    Gallery_4,
    Gallery_1,
    Gallery_2,
    Gallery_3,
    Gallery_4,
  ];
  return (
    <div className="bg-zinc-100 font-montserrat py-10 flex flex-col ...">
      <h3 className="text-gray-900 text-3xl font-medium text-center">
        Start with our most popular templates
      </h3>
      <div className="flex flex-wrap justify-center mt-4 gap-8 p-4">
        {Gallery_Images.map((image) => (
          <div className="rounded-3xl bg-white w-[19rem] flex flex-col p-3">
            <img src={image} alt="Gallery_1" />
            <div className="mt-4 flex justify-between ...">
              <p className="text-sm text-gray-700 mt-2 ml-2">Free</p>
              <div className="flex gap-2 text-xs">
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-full hover:text-white hover:bg-gray-700">
                  Preview
                </button>
                <button className="px-4 py-2 border border-info-400 text-blue-600 rounded-full hover:text-white hover:bg-blue-600">
                  Choose
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
