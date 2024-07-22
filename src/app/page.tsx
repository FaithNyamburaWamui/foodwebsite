import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="container">
        <div className="flex gap-[25%] text-[18px] mt-6">
          <h1 className="text-[26px] ml-[100px] italic text-[#ffc624]">
            FoodHouse
          </h1>

          <ul className="flex gap-[100px] font-sans">
            <li>HOME</li>
            <li>RESTURNT</li>
            <li>SERVICS</li>
            <li>CART</li>
          </ul>
          <h2 className="text-[23px]">SignIn</h2>
        </div>
        <div className="flex justify-center">
          <div className="ml-[220px]">
            <h1 className="text-[60px] mt-[180px] whitespace-[nowrwap]">
              Enjoy Delicious
              <br /> Food in{" "}
              <span className="text-amber-400">Healthy Life</span>
            </h1>
            <p className="text-[21px] mt-[40px]">
              Tandoori masala is an Indian spice blend consisting of a <br />
              variety of spices Tandoori masala is an Indian spice blend <br />
              consisting of a variety of spices
            </p>
            <button className="my-[60px] bg-[my-[60px] bg-[#FFC624] text-neutral-100 min-w-[200px] text-amber-500 min-h-[65px] text-[25px] rounded-lg mr-[60px] mt-[15%] text-neutral-100 min-w-[200px] text-amber-500 min-h-[60px] text-[23px] rounded-lg mr-[60px] mt-[20px]">
              Order Now
            </button>
          </div>

          <img src="/images/chicken.png" className="ml-[20px]" />
        </div>

        <h2 className="text-[33px] text-center mt-[150px] ml-[160px] font-sans">
          Online Store
        </h2>
        <h1 className="text-[46px] text-center ml-[160px] font-sans">
          Popular Foods
        </h1>

        <div className="flex gap-[100px] ml-[250px] mt-[70px]">
          <div>
            <img src="/images/fish.png" />
            <h3 className="text-[40px] mt-[10px] text-center">Fruit dish</h3>
            <p className="text-[23px] mt-[20px] text-center">Dinko Food</p>
            <img src="/images/star.png" className="ml-[65px] mt-[10px]" />
            <button className="border-solid bg-[#ffc624] pt-[15px] pb-[15px] pr-[50px] pl-[50px] rounded-[20px] ml-[28px] text-neutral-100">
              Add to cart $696
            </button>
          </div>
          <div>
            <img src="/images/chips.png" />
            <h3 className="text-[40px] mt-[10px] text-center">Fruit dish</h3>
            <p className="text-[23px] mt-[20px] text-center">Dinko Food</p>
            <img src="/images/star.png" className="ml-[65px] mt-[10px]" />
            <button className="border-solid bg-[#ffc624] pt-[15px] pb-[15px] pr-[50px] pl-[50px] rounded-[20px] ml-[28px] text-neutral-100">
              Add to cart $696
            </button>
          </div>
          <div>
            <img src="/images/dish.png" />
            <h3 className="text-[40px] mt-[10px] text-center">Fruit dish</h3>
            <p className="text-[23px] mt-[20px] text-center">Dinko Food</p>
            <img src="/images/star.png" className="ml-[65px] mt-[10px]" />
            <button className="border-solid bg-[#ffc624] pt-[15px] pb-[15px] pr-[50px] pl-[50px] rounded-[20px] ml-[28px] text-neutral-100">
              Add to cart $696
            </button>
          </div>
          <div>
            <img src="/images/pizza.png" />
            <h3 className="text-[40px] mt-[10px] text-center">Fruit dish</h3>
            <p className="text-[23px] mt-[20px] text-center">Dinko Food</p>
            <img src="/images/star.png" className="ml-[65px] mt-[10px]" />
            <button className="border-solid bg-[#ffc624] pt-[15px] pb-[15px] pr-[50px] pl-[50px] rounded-[20px] ml-[28px] text-neutral-100">
              Add to cart $696
            </button>
          </div>
        </div>
        <div className="flex mt-[250px] justify-center">
          <div>
            <button className="border-solid bg-[#ffc624] pt-[10px] pb-[10px] pr-[15px] pl-[15px] rounded-[10px] ml-[250px] text-[15px] mt-[200px] text-neutral-100">
              -50%
            </button>
            <h1 className="text-[70px] ml-[250px]">Our Special Offer</h1>
            <p className="text-[20px] ml-[260px] mt-[20px] text-stone-500">
              Best cooks and best delivery guys all at your
              <br /> service. Hot tasty food will reach you in 60minutes
            </p>
            <button className="text-[18px] bg-[#ffc624] pt-[20px] pl-[30px] pr-[30px] pb-[10px] ml-[100px] rounded-[20px] ml-[250px] mt-[60px] text-neutral-100 flex gap-[10px]">
              See All Menu
              <img src="/images/arrow.png" style={{ width: "40px" }} />
            </button>
          </div>
          <img src="/images/variety.png"  style={{width:"60%", height:"100%", paddingTop:"100px"}}/>
        </div>

        <div className="ml-[600px]  mt-[300px]">
          <p className="text-[25px] text-stone-500 ml-[180px]">Quality Food</p>
          <h1 className="text-[50px]">Get The Best Offers</h1>
          <p className="text-[20px] text-stone-500 w-[600px] ml-[-60px]">
            The food at your door step. Why starve when you have us. Your hunger
            partner. Straight out if the over to your doorstep.
          </p>
        </div>

        <div className="flex mt-[100px]">
          <div className="flex ml-[120px] gap-[50px]">
            <div className="mt-[20px]">
              <h2 className="text-[30px]">Any day offers</h2>
              <p className="text-[16px] text-stone-500">
                New phenomenon Buger taste
              </p>
              <p className="text-[16px] text-yellow-400">$ 12.90</p>
              <div className="mt-[20px] ml-[10px]">
                <button className="bg-yellow-400 pl-[15px] pr-[15px] pt-[10px] rounded-[10px]"></button>
              </div>
            </div>
            <img
              src="/images/hambuger.png"
              style={{ width: "230px", height: "240px" }}
            />
          </div>
          <div className="flex ml-[120px] gap-[50px]">
            <div className="mt-[40px]">
              <h2 className="text-[30px]">Other flavours</h2>
              <p className="text-[16px] text-stone-500">
                Save room.We made salats
              </p>
              <p className="text-[16px] text-yellow-400">$ 12.90</p>
              <div className="mt-[20px] ml-[10px]">
                <button className="bg-yellow-400 pl-[15px] pr-[15px] pt-[10px] rounded-[10px]"></button>
              </div>
            </div>
            <img
              src="/images/salad.png"
              style={{ width: "230px", height: "240px" }}
            />
          </div>

          <div className="flex ml-[120px] gap-[10px] mt-[40px]">
            <div>
              <h2 className="text-[26px]">
                Find a poco store near <br />
                you
              </h2>
              <div className="mt-[60px] ml-[10px]">
                <button className="bg-yellow-400 pl-[15px] pr-[15px] pt-[10px] rounded-[10px]"></button>
              </div>
            </div>
            <img
              src="/images/map.jpeg"
              style={{ width: "200px", height: "170px" }}
            />
          </div>
        </div>

        <div className="mt-[100px] ml-[56%]">
          <button className="bg-yellow-400 pl-[10px] pr-[10px] pt-[20px] rounded-[20px]"></button>
        </div>
        <div>
          <h1 className="text-center ml-[200px] text-[30px] mt-[180px]">
            Our Services
          </h1>
        </div>
        <div className="flex ml-[260px] mt-[130px] gap-[200px]">
          <div>
            <img src="/images/house.png" />
            <p className="text-[20px] text-center mt-[40px]">55+Restaurants</p>
          </div>
          <div>
            <img src="/images/plate.png" />
            <p className="text-[20px] text-center mt-[40px]">GoodQuality</p>
          </div>
          <div className="mt-[10px]">
            <img src="/images/plater.png" />
            <p className="text-[20px] text-center mt-[40px]">DiscountSystem</p>
          </div>
          <div className="mt-[10px]">
            <img src="/images/bike.png" />
            <p className="text-[20px] text-center mt-[40px]">Fast Delivery</p>
          </div>
        </div>
        <div className="mt-[200px] text-center">
          <p className="text-[25px] ml-[180px]">Testimonial</p>
          <h1 className="text-[50px] ml-[190px]">What Our Clients Say</h1>
          <img
            src="/images/commas.png"
            className="ml-[53%] mt-[40px] mb-[30px]"
          />
          <p className="text-[16px] ml-[150px]">
            Lorem ipsum sit amet, consectur adspivjeit Lorem ipsum sit amet,
            consectur adspivjeit Lorem <br />
            ipsum sit amet, consectur adspivjeit Lorem ipsum sit amet, consectur
            adspivjeit Lorem ipsum sit amet, <br />
            consectur adspivjeit Lorem ipsum sit amet, consectur adspivjeit
          </p>
          <div className="mt-[80px] flex gap-[20px] ml-[550px]">
            <img src="/images/first.png" />
            <img src="/images/second.png" />
            <img src="/images/center.png" />
            <img src="/images/secondlast.png" />
            <img src="/images/secondlast.png" />
          </div>
          <p className="text-[30px] mt-[30px] ml-[170px]">Mitchell Marsh</p>
          <p className="text-[18px] ml-[170px] text-stone-500">
            CEO, Bexon Agency
          </p>
          <div className="flex ml-[51%] gap-[30px] mt-[20px]">
            <img src="/images/left.png" />
            <img src="/images/right.png" />
          </div>
        </div>

        <div className="mt-[100px] flex ml-[150px]">
          <div>
          <img src="/images/phone.png" className="ml-[230px]" />
          </div>
          <div className="ml-[230px] mt-[220px]">
          <p className="text-orange-500 text-[20px]">Download Our App</p>
          <h1 className="text-[45px]">It's all here.</h1>
          <h1 className="text-[45px]">All in one app</h1>
         <p className="text-[16px]">Discover local on-demand delivery on Pickup from <br/> restaurants, nearby grocery and convenience stores. <br/> and more</p>
         </div>
          </div>
          <div className="flex space-x-4 ml-[950px] mt-[-130px]">
            <div className="bg-black text-white px-6 py-2 rounded-lg flex items-center ">
              <img src="/images/apples.png"  width={24} height={24} />
              Download on the<br />App Store
            </div>
            <div className="bg-black text-white px-6 py-2 rounded-lg flex items-center">
              <img src="/images/store.png"  width={24} height={24}  />
              GET IT ON<br />Google Play
            </div>
          </div>
        
          <div className="flex gap-[190px] ml-[270px] mb-[130px]">
            <div>
            <h1 className="text-[35px] mt-[220px]">Subscribe Our Newsletter</h1>
            <p className="text-[17px] text-stone-500">Subscribe on our newsletter to get our <br/> news.</p>
            </div>
            <p className="text-stone-500 mt-[220px]">Your email address</p>
            <div>
            <button className="text-[15px] bg-[#ffc624] pt-[15px] pl-[20px] pr-[30px] pb-[7px] rounded-[10px]  mt-[200px] text-neutral-100 flex gap-[10px]">
              Subscribe
              <img src="/images/arrow.png" style={{ width: "40px" }} />
            </button>
            </div>
            </div>
            <div className="flex gap-[250px] text-white bg-black" style={{width:"119%", padding:"20px", boxSizing:"border-box"}}>
            <div className="ml-[200px] mr-[90px]">
              <h1 className="text-[25px] mb-[30px]">Food House</h1>
              <p className="text-[14px]">Best cooks and best delivery guys all <br/> at your service. Host tasty food will <br/> reach you in 60minutes.</p>
              <div className="flex gap-[20px]">
              <img src="/images/facebook.png" style={{width:"35px", backgroundColor:"white", borderRadius:"5px"}} className="pt-[6px] pb-[6px] pl-[7px] pr-[7px] mt-[30px]"/>
              <img src="/images/twitter.png" style={{width:"35px", backgroundColor:"white", borderRadius:"5px"}} className="pt-[6px] pb-[6px] pl-[7px] pr-[7px] mt-[30px]"/>
              <img src="/images/linkedin.png" style={{width:"35px", backgroundColor:"white", borderRadius:"5px"}} className="pt-[6px] pb-[6px] pl-[7px] pr-[7px] mt-[30px]"/>
              </div>
            </div>
            <div>
              <h2 className="text-[25px] mb-[30px]">Company</h2>
              <p className="text-[15px]">Career</p>
              <p  className="text-[15px]">About Us</p>
              <p  className="text-[15px]">Blog</p>
              <p  className="text-[15px]">Press Info</p>
              <p  className="text-[15px]">Features</p>
            </div>
            <div>
              <h2 className="text-[25px] mb-[30px]">Fudo</h2>
              <p className="text-[15px]">Why Fudo</p>
              <p className="text-[15px]">How it works</p>
              <p className="text-[15px]">Why choose us</p>
              <p className="text-[15px]">Client Stories</p>
              <p className="text-[15px]">Gallery</p>
            </div>
            <div className="fill-black">
              <h2 className="text-[25px] mb-[30px]">Menu</h2>
              <p className="text-[15px]">Breakfast</p>
              <p className="text-[15px]">Lunch</p>
              <p className="text-[15px]">Dinner</p>
              <p className="text-[15px]">Fast Food</p>
              <p className="text-[15px]">Drinks</p>
            </div>
            </div>
        </div>
    </main>
  );
}
