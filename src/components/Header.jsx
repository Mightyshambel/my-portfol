

function Header() {
    return <div class="fixed top-0 flex w-full items-center justify-between flex-wrap bg-cyan-950 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
            <img class="fill-current h-10 w-10 mr-2" width="54" height="54" src="mmmm.jpg" alt="image description"></img>
        <span class="font-semibold text-xl tracking-tight text-cyan-400">Mighty Shambel</span>
        </div>
        <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-cyan-400 mr-4">
        About me
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-cyan-400 mr-4">
        Projects
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-cyan-400">
        Certificates
      </a>
    </div>
    <div>
      <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-cyan-400 hover:bg-white mt-4 lg:mt-0">Contact</a>
    </div>
  </div>
        
    </div>
}

export default Header;