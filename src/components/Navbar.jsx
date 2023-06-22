
import Logo from '../assets/Logo.png'


const Navbar = () => {



  return (
    <div className="navbar bg-rich-black text-gray-200 shadow-md border-b-hunyadi-yellow border-b-2">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost btn-circle ">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="#ECA72C"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-rich-black border-hunyadi-yellow border-2 rounded-box w-52 z-10 overflow-hidden">
          <li className='hover:bg-office-green hover:duration-300 hover:translate-x-3 transition-all rounded-box'><a>Dashboard</a></li>
          <li className='hover:bg-office-green hover:duration-300 hover:translate-x-3 transition-all rounded-box'><a>Leagues</a></li>
          <li className='hover:bg-office-green hover:duration-300 hover:translate-x-3 transition-all rounded-box'><a>Teams</a></li>
          <li className='hover:bg-office-green hover:duration-300 hover:translate-x-3 transition-all rounded-box'><a>Users</a></li>
          <li className='hover:bg-office-green hover:duration-300 hover:translate-x-3 transition-all rounded-box'><a>Free Agents</a></li>
        </ul>
      </div>
    </div>
    <div className="navbar-center">
      <a className="btn btn-ghost normal-case text-xl"><img className=' w-36' src={Logo}/></a>
    </div>
    <div className="navbar-end pr-6">
    <input type="text" placeholder='Search' className="input input-bordered focus:placeholder:invisible bg-rich-black focus-within:outline-hunyadi-yellow caret-office-green mr-5 search" />
      <button className="btn btn-ghost btn-circle absolute right-28 ">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ECA72C"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
      </button>
      <button className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="#ECA72C"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
          <span className="badge badge-xs indicator-item bg-office-green relative right-3"></span>
        </div>
      </button>
    </div>
  </div>
  )
}

export default Navbar