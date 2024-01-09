export default function Footer() {
  return (
    <footer className="px-4 divide-y bg-gradient-to-b from-[rgb(1,0,61)] to-[rgb(1,0,61,.8)] text-white">
    {/* <footer className="px-4 divide-y dark:bg-gray-800 dark:text-gray-100"> */}
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <a rel="noopener noreferrer" href="/" className="flex justify-center space-x-3 lg:justify-start">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#01003d] border">
              <span className="font-extrabold text-lg">FA</span>
            </div>
            <span className="self-center text-2xl font-semibold">
              Faizan Alam
            </span>
          </a>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="tracki uppercase dark:text-gray-50">Projects</h3>
            <ul className="space-y-1">
              <li className="hover:underline">
                <a rel="noopener noreferrer" href="https://codofile-85b0c.web.app" target="_blank">
                  Online Compiler
                </a>
              </li>
              <li className="hover:underline">
                <a rel="noopener noreferrer" href="https://www.da-boys.onrender.com" target="_blank">
                  Chatting App
                </a>
              </li>
              <li className="hover:underline">
                <a rel="noopener noreferrer" href="https://wondrous-hamster-93ebe9.netlify.app" target="_blank">
                  QR-Code Scanner
                </a>
              </li>
              <li className="hover:underline">
                <a rel="noopener noreferrer" href="http://blog.faizanalam.tech" target="_blank">
                  Blog Website
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="uppercase dark:text-gray-50">Developers</h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="/api" target="_blank">
                  Feedback Api
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="https://www.github.com/faizan619">
                  Github Profile
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="/feedback" target="_blank">
                  Feedback Page
                </a>
              </li>
            </ul>
          </div>


          <div className="space-y-3">
            <div className="uppercase dark:text-gray-50">Social media</div>
            <div className="flex justify-start space-x-3">
            <a
              rel="noopener noreferrer"
              href="mailto:alamf0426@gmail.com"
              target="_blank"
              title="Gmail"
              className="flex items-center p-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 fill-current"
              >
                <path d="M12 2C6.484 2 2 6.484 2 12s4.484 10 10 10s10-4.484 10-10S17.516 2 12 2zm5.321 15.321h-2.732c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2.732c.551 0 1.5-.499 1.5-1.571v-7.5c0-1.072-.949-1.5-1.5-1.5H6.464c-.552 0-1 .428-1 1s.448 1 1 1h4.89c.406 0 .774.244.934.621.276.965 1.104 2.32 2.597 3.498.251.208.342.562.218.88s-.371.53-.68.53zm0-8.821v4.5c0 .276-.224.5-.5.5s-.5-.224-.5-.5v-4.5c0-.621-.546-1-1.5-1H7.536c-.551 0-1-.428-1-1s.449-1 1-1h9.79c.741 0 1.5.672 1.5 1zm0-5.679v.179l-8 7.5-.393.366-.108.113c-.097.103-.202.26-.318.47h8.819c.551 0 1 .428 1 1s-.449 1-1 1H6.464c-.551 0-1-.428-1-1s.449-1 1-1h.562l7.969-7.5H6c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h10c.276 0 .5.224.5.5s-.224.5-.5.5h-1z"/>
              </svg>
            </a>
              <a
                rel="noopener noreferrer"
                href="https://www.github.com/faizan619"
                target="_blank"
                title="Github"
                className="flex items-center p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16 0C7.164 0 0 7.164 0 16c0 7.073 4.582 13.067 10.942 15.173 0.8 0.148 1.092-0.347 1.092-0.773 0-0.381-0.014-1.385-0.023-2.713-4.455 0.966-5.393-2.151-5.393-2.151-0.728-1.844-1.779-2.334-1.779-2.334-1.453-0.995 0.111-0.975 0.111-0.975 1.605 0.113 2.448 1.65 2.448 1.65 1.424 2.441 3.736 1.737 4.652 1.331 0.144-1.031 0.553-1.738 1.004-2.137-3.527-0.4-7.232-1.764-7.232-7.854 0-1.737 0.621-3.157 1.646-4.267-0.166-0.399-0.715-2.018 0.156-4.207 0 0 1.333-0.427 4.373 1.631 1.266-0.354 2.619-0.532 3.961-0.539 1.342 0.008 2.694 0.185 3.961 0.539 3.039-2.058 4.372-1.631 4.372-1.631 0.871 2.189 0.321 3.808 0.156 4.207 1.025 1.11 1.645 2.53 1.645 4.267 0 6.101-3.709 7.449-7.244 7.845 0.569 0.492 1.078 1.464 1.078 2.944 0 2.123-0.019 3.832-0.019 4.358 0 0.429 0.289 0.926 1.101 0.771C27.418 29.067 32 23.073 32 16 32 7.164 24.836 0 16 0z"></path>
                </svg>
              </a>


              <a
                rel="noopener noreferrer"
                href="https://www/instagram.com/faizan_alam_._"
                target="_blank"
                title="Instagram"
                className="flex items-center p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center dark:text-gray-400">
        © 2024 <span>Faizan Alam</span>. All rights reserved.
      </div>
    </footer>
  );
}
