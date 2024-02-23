function Projects() {
    return<div className="bg-sky-100 text-4xl font-semibold p-20">
       <div>
<h1 className="text-center text-6xl mb-10 "> My Projects</h1>    
</div>
    
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          
        <div class="m-5 max-w-sm rounded overflow-hidden shadow-lg ">
    <img class="w-full" src="helpdesk.jpg" alt="Sunset in the mountains"/>
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">Help Desk</div>
      <p class="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus</p>
    </div>
   
        </div>
        <div class="max-w-sm m-5 rounded overflow-hidden shadow-lg ">
    <img class="w-full" src="autism.jpg" alt="Sunset in the mountains"/>
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">Autos</div>
      <p class="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatib
      </p>
    </div>
        </div>
        <div class="max-w-sm m-5 rounded overflow-hidden shadow-lg ">
    <img class="w-full" src="helpdesk.jpg" alt="Sunset in the mountains"/>
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">TTSP</div>
      <p class="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatib
      </p>
    </div>
        </div>
    </div>
    </div>
}
export default Projects;