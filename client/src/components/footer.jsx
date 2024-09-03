import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-zinc-900 mt-4 h-100">
        <div className="flex flex-row gap-16 px-20 py-20 font-poppins text-sm space-x-12">
          <div className="col-md-3">
            <h6 className='text-gray-600 text-xs mb-2'>COMPANY</h6>
            <ul className='text-gray-300'>
              <li><a href="#">About us</a></li>
              <li><a href="#">Stories</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">FAQS</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6 className='text-gray-600 text-xs mb-2'>HELP</h6>
            <ul className='text-gray-300'>
              <li><a href="#">Payment</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Cancellation</a></li>
              <li><a href="#">Returns</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6 className='text-gray-600 text-xs mb-2'>POLICY</h6>
            <ul className='text-gray-300'>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Grievance Redressal</a></li>
              <li><a href="#">EPR Compliance</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6 className='text-gray-600 text-xs mb-2'>SOCIAL</h6>
            <ul className='text-gray-300'>
              <li><a href="#"><i className="fab fa-facebook-f"></i> Facebook</a></li>
              <li><a href="#"><i className="fab fa-instagram"></i> Instagram</a></li>
              <li><a href="#"><i className="fab fa-twitter"></i> Twitter</a></li>
              <li><a href="#"><i className="fab fa-youtube"></i> YouTube</a></li>
            </ul>
          </div>
        <div className='flex flex-row gap-20 space-x-10 border-l-2 border-gray-400 pl-20'>
          <div>
            <h6 className='text-gray-600 text-center mb-1 '>Mail us</h6>
            <ul>
            <li  className='text-gray-300'><a href="#">urbanhypes@gmail.com</a></li>
            </ul>
          </div>
          <div>
            <h6 className='text-gray-600 text-center mb-1'>contact us</h6>
            <ul>
                <li><p className='text-gray-300 text-center'>Urbanhypes Private Limited,Phase 8-b, Sector - 74b , S.A.S Nagar , Punjab, 160071</p></li>
            </ul>
          </div>
          <div>
            <h6 className='text-gray-600 text-center mb-1'>Registered office</h6>
            <ul>
                <li><p className='text-gray-300 text-center'>Urbanhypes Private Limited,Phase 8-b, Sector - 74b , S.A.S Nagar , Punjab, 160071</p></li>
            </ul>
          </div>
        </div>
        </div>
        <div>
          <div className="text-gray-400 text-xs flex justify-center">
            <p>&copy; 2023-2024 Urbanhypes.in</p>
          </div>
        </div>
    </footer>
  );
};

export default Footer;