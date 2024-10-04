import * as React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Hero from "../assets/Hero.png";
import ProductCard from "../components/ProductCard";
import ProductRight from "../storage/product-1.json";
import ProductLeft from "../storage/product-2.json";
import Mentor from "../storage/mentor.json";

function About() {
  return (
    <>
      <Navbar />
      <main>
        <section className="fixed z-0 w-full h-[100vh] flex flex-row bg-brightOrange-200">
          {/* Left Side */}
          <div className="flex basis-1/2 justify-center items-center">
            <div className="flex flex-col items-start gap-[48px] w-[534px]">
              <h1 className="text-[48px] font-[700] text-white-100">How</h1>
              <p className="text-[32px] font-[500] text-white-100">
                Easy Funding, Bright Future
              </p>
              <button className="bg-white-100 text-goldDrop-300 font-[700] text-[32px] py-[14px] px-[24px] rounded-full">
                Get Started
              </button>
            </div>
          </div>
          {/* Right Side */}
          <div className="flex basis-1/2 justify-center items-center">
            <img
              src={Hero}
              alt="Hero"
              className="w-[533px] h-[519px] object-cover"
            />
          </div>
        </section>

        {/*Bottom Side*/}
        <section className="absolute mt-[125vh] z-10 w-full h-fit flex flex-col rounded-tl-[60px] rounded-tr-[60px] bg-white-100">
          <div className="flex flex-col mt-[115px] gap-[101px] justify-center items-center">
            <h2 className="text-[48px] font-[700] text-center text-black-500">
              About <span className="text-goldDrop-100">FundUp</span>
            </h2>
            <p className="text-[20px] font-[500] text-justify w-[1103px] text-black-500">
              FundUp is a crowdfunding platform designed to help entrepreneurs
              raise funds in a transparent and efficient way. Through FundUp,
              entrepreneurs can present their business ideas using compelling
              project descriptions to attract the attention of potential
              backers. The platform comes with a funding dashboard that allows
              entrepreneurs to track the amount of funds raised, funding
              targets, and contributor identities. In addition, there are
              investment forums that facilitate discussions between potential
              investors and entrepreneurs, as well as transparent reports that
              provide regular updates on the use of funds and project progress.
            </p>
            <div className="flex flex-col justify-center items-center w-[1240px] h-[529px] rounded-[70px] bg-brightOrange-200">
              <h2 className="text-[48px] font-[700] text-center text-white-100">
                Over a Decade of Fundraising Success
              </h2>
              <div className="flex flex-row mt-[94px] gap-[180px]">
                <p className="text-[24px] font-[500] text-center text-white-100">
                  Successful Startups
                </p>
                <p className="text-[24px] font-[500] text-center text-white-100">
                  Total Investor Funds
                </p>
                <p className="text-[24px] font-[500] text-center text-white-100">
                  Accredited Investors
                </p>
              </div>
              <div className="flex flex-row mt-[47px] gap-[60px]">
                <p className="text-[72px] font-[700] text-center text-white-100">
                  450+
                </p>
                <p className="text-[72px] font-[700] text-center text-white-100">
                  $650,000,000
                </p>
                <p className="text-[72px] font-[700] text-center text-white-100">
                  10,000+
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full h-[1249px] mt-[115px] gap-[60px] justify-center items-center bg-brightOrange-200">
            <h2 className="text-[48px] font-[700] text-center text-white-100">
              Companies Collab with FundUp
            </h2>
            <div
              id="scroll"
              className="flex flex-nowrap overflow-x-scroll touch-auto items-start pl-[150px]"
            >
              {ProductRight.map((product) => (
                <ProductCard
                  image={product.image}
                  title={product.title}
                  description={product.description}
                />
              ))}
            </div>
            <div
              id="scroll"
              className="flex flex-nowrap overflow-x-scroll touch-auto items-end pr-[150px]"
            >
              {ProductLeft.map((product) => (
                <ProductCard
                  image={product.image}
                  title={product.title}
                  description={product.description}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col w-full h-[1061px] mt-[132px] gap-[127px] justify-center items-center bg-white-100">
            <h2 className="text-[48px] font-[700] text-center text-black-500">
              Mentor Recommendation
            </h2>
            <div
              id="scroll"
              className="flex flex-nowrap overflow-x-scroll touch-auto justify-center items-center"
            >
              {Mentor.map((mentor) => (
                <ProductCard
                  image={mentor.image}
                  title={mentor.title}
                  description={mentor.description}
                />
              ))}
            </div>
            <hr className="w-[1006px] h-[6px] rounded-[20px] bg-goldDrop-400"></hr>
          </div>
          <Footer />
        </section>
      </main>
    </>
  );
}

export default About;
