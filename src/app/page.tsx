import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="flex gap-[28%] text-[20px] mt-[20px]">
          <h1 className="text-[26px] ml-[-30px] italic text-[#ffc624]">
            FoodHouse
          </h1>

          <ul className="flex gap-[150px] font-sans">
            <li className="text-yellow-500">HOME</li>
            <li className="text-slate-500">RESTAURANT</li>
            <li className="text-slate-500">SERVICES</li>
            <li className="text-slate-500">CART</li>
          </ul>
          <h2 className="text-[20px] text-slate-500 ml-[-12%]">SignIn</h2>
        </div>

        <div className="flex items-center justify-between mt-16">
          <div className="w-1/2 pr-8">
            <h1 className="text-6xl font-bold leading-tight">
              Enjoy Delicious
              <br /> Food in
              <span className="text-amber-400"> Healthy Life</span>
            </h1>
            <p className="text-[20px] mt-6 mb-8 w-4/5">
              Tandoori masala is an Indian spice blend consisting of a variety
              of spices Tandoori masala is an Indian spice blend consisting of a
              variety of spices
            </p>
            <button className="bg-yellow-500 text-white px-8 py-4 rounded-lg text-[25px]">
              Order Now
            </button>
          </div>

          <div className="w-1/2">
            <Image
              src="/images/chicken.png"
              alt="Chicken Dish"
              className="w-full h-auto object-cover"
              width={500}
              height={500}
            />
          </div>
        </div>

        <div className="text-center my-20">
          <h2 className="text-3xl text-slate-600">Online Store</h2>
          <h1 className="text-5xl font-bold mt-4">Popular Foods</h1>

          <div className="grid grid-cols-4 gap-32 mt-12">
            {[
              { image: "fish.jpeg", name: "Fruit dish", price: "696" },
              { image: "chips.jpeg", name: "Fruit dish", price: "696" },
              { image: "pudding.jpeg", name: "Fruit dish", price: "696" },
              { image: "pizza.jpeg", name: "Fruit dish", price: "696" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <Image
                  src={`/images/${item.image}`}
                  className="rounded-full w-full aspect-square object-cover"
                  alt={item.name}
                  width={300}
                  height={300}
                />
                <h3 className="text-4xl mt-4">{item.name}</h3>
                <p className="text-2xl mt-2">Dinko Food</p>
                <Image 
                  src="/images/star.png" 
                  className="mx-auto mt-2"
                  alt="Star rating"
                  width={100}
                  height={20}
                />
                <button className="bg-yellow-500 text-white px-6 py-3 rounded-xl mt-4 text-[15px]">
                  Add to cart ${item.price}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex mt-32 items-center justify-between">
          <div className="w-1/2">
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg text-[15px]">
              -50%
            </button>
            <h1 className="text-6xl font-bold text-stone-500 mt-4">
              Our Special Offer
            </h1>
            <p className="text-[20px] text-stone-500 mt-4 w-4/5">
              Best cooks and best delivery guys all at your service. Hot tasty
              food will reach you in 60 minutes
            </p>
            <button className="bg-yellow-500 text-white px-6 py-4 rounded-xl mt-8 flex items-center gap-2 text-[15px]">
              See All Menu
              <MdKeyboardArrowRight className="bg-white text-amber-500 rounded-full p-1 text-4xl" />
            </button>
          </div>

          <div className="w-1/2 relative">
            <Image
              src="/images/mix.jpeg"
              className="w-full h-auto object-cover"
              alt="Mixed food"
              width={500}
              height={500}
            />
          </div>
        </div>

        <div className="text-center my-32">
          <p className="text-[25px] font-bold text-stone-500">Quality Food</p>
          <h1 className="text-5xl font-bold mt-4">Get The Best Offers</h1>
          <p className="text-[20px] text-stone-500 mt-4 mx-auto w-3/5">
            The food at your door step. Why starve when you have us. Your hunger
            partner. Straight out if the over to your doorstep.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-32">
          <div className="flex items-center gap-6">
            <div>
              <h2 className="text-[30px]">
                Any day <br />
                offers
              </h2>
              <p className="text-stone-500 mt-2 text-[16px]">
                New phenomenon Buger taste
              </p>
              <p className="text-yellow-400 mt-2 text-[16px]">$ 12.90</p>
            </div>
            <Image
              src="/images/hambuger.png"
              className="w-72 h-72 object-cover"
              alt="Hamburger"
              width={288}
              height={288}
            />
          </div>

          <div className="flex items-center gap-6">
            <div>
              <h2 className="text-[30px]">
                Other <br />
                flavours
              </h2>
              <p className="text-stone-500 mt-2 text-[16px]">
                Save room. We made salats
              </p>
              <p className="text-yellow-400 mt-2 text-[16px]">$ 12.90</p>
            </div>
            <Image 
              src="/images/salad.png" 
              className="w-72 h-72 object-cover"
              alt="Salad"
              width={288}
              height={288}
            />
          </div>

          <div className="flex items-center gap-6">
            <div>
              <h2 className="text-[26px]">
                Find a poco <br /> store near <br /> you
              </h2>
            </div>
            <Image 
              src="/images/map.jpeg" 
              className="w-56 h-52 object-cover"
              alt="Map"
              width={224}
              height={208}
            />
          </div>
        </div>

        <div className="text-center my-32">
          <h1 className="text-4xl font-bold">Our Services</h1>
        </div>

        <div className="grid grid-cols-4 gap-8 text-center">
          {[
            { icon: "house.png", title: "55+ Restaurants" },
            { icon: "plate.png", title: "Good Quality" },
            { icon: "plater.png", title: "Discount System" },
            { icon: "bike.png", title: "Fast Delivery" },
          ].map((service, index) => (
            <div key={index}>
              <Image 
                src={`/images/${service.icon}`} 
                className="mx-auto"
                alt={service.title}
                width={100}
                height={100}
              />
              <p className="text-[16px] font-bold mt-4">{service.title}</p>
            </div>
          ))}
        </div>

        <div className="text-center my-32">
          <p className="text-[20px] font-bold">Testimonial</p>
          <h1 className="text-5xl font-bold mt-4">What Our Clients Say</h1>

          <Image 
            src="/images/commas.png" 
            className="mx-auto mt-8 mb-6"
            alt="Quotation marks"
            width={100}
            height={50}
          />

          <p className="text-base text-center mx-auto w-3/4">
            Lorem ipsum sit amet, consectur adspivjeit Lorem ipsum sit amet,
            consectur adspivjeit Lorem ipsum sit amet, consectur adspivjeit
            Lorem ipsum sit amet, consectur adspivjeit Lorem ipsum sit amet,
            consectur adspivjeit Lorem ipsum sit amet, consectur adspivjeit
          </p>

          <div className="flex justify-center gap-4 mt-16">
            {[
              "first.png",
              "second.png",
              "center.png",
              "secondlast.png",
              "secondlast.png",
            ].map((img, index) => (
              <Image 
                key={index} 
                src={`/images/${img}`}
                alt={`Testimonial image ${index + 1}`}
                width={100}
                height={100}
              />
            ))}
          </div>

          <p className="text-3xl font-bold mt-8">Mitchell Marsh</p>
          <p className="text-base text-stone-500">CEO, Bexon Agency</p>

          <div className="flex justify-center gap-4 mt-4">
            <Image 
              src="/images/left.png"
              alt="Left navigation"
              width={50}
              height={50}
            />
            <Image 
              src="/images/right.png"
              alt="Right navigation"
              width={50}
              height={50}
            />
          </div>
        </div>

        <div className="flex items-center my-32">
          <div className="w-1/2">
            <Image 
              src="/images/phone.png" 
              className="mx-auto"
              alt="Phone"
              width={300}
              height={300}
            />
          </div>
          <div className="ml-[130px] mt-[-100px]">
            <p className="text-orange-500 text-[20px] font-bold">
              Download Our App
            </p>
            <h1 className="text-[45px] font-bold">It&apos;s all here.</h1>
            <h1 className="text-[45px] font-bold">All in one app</h1>
            <p className="text-[16px]">
              Discover local on-demand delivery on Pickup from <br />
              restaurants, nearby grocery and convenience stores. <br /> and
              more
            </p>
          </div>
        </div>

        <div className="flex space-x-4 ml-[60%] mt-[-20%]">
          <div className="bg-black text-white px-10 py-4 rounded-lg flex items-center gap-5">
            <Image 
              src="/images/apples.png" 
              width={60} 
              height={30}
              alt="Apple App Store"
            />
            Download on the
            <br />
            App Store
          </div>
          <div className="bg-black text-white px-16 py-4 rounded-lg flex items-center gap-4">
            <Image 
              src="/images/store.png" 
              width={54} 
              height={24}
              alt="Google Play Store"
            />
            GET IT ON
            <br />
            Google Play
          </div>
        </div>

        <div className="flex items-center justify-between mt-52">
          <div>
            <h1 className="text-4xl font-bold">Subscribe Our Newsletter</h1>
            <p className="text-[15px] text-stone-500 mt-4">
              Subscribe on our newsletter to get our news.
            </p>
          </div>
          <form className="flex items-center gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-4 rounded-lg border-0 w-96 text-[19px]"
            />
            <button className="bg-yellow-500 text-white px-6 py-4 rounded-lg flex items-center gap-2 text-[19px]">
              Subscribe
              <MdKeyboardArrowRight className="bg-white text-amber-500 rounded-full p-1 text-5xl" />
            </button>
          </form>
        </div>

        <footer className="bg-slate-950 text-white py-20 mt-[100px] w-[145%] ml-[-23%]">
          <div className="container mx-auto grid grid-cols-4 gap-12 px-8">
            <div>
              <h1 className="text-5xl mb-6">Food House</h1>
              <p className="text-[17px] mb-4">
                Best cooks and best delivery guys all at your service. Host
                tasty food will reach you in 60 minutes.
              </p>
              <div className="flex space-x-8">
                <ImFacebook className="text-4xl p-2 bg-white text-amber-500 rounded-md" />
                <BsTwitter className="text-3xl p-2 bg-white text-amber-500 rounded-md" />
                <GrLinkedinOption className="text-3xl p-2 bg-white text-amber-500 rounded-md" />
              </div>
            </div>
            <div className="ml-[100px]">
              <h2 className="text-4xl mb-4">Company</h2>
              {["Career", "About Us", "Blog", "Press Info", "Features"].map(
                (item, index) => (
                  <p key={index} className="text-xl mb-2">
                    {item}
                  </p>
                )
              )}
            </div>
            <div className="ml-[100px]">
              <h2 className="text-4xl mb-4">Fudo</h2>
              {[
                "Why Fudo",
                "How it works",
                "Why choose us",
                "Client Stories",
                "Gallery",
              ].map((item, index) => (
                <p key={index} className="text-xl mb-2">
                  {item}
                </p>
              ))}
            </div>
            <div className="ml-[100px]">
              <h2 className="text-4xl mb-4">Menu</h2>
              {["Breakfast", "Lunch", "Dinner", "Fast Food", "Drinks"].map(
                (item, index) => (
                  <p key={index} className="text-xl mb-2">
                    {item}
                  </p>
                )
              )}
            </div>
          </div>
        </footer>

        <div className="bg-yellow-600 text-white py-4 w-[145%] ml-[-23%]">
          <div className="container text-[18px] flex justify-between px-8">
            <p>Copyright 2021 Besnik All Right Reserved</p>
            <div className="flex space-x-8">
              <p>Terms</p>
              <p>Privacy</p>
              <p>Security</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
