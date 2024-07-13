import logoImg from '../../src/assets/image/Z int school logo.jpg'

const NavDrawer = () => {
    return (
        <div>
            <div className="drawer drawer-end">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer-4" className="drawer-button btn btn-ghost">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-5 w-5 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <div className=" bg-base-200 text-black min-h-full w-80 p-4">
      {/* Sidebar content here */}
      <img className='h-14 mb-2 w-32 rounded border-2 border-slate-900' src={logoImg} alt="logo" />
    <p>
    <h1 className='font-bold text-2xl font-serif'>Z International School</h1>
      Providing reliable education since 2002
    </p>
       <h2 className='text-xl font-semibold pt-2'> Gulshan Campus</h2> 
      <p>email: <span className='text-blue-700'> zint.school@gmail.com</span> </p>
      <p>Address: Gulshan-1 , circular road
      <br /> Dhaka-1200</p>
      <p>Call: 017115114641</p>
      
      <button className='btn btn-info mt-3'>Visit Gulshan Campus</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default NavDrawer;