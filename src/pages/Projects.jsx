import "aos/dist/aos.css";
function Projects() {
  return (
    <div
      className="bg-zinc-800 text-4xl font-semibold p-10 md:p-10 lg:p-20"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <div>
        <h1 className="text-center text-white text-4xl mb-10 mt-10" style={{ fontFamily: 'lora, lora' }}>My recent works</h1>
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        <div className="m-5 max-w-sm rounded overflow-hidden shadow-xl border-2">
          <img
            className="w-full h-64 object-cover"
            src="helpdesk.jpg"
            alt="help desk"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-white ">Help Desk</div>
            <p className="text-white text-base">
              This is a project I built in my internship for Tahses ICT and
              Consultancy using Vue.js and Tailwind CSS.
            </p>
          </div>
        </div>
        <div className="max-w-sm m-5 rounded overflow-hidden shadow-lg border-2 border-white">
          <img
            className="w-full h-64  object-cover"
            src="autism.jpg"
            alt="autism"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-white ">Autos</div>
            <p className="text-white text-base">
              This is a final year project which is basically a social media
              platform for the autism society. I used Vue.js,Tailwind CSS and Node js.
            </p>
          </div>
        </div>
        <div className="max-w-sm m-5 rounded overflow-hidden shadow-lg border-2 border-white">
          <img
            className="w-full h-64  object-cover"
            src="ttspm.jpg"
            alt="helpdesk"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-white ">TTSP</div>
            <p className="text-white text-base">
              A project(website) built for Total Tech
              Solution Provider PLC which is located in addis ababa ethiopia .
            </p>
          </div>
        </div>
        <div className="max-w-sm m-5 rounded overflow-hidden shadow-lg border-2 border-white">
          <img
            className="w-full h-64  object-cover"
            src="po.jpg"
            alt="postino"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-white ">Postino</div>
            <p className=" text-base text-white ">
              This is my latest project which is a parcel and delivery service for clients located in Italy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;
