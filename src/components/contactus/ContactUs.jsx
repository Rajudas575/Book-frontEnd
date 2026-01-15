import Contact from '../Contact'
import Footer from '../Footer'
import Navbar from '../Navbar'


function ContactUs() {
    
  return (
    <>
        <Navbar/>
            <div className='min-h-screen'>
                <Contact/>
            </div>
        <Footer/>
    </>
  )
}

export default ContactUs