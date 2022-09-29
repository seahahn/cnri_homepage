import {motion, useAnimation} from "framer-motion";
import {useEffect, memo, useRef} from "react";
import Image from "next/image";
import {useInView} from "react-intersection-observer";
import {NextSeo} from "next-seo";
import ScrollContainer from "react-indiana-drag-scroll";
import TransitionVariants from "../../functions/TransitionVariants";
import PhilosophyComp from "../../components/CompanyComponents/PhilosophyComp";
import PhilosophyContent from "../../functions/PhilosophyContent";
import PhilosophyMobile from "../../components/CompanyComponents/PhilosophyMobile";
import {SectionTitleStyle} from "../../styles/commonStyles";
import Members from "../../components/CompanyComponents/Members";
import HistoryCard from "../../components/CompanyComponents/HistoryCard";
import HistoryContent from "../../functions/HistoryContents";

// Company Page seo 내용
const companySeo = {
  title: "Company",
  canonical: "https://www.cnrikorea.com/company",
  openGraph: {
    url: "https://www.cnrikorea.com/company",
    title: "Company | CNRIKOREA",
  },
};

function Company() {
  const controlText = useAnimation(); // Welcoming section에서 Company 애니메이션
  const controlPic = useAnimation(); // Welcoming section에서 배경 애니메이션
  const [ref, inView] = useInView(); // react-intersection-observer 쓰이는 hook.사용자가 view안에 접근했는지 확인.

  // 처음 뷰 접근할때 애니메이션 기능
  useEffect(() => {
    if (inView) {
      controlText.start("vidVisible");
      controlPic.start("vidVisible");
    }
  }, [controlPic, controlText, inView]);

  return (
    <>
      <NextSeo {...companySeo} />
      <div className="mx-[3vw] 2xl:mx-20">
        {/* Welcoming Section */}
        {/* TODO:md 싸이즈 이상일때 transition 적용 */}
        <section className="block md:hidden relative my-[3vh] mb-[5vh] md:mb-[10vh] 2xl:w-[1200px] mx-auto">
          <motion.div
            ref={ref}
            className="h-[80vh] flex relative "
            animate={controlPic}
            initial="vidHidden"
            variants={TransitionVariants.TansitionVidLToR}>
            <Image
              alt="comapnyImg"
              src="/images/companyIntro.jpg"
              layout="fill"
              priority
              className="object-cover h-full w-full rounded-lg shadow-lg z-0 "
            />
          </motion.div>
          {/* FIXME:애니메이션 기능 적용하면 모바일에서 깨짐.. */}
          <motion.div
            ref={ref}
            animate={controlText}
            // initial="hidden"
            // variants={TansitionVidRToL}
            className="absolute inset-0 flex justify-center items-center z-10 text-[15vw] md:text-[10vw] 2xl:text-[180px] font-bold text-white ">
            <div>COMPANY</div>
          </motion.div>
        </section>
        <div className="mx-auto  2xl:w-[1300px]">
          {/* Philosophy Section */}
          <section className="mb-[5vh] md:mb-[10vh] ">
            <SectionTitleStyle>Philosophy</SectionTitleStyle>
            {/* When display size is greater than md  */}
            <div className=" hidden md:flex ">
              {/* philosophyCard는 css file에 지정해놓음 --> 애니메이션 기능 따로 css으로 구현함 */}
              <div className="philosophyCard">
                <PhilosophyComp type={PhilosophyContent.mission} />
              </div>
              <div className="philosophyCard mx-10">
                <PhilosophyComp type={PhilosophyContent.vision} />
              </div>
              <div className="philosophyCard">
                <PhilosophyComp type={PhilosophyContent.coreValues} />
              </div>
            </div>
            {/* When display size is smaller than md  */}
            <div className=" md:hidden ">
              {/* indiana-drag-scroll 사용해서 마우스로 스크롤 가능하게 만듬 */}
              <ScrollContainer className="scroll-container flex cursor-pointer">
                <PhilosophyMobile type={PhilosophyContent.mission} />
                <PhilosophyMobile type={PhilosophyContent.vision} />
                <PhilosophyMobile type={PhilosophyContent.coreValues} />
              </ScrollContainer>
            </div>
          </section>
          {/* Member Section */}
          <section className="mb-[5vh] md:mb-[10vh]">
            <SectionTitleStyle>Members</SectionTitleStyle>
            {/* PC ver & Mobile ver */}
            <Members />
          </section>

          {/* History Section */}
          <section className="my-4">
            <SectionTitleStyle>History</SectionTitleStyle>
            {/* PC ver & Mobile ver */}
            <div className="flex items-center">
              <div className="flex flex-wrap">
                <HistoryCard content={HistoryContent?.[2022]} />
                <HistoryCard content={HistoryContent?.[2021]} />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default memo(Company);
