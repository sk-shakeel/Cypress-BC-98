import { RobotEyes, RobotHands } from "./Basic.cy";

const robotHands = new RobotHands();
const robotEyes = new RobotEyes();
export class TradeEyes extends RobotEyes {
  ViewText(text: string) {
    robotEyes.seesDomContainText("span", text);
  }
}

export class TradeHands extends RobotHands {
  ClickToViewWatchlists() {
    robotHands.clickOnDomElementText("Watchlist");
  }
}
