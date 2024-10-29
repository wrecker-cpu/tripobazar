import Image1 from "../../../public/AboutUs/WhoWeare.jpg";
import Image2 from "../../../public/AboutUs/WhoWeare2.jpg";
function Whoweare() {
  return (
<section className="w-full h-80 mb-7 sm:h-96 md:h-96 lg:h-auto bg-[#F8F8F8] flex flex-col md:flex-row px-4 md:px-8">
  {/* First Div */}
  <div className="flex-1 flex flex-col justify-center items-start mb-6 md:mb-0 md:pr-6">
    <h1 className="text-black text-3xl sm:text-4xl lg:text-5xl font-bold">Welcome to</h1>
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#03B58B]">
      Trippo Bazaar
    </h1>
    <p className="text-black mt-4 text-sm sm:text-base lg:text-lg">
      Your gateway to extraordinary travel experiences. As a leading travel agency, we specialize in crafting bespoke adventures that seamlessly blend luxury, adventure, and cultural exploration. Our dedicated team is committed to turning your travel dreams into reality, offering amazing features and services that redefine your journey. Discover the extraordinary with Trippo Bazaar – where every destination becomes a personalized masterpiece.
    </p>
    <div className="mt-4 flex flex-wrap space-x-0 sm:space-x-4 space-y-2 sm:space-y-0">
      <button className="bg-[#03B58B] text-white hover:text-[#03B58B] hover:bg-white px-4 py-2 rounded shadow">
        Explore Plans
      </button>
      <button className="border border-[#03B58B] text-[#03B58B] hover:text-white hover:bg-[#03B58B] px-4 py-2 rounded shadow">
        Our Policy
      </button>
    </div>
  </div>

  {/* Second Div */}
  <div className="md:flex-1 hidden md:flex justify-center md:justify-end items-center md:items-end relative mt-6 mb- sm:mb-96 md:mb-20 md:mt-0">
    <img
      src={Image1}
      alt="Large Image"
      className="rounded-2xl md:me-10 lg:mr-8 shadow-2xl w-3/4 h-auto md:w-5/6 lg:w-3/4 z-1"
    />
    <img
      src={Image2}
      alt="Smaller Image"
      className="rounded-2xl shadow-2xl w-1/2 h-auto absolute right-0 bottom-2 md:right-4 md:bottom-0 lg:right-0 lg:bottom-[-3rem] z-10"
    />
  </div>
</section>

  );
}

export default Whoweare;
