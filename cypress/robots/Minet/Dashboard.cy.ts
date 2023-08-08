import { RobotEyes, RobotHands } from "./Basic.cy";

const robotHands = new RobotHands();
const robotEyes = new RobotEyes();
export class DashboardEyes extends RobotEyes {
  ViewText(text: string) {
    robotEyes.seesDomContainText("span", text);
  }
}

export class DashboardHands extends RobotHands {
  Logout() {
    robotHands.clickOnImageByPath(".*\\logout\\.svg$");
  }

  ClickToViewTransactions() {
    robotHands.clickOnDomElementText("view all");
  }
  ClickToHideTransactions() {
    robotHands.clickOnDomElementText("hide");
  }

  ClickToViewAllAssets(){
    robotHands.clickOnDomElementText("Discover Assets")
  }
}
