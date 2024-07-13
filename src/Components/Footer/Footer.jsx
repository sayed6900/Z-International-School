import logoImg from '../../../src/assets/image/Z int school logo.jpg'

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-blue-800 text-white p-10">
        <div>
         <img className='w-36 h-20 ml-5' src={logoImg} alt="" />
          <p className='text-lg font-bold mt-0'>
            Z International School 
          </p>
          <p className='font-medium pl-10 mt-0'> science 2002</p>
        </div>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">News and Facts</a>
          <a className="link link-hover">Sports</a>
          <a className="link link-hover">Policies</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
