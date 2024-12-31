import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className="flex justify-between items-center py-6 border-b-2 mx-4">
            <h2 className='text-4xl font-semibold'>Knowledge Cafe</h2>
            <div><img src={profile} alt="profile" /></div>
        </div>
    );
};

export default Header;