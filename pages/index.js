import { useEffect } from "react";

export default function Beranda() {
  if (typeof window !== 'undefined') {
    window.onscroll = function () {
      const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.scrollY > fixedNav) {
      header.classList.add('navbar-fixed');
    } else {
      header.classList.remove('navbar-fixed');
    }
    }
  };

  useEffect(() => {
    const hamburger = document.querySelector('#hamburger'); 
    const navMenu = document.querySelector('#nav-menu');
    hamburger.addEventListener('click', function () {	
      navMenu.classList.toggle('hidden');
      hamburger.classList.toggle('hamburger-active');
    });
  });

  return (
    <>
      <title>Portofolio Tailwind NextJS</title>

      {/* Header Start */}
      <header className="bg-transparant absolute top-0 left-0 w-full flex items-center z-10">
        <div className="container">
          <div className="flex items-center justify-between relative">
            <div className="px-4">
              <a href="#home" className="text-lg font-bold text-primary block py-6">Johan</a>
            </div>
            <div className="flex items-center px-4">
              <button id="hamburger" name="hamburger" type="button" className="block absolute right-4 lg:hidden">
                <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
              </button>

              <nav id="nav-menu" className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
                <ul className="block lg:flex">
                  <li className="group">
                    <a href="#home" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Beranda</a>
                  </li>
                  <li className="group">
                    <a href="#about" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Tentang Saya</a>
                  </li>
                  <li className="group">
                    <a href="#portfolio" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Portfolio</a>
                  </li>
                  <li className="group">
                    <a href="#clients" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Clients</a>
                  </li>
                  <li className="group">
                    <a href="#blog" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Blog</a>
                  </li>
                  <li className="group">
                    <a href="#contact" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* Header End */}

      {/* Hero Section Start */}
      <section id="home" className="pt-36 self-center">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text-base font-semibold text-primary dark:text-white md:text-xl"> Halo Semua 👋, saya <span className="block font-bold text-dark text-4xl lg:text-5xl">Johan Pramudito</span></h1>
              <h2 className="font medium text-secondary text-lg mb-5 lg:text-2xl"><span className="text-dark font-semibold">Student</span> & Learner</h2>
              <p className="font-medium text-secondary mb-10 leading-relaxed">Belajar Programming <span className="font-bold text-dark">Menyenangkan!</span></p>

              <a href="#" className="text-base font-semibold text-white bg-primary py-3 px-5 rounded-full hover:shadow-lg hover:opacity-80 transition duration-200 ease-in-out">Hubungi Saya</a>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2 left-0">
              <div className="relative mt-10 lg:mt-0 lg:right-0 lg:left-16">
                <img src="/asset/Beranda/JohanHD2.png" alt="Johan Pramudito" className="max-w-full mx-auto"/>
                <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 -z-10 md:scale-80 lg:scale-160">
                <svg width="500" height="500"viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#0ea5e9" d="M60.6,-22.3C67.6,1.9,54.8,29.9,32.4,46.8C9.9,63.6,-22.3,69.3,-42.2,55.5C-62.1,41.6,-69.7,8.3,-60.6,-18.8C-51.5,-45.8,-25.8,-66.5,0.5,-66.6C26.8,-66.8,53.5,-46.4,60.6,-22.3Z" transform="translate(100 100) scale(1.2)" />
                </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End */}

      {/* About Section Start */}
      <section id="about" className="pt-36 pb-32">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-10 lg:w-1/2">
              <h4 className="font-bold uppercase text-primary text-lg mb-3 max-w-md">Tentang Saya</h4>
              <h2 className="font-bold text-dark text-3xl mb-3 lg:text-4xl">Pembelajar Cepat dan Handal!</h2>
              <p className="font-medium text-base text-secondary max-w-xl lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt aut asperiores voluptatum. Aperiam accusantium est ipsum.</p>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <h3 className="font-semibold text-dark text-2xl mb-4 lg:text-3xl lg:pt-10">Mari berteman</h3>
              <p className="font-medium text-base text-secondary mb-6 lg:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum magni, libero itaque tenetur sed tempora officia!
              </p>
              <div className="flex items-center">
                {/* Github */}
                <a href="https://github.com/johanpramudito" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                  <svg role="img" width="20" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                </a>
                {/* Linkedin */}
                <a href="https://www.linkedin.com/in/alexander-johan-pramudito-467b081aa/" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                  <svg role="img" width="18" viewBox="0 0 24 24" className="fill-current" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                {/* Instagram */}
                <a href="https://www.instagram.com/johan_pramudito/" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                  <svg role="img" width="20" viewBox="0 0 24 24" className="fill-current" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
                </a>
                {/* Whatsapp */}
                <a href="https://api.whatsapp.com/send?phone=6285643878849" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                  <svg role="img" width="19" viewBox="0 0 24 24" className="fill-current"  xmlns="http://www.w3.org/2000/svg"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                </a>
              </div>
            </div>
          </div>  
        </div>
      </section>
      {/* About Section End */}

      {/* Portfolio Section Start */}
      <section id="portfolio" className="pt-20 pb-16 bg-slate-100">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="text-lg font-semibold text-primary mb-2">Portfolio</h4>
              <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">Project Terbaru</h2>
              <p className="font-medium text-md text-secondary mt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor incidunt officiis sed repellat quia ad a.</p>
            </div>
          </div>
          <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
          <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img src="/asset/Portfolio/1.png" alt="CRUD" width="w-full"/>
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5  mb-3">CRUD Web</h3>
              <p className="font-medium text-base text-secondary ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo molestiae nobis quisquam incidunt pariatur</p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img src="/asset/Portfolio/2.png" alt="Landing Page" width="w-full"/>
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5  mb-3">Landing Page</h3>
              <p className="font-medium text-base text-secondary md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo molestiae nobis quisquam incidunt pariatur</p>
            </div>
          </div>
        </div>
      </section>
      {/* Portfolio Section End */}

      {/* Clients Section Start */}
      <section id="clients" className="pt-20 pb-16 bg-slate-800">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="text-lg font-semibold text-primary mb-2">Clients</h4>
              <h2 className="font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl">Yang Pernah Bekerja Sama</h2>
              <p className="font-medium text-md text-slate-300 mt-3 md:text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor incidunt officiis sed repellat quia ad a.</p>
            </div>
          </div>

          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
              <a href="#" className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition hover:grayscale-0 hover:opacity-100 duration-300 lg:mx-6 xl:mx-8">
                <img src="/asset/Clients/1.png" alt="Microsoft" />
              </a>
              <a href="#" className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition hover:grayscale-0 hover:opacity-100 duration-300 lg:mx-6 xl:mx-8">
                <img src="/asset/Clients/2.png" alt="Oracle" />
              </a>
              <a href="#" className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition hover:grayscale-0 hover:opacity-100 duration-300 lg:mx-6 xl:mx-8">
                <img src="/asset/Clients/3.png" alt="Grab" />
              </a>
              <a href="#" className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition hover:grayscale-0 hover:opacity-100 duration-300 lg:mx-6 xl:mx-8">
                <img src="/asset/Clients/4.png" alt="Shopee" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Clients Section End */}

      {/* Blog Section Start */}
      <section id="blog" className="pt-20 pb-16 bg-slate-100">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="text-lg font-semibold text-primary mb-2">Blog</h4>
              <h2 className="font-bold text-3xl mb-4 sm:text-4xl lg:text-5xl">Tulisan Terkini</h2>
              <p className="font-medium text-md text-secondary mt-3 md:text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor incidunt officiis sed repellat quia ad a.</p>
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                <div className="bg-white rounded-xl shadow-lg mb-10 overflow-hidden">
                  <img src="/asset/Blog/1.jpg" alt="Blog" className="w-full" />
                  <div className="py-8 px-6">
                    <h3>
                      <a href="#" className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate">Programming itu Ngapain Sih?</a>
                    </h3>
                    <p className="font-medium text-sm text-secondary mt-2 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                    <a href="#" className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80">Baca Selengkapnya</a>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                <div className="bg-white rounded-xl shadow-lg mb-10 overflow-hidden">
                  <img src="/asset/Blog/2.jpg" alt="Blog" className="w-full" />
                  <div className="py-8 px-6">
                    <h3>
                      <a href="#" className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate">Ga Perlu Kaku Ngetik</a>
                    </h3>
                    <p className="font-medium text-sm text-secondary mt-2 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                    <a href="#" className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80">Baca Selengkapnya</a>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                <div className="bg-white rounded-xl shadow-lg mb-10 overflow-hidden">
                  <img src="/asset/Blog/3.jpg" alt="Blog" className="w-full" />
                  <div className="py-8 px-6">
                    <h3>
                      <a href="#" className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate">Ngoding Aman, Liburan Jalan</a>
                    </h3>
                    <p className="font-medium text-sm text-secondary mt-2 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                    <a href="#" className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80">Baca Selengkapnya</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Section End */}

      {/* Contact Section Start */}
      <section id="contact" className="pt-20 pb-16">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="font-semibold text-lg text-primary mb-2">Contact</h4>
              <h2 className="font-bold text-3xl mb-4 sm:text-4xl lg:text-5xl">Hubungi Kami</h2>
              <p className="font-medium text-md text-secondary mt-3 md:text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor incidunt officiis sed repellat quia ad a.</p>
            </div>
          </div>

          <form>
            <div className="w-full lg:w-2/3 lg:mx-auto">
              <div className="w-full px-4 mb-8">
                <label for="name" className="text-base font-bold text-primary">Nama</label>
                <input type="text" id="name" className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"></input>
              </div>
              <div className="w-full px-4 mb-8">
                <label for="email" className="text-base font-bold text-primary">Email</label>
                <input type="text" id="name" className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"></input>
              </div>
              <div className="w-full px-4 mb-8">
                <label for="name" className="text-base font-bold text-primary">Pesan</label>
                <textarea type="text" id="name" className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32"></textarea>
              </div>
              <div className="w-full px-4">
                <button className="text-base font-semibold bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-300 text-white">Kirim</button>
              </div>
            </div>
          </form> 
        </div>
      </section>
      {/* Contact Section End */}

      {/* Footer Section Start */}
      <footer className="bg-dark pt-16 pb-12">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-12 lg:w-1/3 text-slate-300 font-small md:w-1/3">
              <h2 className="font-bold text-4xl text-white mb-5">Johan Pramudito</h2>
              <h3 className="font-bold text-2xl mb-2">Hubungi Saya</h3>
              <p>ajohanpramudito@gmail.com</p>
              <p>Jl. Godean Km. 4</p>
              <p>Sleman</p>
            </div>
            <div className="w-full px-4 mb-12 lg:w-1/3 md:w-1/3">
              <h3 className="font-semibold text-xl text-white mb-5">Kategori Tulisan</h3>
              <ul>
                <li className="mb-2">
                  <a href="#" className="inline-block text-base text-slate-300 hover:text-primary transition duration-300">Pemrograman</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="inline-block text-base text-slate-300 hover:text-primary transition duration-300">Teknologi</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="inline-block text-base text-slate-300 hover:text-primary transition duration-300">Hiburan</a>
                </li>
              </ul>
            </div>
            <div className="w-full px-4 mb-12 lg:w-1/3 md:w-1/3">
              <h3 className="font-semibold text-xl text-white mb-5">Tautan</h3>
              <ul>
                <li className="mb-2">
                  <a href="#home" className="inline-block text-base text-slate-300 hover:text-primary transition duration-300">Beranda</a>
                </li>
                <li className="mb-2">
                  <a href="#about" className="inline-block text-base text-slate-300 hover:text-primary transition duration-300">Tentang Saya</a>
                </li>
                <li className="mb-2">
                  <a href="#portfolio" className="inline-block text-base text-slate-300 hover:text-primary transition duration-300">Portfolio</a>
                </li>
                <li className="mb-2">
                  <a href="#clients" className="inline-block text-base text-slate-300 hover:text-primary transition duration-300">Clients</a>
                </li>
                <li className="mb-2">
                  <a href="#blog" className="inline-block text-base text-slate-300 hover:text-primary transition duration-300">Blog</a>
                </li>
                <li className="mb-2">
                  <a href="#contact" className="inline-block text-base text-slate-300 hover:text-primary transition duration-300">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full pt-10 border-t border-slate-700">
            <div className="flex items-center justify-center mb-5">
                {/* Github */}
                <a href="https://github.com/johanpramudito" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary text-white hover:text-white">
                  <svg role="img" width="20" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                </a>
                {/* Linkedin */}
                <a href="https://www.linkedin.com/in/alexander-johan-pramudito-467b081aa/" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary text-white hover:text-white">
                  <svg role="img" width="18" viewBox="0 0 24 24" className="fill-current" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                {/* Instagram */}
                <a href="https://www.instagram.com/johan_pramudito/" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary text-white hover:text-white">
                  <svg role="img" width="20" viewBox="0 0 24 24" className="fill-current" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
                </a>
                {/* Whatsapp */}
                <a href="https://api.whatsapp.com/send?phone=6285643878849" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary text-white hover:text-white">
                  <svg role="img" width="19" viewBox="0 0 24 24" className="fill-current"  xmlns="http://www.w3.org/2000/svg"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                </a>
            </div>
            <p className="font-medium text-xs text-slate-500 text-center">
              Dibuat dengan ❤️ oleh <a href="https://instagram.com/johan_pramudito" target="_blank" className="font-bold text-primary">Johan Pramudito</a>, menggunakan <a href="https://nextjs.org/" className="text-slate-600">Next.js</a> dan <a href="https://tailwindcss.com" className="text-sky-500">Tailwind CSS</a>
            </p>
          </div> 
        </div>
      </footer>
      {/* Footer Section End */}
    </>
  )

}