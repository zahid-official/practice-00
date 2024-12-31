import BookMarksProps from 'prop-types'
import Bookmark from './Bookmark';
const Bookmarks = ({bookmarks, reading}) => {
  return (
    <div className="p-8 bg-[#f3f3f3] rounded-xl lg:w-1/3">
      <h2 className='text-2xl font-semibold p-8 rounded-xl mb-10 text-[#6047EC] bg-[#6047EC1A] border border-[#6047ec]'>Spent time on read : {reading} min</h2>
      
      <h2 className="text-2xl font-semibold">Bookmark: {bookmarks.length}</h2>
      {bookmarks.map((item, idx) => <Bookmark key={idx} bookmark={item}></Bookmark>)}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: BookMarksProps.array.isRequired,
  reading: BookMarksProps.number.isRequired,
}
export default Bookmarks;
