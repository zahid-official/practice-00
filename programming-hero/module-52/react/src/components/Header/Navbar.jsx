import { Link } from 'react-router-dom';
import profile from '/assets/user.png'

const Navbar = () => {
    return (
        <nav className='py-3 flex items-center justify-between'>
            <div></div>
            <ul className="flex gap-3 text-[#706F6F]">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/'>Career</Link></li>
                <li><Link to='/'>About</Link></li>
            </ul>

            <div className='flex gap-3 items-center'>
                <div><img src={profile} alt="" /></div>
                <button className='btn btn-neutral rounded-none text-lg px-8'>LogIn</button>
            </div>
        </nav>
    );
};

export default Navbar;