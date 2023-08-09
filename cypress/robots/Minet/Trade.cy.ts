import { RobotEyes, RobotHands } from "./Basic.cy";

const robotHands = new RobotHands();
const robotEyes = new RobotEyes();
export class TradeEyes extends RobotEyes {
  ViewText(text: string) {
    robotEyes.seesDomContainText("h6", text);
  }
}

export class TradeHands extends RobotHands {
  ClickToViewWatchlists() {
    robotHands.clickOnDomElementText("Watchlist");
  }

  ClickOnRowToViewDetails() {
    robotHands.clickOnDomElementText("Bitcoin");
  }

  ClickOnBuyButton() {
    robotHands.findByButtonName("BUY");
  }

  ConfirmBuyButton() {
    robotHands.findByButtonName("BUY NOW");
  }

  GoToDashboard() {
    robotHands.clickOnImageByPath(".*\\bdashboard\\.svg$");
  }

  ClickOnSellButton() {
    robotHands.findByButtonName("SELL");
  }

  ConfirmSellButton() {
    robotHands.findByButtonName("SELL NOW");
  }

}
