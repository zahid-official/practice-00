import BookProp from 'prop-types'

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div>
            <h3 className='text-xl font-semibold bg-white py-5 rounded-lg text-center my-6'>{title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: BookProp.object.isRequired,
}
export default Bookmark;