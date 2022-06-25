import {motion, useAnimation} from "framer-motion";
import {useEffect, memo} from "react";
import {useInView} from "react-intersection-observer";
import Head from "next/head";
import ScrollContainer from "react-indiana-drag-scroll";
import VideoOnHover from "../../components/CompanyComponents/VideoOnHover";
import Member from "../../components/CompanyComponents/Member";
import History from "../../components/CompanyComponents/History";
import philosophy from "../../functions/philosophy";
import PhilosophyMobile from "../../components/mobileComponents/PhilosophyMobile";

const TansitionVidLToR = {
  visible: {opacity: 1, x: 0, transition: {duration: 0.8}},
  hidden: {opacity: 0, x: -500},
};

function Company() {
  const controlText = useAnimation();
  const controlVid = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controlText.start("visible");
      controlVid.start("visible");
    }
  }, [controlVid, controlText, inView]);

  return (
    <>
      <Head>
        <title>Company | CNRIKOREA</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <div className="mx-[6vw] ">
        <div className="my-[3vh] mb-[5vh] md:mb-[10vh]">
          <div className="relative mb-[5vh] md:mb-[10vh]">
            {/* md 싸이즈 이상일때 transition 적용  */}

            <motion.div
              ref={ref}
              className="h-[80vh] flex "
              animate={controlVid}
              initial="hidden"
              variants={TansitionVidLToR}>
              <img
                alt="comapnyImg"
                src="/images/companyIntro.jpg"
                className="object-cover h-full w-full rounded-lg shadow-lg z-0 "
              />
            </motion.div>
            <motion.div
              ref={ref}
              animate={controlText}
              initial="hidden"
              // variants={TansitionVidRToL}
              className="absolute inset-0 flex  justify-center items-center z-10 text-[15vw] md:text-[10vw] font-bold text-white ">
              <div>COMPANY</div>
            </motion.div>

            {/* md 싸이즈 이하일때 transition 적용  */}
            {/* 
            <motion.div
              ref={ref}
              className="h-[80vh]  md:hidden "
              animate={controlVid}
              initial="hidden"
              // variants={TansitionVidLToR}
            >
              <img
                src={"/images/companyIntro.jpg"}
                className="object-cover h-full w-full rounded-lg shadow-lg z-0 "
              ></img>
            </motion.div>
            <motion.div
              ref={ref}
              animate={controlText}
              initial="hidden"
              // variants={TansitionVidRToL}
              className="absolute inset-0 hidden md:hidden justify-center items-center z-10 text-[15vw] md:text-[10vw] font-bold text-white "
            >
              <div>COMPANY</div>
            </motion.div> */}

            {/* <SlideShow /> */}
          </div>
          <div className="text-[10vw] sm:text-[5vw] md:text-[4vw] font-semibold  mb-[2vh] ">
            Philosophy
          </div>
          {/* When display size is greater than md  */}
          <div className=" hidden md:flex ">
            <VideoOnHover
              videoPath="./video/philosophy1.mp4"
              isMiddle={false}
              type={philosophy.mission}
            />
            <VideoOnHover videoPath="./video/philosophy2.mp4" isMiddle type={philosophy.vision} />
            <VideoOnHover
              videoPath="./video/philosophy3.mp4"
              isMiddle={false}
              type={philosophy.coreValues}
            />
          </div>
          {/* When display size is smaller than md  */}
          <div className=" md:hidden ">
            <ScrollContainer className="scroll-container flex cursor-pointer">
              <PhilosophyMobile imgPath="./images/philosophy1Pic.png" type={philosophy.mission} />
              <PhilosophyMobile imgPath="./images/philosophy2Pic.png" type={philosophy.vision} />
              <PhilosophyMobile
                imgPath="./images/philosophy3Pic.png"
                type={philosophy.coreValues}
              />
            </ScrollContainer>
          </div>
        </div>
        <div className="mb-[5vh] md:mb-[10vh]">
          <div className="text-[10vw] sm:text-[5vw] md:text-[4vw] font-semibold  mb-[2vh]">
            Members
          </div>
          <ScrollContainer className="scroll-container flex cursor-pointer">
            <Member name="min" />
            <Member name="jonghoh" />
            <Member name="prof" />
            <Member name="minhyeok" />
            <Member name="kyunghoh" />
            <Member name="cherin" />
          </ScrollContainer>
        </div>

        <div className="my-4">
          <div className="text-[10vw] sm:text-[5vw] md:text-[4vw] font-semibold  mb-[2vh]">
            History
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10">
            <History year={2022} />
            <History year={2021} />
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(Company);
