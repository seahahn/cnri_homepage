import React, {memo} from "react";
import Image from "next/image";
import * as SS from "../SharedStyle";
import colors from "../../../../constants/colors";
import * as CSS from "../../Common/SharedStyle";

const UseCase2 = memo(() => (
  <CSS.ContentFlex isPhotoLeft>
    <div>
      <SS.UsecaseTitleContainer>
        <SS.Title
          color={colors.CIS_MAIN_GREEN}
          mobileColor={colors.BEIGE_BG_2}
          mobileBgColor={colors.CIS_MAIN_GREEN}
          className="font-bold">
          실제 사용 사례
        </SS.Title>
      </SS.UsecaseTitleContainer>
      <SS.Description mobileColor={colors.CIS_MAIN_GREEN}>
        ERP 서비스와 연동한
        <br />
        <strong>탄소회계 자동화 </strong>
        시스템
      </SS.Description>
    </div>
    <SS.UsecaseImgNLabelContainer>
      <SS.UsecaseImageContainer isOriginLeft>
        <Image src="/images/cis/dashboard.png" alt="실제 사용 사례 2" layout="fill" priority />
      </SS.UsecaseImageContainer>
      <SS.ImageLabel color={colors.BEIGE_BG_2} bgColor={colors.CIS_MAIN_GREEN}>
        가상공정 기준
      </SS.ImageLabel>
    </SS.UsecaseImgNLabelContainer>
  </CSS.ContentFlex>
));

export default UseCase2;
