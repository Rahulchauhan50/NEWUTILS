import React from 'react'
import { Link } from "react-router-dom";

export default function Home(props) {
    const text = `text-${props.mode === "dark"? "light" : "dark"}`
    const modi = `bg-${props.mode === "dark"? "secondary":"light" } `
  return (
    <>
<section className={`mb-4 mb-3 bg-${props.mode} ${props.mode === "light"?"text-dark":"text-light"}`}>
<div className='container'>
<nav aria-label="breadcrumb" className={`${modi}  border border-${props.mode === "light"?"dark":"light"} rounded-3 p-3 mb-4 mt-4`}>
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className={`breadcrumb-item ${text}`} aria-current="page">Contact us</li>
          </ol>
        </nav>
</div>

    <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
    <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>

    <div className="row my-3">

        <div className="container">
            <form id="contact-form" name="contact-form " action="mail.php" method="POST">

                <div className="row">
                <div className="col-md-2"></div>
                    <div className="col-md-4">
                        <div className="md-form ">
                            <label htmlFor="name" className="my-1">Your name</label>
                            <input type="text" id="name" name="name" placeholder='Enter your name' className="form-control"/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="md-form mb-0">
                            <label htmlFor="email" className="my-1">Your email</label>
                            <input type="text" id="email" name="email" placeholder='Enter your Email' className="form-control"/>
                        </div>
                    </div>

                </div>

                <div className="row my-3">
                  <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div className="md-form mb-0">
                            <label htmlFor="subject" className="my-1">Subject</label>
                            <input type="text" id="subject" name="subject" className="form-control"/>
                        </div>
                    </div>
                </div>

                <div className="row my-3">
                <div className="col-md-2"></div>
                    <div className="col-md-8">

                        <div className="md-form">
                            <label htmlFor="message" className="my-1">Your message</label>
                            <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                        </div>

                    </div>
                </div>

            </form>

            <div className="text-center text-md-left">
                <a href='/' className="btn btn-primary my-3" >Send</a>
            </div>
            <div className="status"></div>
        </div>

    </div>

</section>
    </>
  )
}
