import logo from './logo.svg';
import pfp from './pfp.jpg';
import pfp2 from './pfp2.png';
import './App.css';

function App() {
  return (
    <div>
      <header class="py-6 " >
          <div class="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
              <div class="text-lg font-bold">Jakob Potosme</div>
              <div class='hidden md:flex space-x-12 items-center'>
                  <a href="#home" class="text-selected-text">Home</a>
                  {/* <a href="#work" >My Work</a> */}
                  <a href="#about" >About Me</a>
                  <a href="#contact" ><button class="px-6 py-2 bg-theme font-bold">Contact Me</button></a>
              </div>
              <div class="md:hidden">
                <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z" fill="white"/></svg>
            </div>
          </div>
        </header>

        <div class="container mt-16 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
          <div class="flex flex-wrap md:flex-nowrap">
            <nav class='inline-block lg:mr-24 lg:w-4 fixed left-percentage hidden xl:'>
                <div className="absolute left-50 transform -translate-x-1/2 space-y-6 mt-36">
                  <a href='#home' class='nav-dot selected-circle block w-7 h-7 rounded-full border-4 border-nav bg-body'>
                      <span class="bg-black px-2 py-1 rounded-md ml-10">Home</span>
                  </a>
                  <a href='#about' class='nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body'>
                      <span class="bg-black px-2 py-1 rounded-md ml-10">My Work</span>
                  </a>
                  <a href='#home' class='nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body'>
                      <span class="bg-black px-2 py-1 rounded-md ml-10">About Me</span>
                  </a>
                </div>
            </nav>

           {/* <img alt='profile' src={pfp2}  class="object-cover h-180 w-96 w-3/4 mt-12 md:absolute -mt-6 md:mt-0 right-0 -z-1 lg:mr-40 scale-125"></img> */}
          <img alt='profile' src={pfp2}  class="object-cover h-180 w-96 w-3/4 mt-12 -mt-6 md:mt-0 right-0 -z-1 lg:mr-40 scale-75"></img>

            <div class="flex flex-wrap lg:ml-20 justify-center md:justify-start max-w-xl mt-0 md:my-36">
              <h1 class="font-bold text-5xl md:text-6xl lg:text-7xl text-center md:text-left"> Building <br/> beautiful web experiences</h1>
              <button class="px-8 py-4 bg-theme text-white font-bold mt-12 flex items-center space-x-3">
                        <span>View my work.</span>
                    </button>
            </div>
          </div>
        
        </div>


      {/* WORK */}
      
      <div class="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        <section class="w-full">
				<h2 id="about" class="secondary-title">About Me</h2>
				<p class="section-paragraph text-lg">I’ve had the pleasure of working on multiple projects, designing and implementing both frontend and backend.</p>
        <p class="text-lg" >I am a fresh university graduate. This site will showcase the skills I have learned and will become a central hub for all the projects that I work on in the future. If youre interested in looking at my past projects, feel free to check out my github!</p>
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
					{/* <img src="https://images.unsplash.com/photo-1576153192396-180ecef2a715?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" class="w-full bg-nav h-36 lg:h-72 object-cover">
					<img src="https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" class="w-full bg-nav h-36 lg:h-72 object-cover">
					<img src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80" class="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover">
					<img src="https://images.unsplash.com/photo-1558655146-d09347e92766?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80" class="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover">
					<img src="https://images.unsplash.com/photo-1547119957-637f8679db1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" class="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover">
					<img src="https://images.unsplash.com/photo-1559028012-481c04fa702d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1336&q=80" class="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover">
					<img src="https://images.unsplash.com/photo-1603969072881-b0fc7f3d77d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80s" class="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover">
					<img src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" class="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover">
					<img src="https://images.unsplash.com/photo-1545235617-7a424c1a60cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80" class="w-full hidden md:block md:col-span-2 lg:col-span-1 bg-nav h-36 lg:h-72 object-cover"> */}
				</div>


        <div class="flex mt-20 space-x-6 place-content-center">
          {/* <!-- Github --> */}
          <a href="https://github.com/jakobpotosme">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill='white'/></svg>
          </a>

        </div>

			</section>
          

      </div>

      {/*  */}

          {/* Contact Me */}
      <div class="container mt-40 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
          <section class='w-full'>
            <h2 id='contact' class="secondary-title"> Contact Me</h2>
            <p class="section-paragraph">Feel free to to contact me any time, through any method below.</p>

            <div class="w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-24">
              <div class="space-y-12">
                <div>
                  <label class="text-white block mb-6 text-xl font-bold">Name</label>
                  <input class="w-full border border-input-border bg-input px-4 py-4"/>
						    </div>
                <div>
                  <label class="text-white block mb-6 text-xl font-bold">Email</label>
                  <input type="email" class="w-full border border-input-border bg-input px-4 py-4"/>
                </div>
                <div>
                  <label class="text-white block mb-6 text-xl font-bold">Message</label>
                  <textarea type="email" class="w-full border border-input-border bg-input px-4 py-4 h-56 resize-none"></textarea>
                </div>
                <button class="px-6 py-2 bg-theme text-white font-bold">Send it!</button>
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
    // bottom div
      
    
        

  );
}

export default App;
