import React, {useState} from 'react'
import emailjs from 'emailjs-com'



const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);
    
    const submit = () => {
        if (name && email && message) {
        // TODO - send mail
            // const serviceId = process.env.REACT_APP_SERVICE_ID;
            // const templateId = process.env.REACT_APP_TEMPLATE_ID;
            // const userId = process.env.REACT_APP_USER_ID;
            
            const serviceId ='service_0u42ww5'
            const templateId = 'template_5dte2g7'
            const userId = process.env.REACT_APP_USER_ID


            const templateParams = {
                name,
                email,
                message
            };

            // emailjs.sendForm
            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));

            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
    }

    const isValidEmail = email => {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    };

  return (
    <div>

        <div class="container mt-40 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full mb-20">
            <section class='w-full'>
                <h2 id='contact' class="secondary-title"> Contact Me</h2>
                <p class="section-paragraph">Feel free to to contact me any time, through any method below.</p>

                <div class="w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-24">
                <div class="space-y-12">
                    <div>
                        <label class="text-white block mb-6 text-xl font-bold" >Name</label>
                        <input class="w-full border border-input-border bg-input px-4 py-4" value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div>
                        <label class="text-white block mb-6 text-xl font-bold"  >Email</label>
                        <input type="email" class="w-full border border-input-border bg-input px-4 py-4" value={email} onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <label class="text-white block mb-6 text-xl font-bold">Message</label>
                        <textarea type="email" class="w-full border border-input-border bg-input px-4 py-4 h-56 resize-none" value={message} onChange={e => setMessage(e.target.value) }></textarea>
                    </div>
                    <button class="px-6 py-2 bg-theme text-white font-bold" onClick={submit}>Send it!</button>
                    {/* <span className={emailSent ? 'visible' : null}>Thank you for your message, we will be in touch in no time!</span> */}
                </div>

                <div class="mt-12">
                    {/* <!-- Contact info --> */}
                    {/* <p class="text-secondary">555-555-1234</p> */}
                    <a href="mailto:jpotosme@ucmerced.edu" class="text-secondary underline mt-3 block">jpotosme@ucmerced.edu</a>

                    {/* <!-- Socials --> */}
                    <div class="flex mt-20 space-x-6">
                    {/* <!-- Linked In --> */}
                    <a href="https://www.linkedin.com/in/jakob-potosme/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill="white"/></svg>
                    </a>
                    {/* <!-- Twitter --> */}
                    <a href="https://twitter.com/TheJMan209">
                        <svg class="w-8 h-8 lg:w-12 lg:h-12" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 0C9.40313 0 0 9.40313 0 21C0 32.5969 9.40313 42 21 42C32.5969 42 42 32.5969 42 21C42 9.40313 32.5969 0 21 0ZM31.0922 15.8297C31.1062 16.05 31.1062 16.2797 31.1062 16.5047C31.1062 23.3859 25.8656 31.3125 16.2891 31.3125C13.3359 31.3125 10.5984 30.4547 8.29219 28.9781C8.71406 29.025 9.11719 29.0437 9.54844 29.0437C11.9859 29.0437 14.2266 28.2188 16.0125 26.8219C13.725 26.775 11.8031 25.275 11.1469 23.2125C11.9484 23.3297 12.6703 23.3297 13.4953 23.1188C12.3175 22.8795 11.2588 22.2398 10.4991 21.3084C9.73949 20.377 9.32572 19.2113 9.32812 18.0094V17.9437C10.0172 18.3328 10.8281 18.5719 11.6766 18.6047C10.9633 18.1293 10.3784 17.4854 9.97365 16.7298C9.5689 15.9743 9.35683 15.1306 9.35625 14.2734C9.35625 13.3031 9.60938 12.4172 10.0641 11.6484C11.3714 13.2578 13.0028 14.5741 14.8522 15.5117C16.7016 16.4493 18.7275 16.9873 20.7984 17.0906C20.0625 13.5516 22.7063 10.6875 25.8844 10.6875C27.3844 10.6875 28.7344 11.3156 29.6859 12.3281C30.8625 12.1078 31.9875 11.6672 32.9906 11.0766C32.6016 12.2812 31.7859 13.2984 30.7031 13.9406C31.7531 13.8281 32.7656 13.5375 33.7031 13.1297C32.9953 14.1703 32.1094 15.0938 31.0922 15.8297Z" fill="white"/></svg>								
                    </a>
                    </div>
                    
                            </div>

                </div>

            </section>

        </div>

    </div>
  )
}

export default Contact