function Projects() {
  return (
    <div className="bg-sky-100 text-4xl font-semibold p-20">
      <div>
        <h1 className="text-center text-6xl mb-10 mt-10">My Projects</h1>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        <div className="m-5 max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full h-64 object-cover"
            src="helpdesk.jpg"
            alt="help desk"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Help Desk</div>
            <p className="text-gray-700 text-base">
              This is a project I built in my internship for Tahses ICT and
              Consultancy using Vue.js and Tailwind CSS.
            </p>
          </div>
        </div>
        <div className="max-w-sm m-5 rounded overflow-hidden shadow-lg">
          <img
            className="w-full h-64  object-cover"
            src="autism.jpg"
            alt="autism"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Autos</div>
            <p className="text-gray-700 text-base">
              This is a final year project which is basically a social media
              platform for the autism society. I used Vue.js and Tailwind CSS.
            </p>
          </div>
        </div>
        <div className="max-w-sm m-5 rounded overflow-hidden shadow-lg">
          <img
            className="w-full h-64  object-cover"
            src="ttspm.jpg"
            alt="helpdesk"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">TTSP</div>
            <p className="text-gray-700 text-base">
              This project is a website for Total Tech
              Solution Provider PLC.
            </p>
          </div>
        </div>
        <div className="max-w-sm m-5 rounded overflow-hidden shadow-lg">
          <img
            className="w-full h-64  object-cover"
            src="poooop.jpg"
            alt="popcorn"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Pop Corn</div>
            <p className="text-gray-700 text-base">
              This is my latest project which is a parcel and delivery service for clients located in Italy.
            </p>
          </div>
        </div>
        <div className="max-w-sm m-5 rounded overflow-hidden shadow-lg">
          <img
            className="w-full h-64  object-cover"
            src="studyabroad.jpg"
            alt="univ portal"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Univ Portal</div>
            <p className="text-gray-700 text-base">
              This is my latest project which is a parcel and delivery service for clients located in Italy.
            </p>
          </div>
        </div>
        <div className="max-w-sm m-5 rounded overflow-hidden shadow-lg">
          <img
            className="w-full h-64  object-cover"
            src="po.jpg"
            alt="postino"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Postino</div>
            <p className="text-gray-700 text-base">
              This is my latest project which is a parcel and delivery service for clients located in Italy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;
