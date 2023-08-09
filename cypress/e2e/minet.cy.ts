import { Dependencies } from "../robots/Minet/Basic.cy";
import { DashboardEyes, DashboardHands } from "../robots/Minet/Dashboard.cy";
import { LoginEyes, LoginHands } from "../robots/Minet/Login.cy";
import {
  SignUpPageRobotEyes,
  SignUppageRobotHands,
} from "../robots/Minet/Signup.cy";
import { TradeEyes, TradeHands } from "../robots/Minet/Trade.cy";

const dependancies = new Dependencies();
const signupPageEyes = new SignUpPageRobotEyes();
const signUppageHands = new SignUppageRobotHands();
const loginPageEyes = new LoginEyes();
const loginPageHands = new LoginHands();
const dashboardPageEyes = new DashboardEyes();
const dashboardPageHands = new DashboardHands();
const tradePageEyes = new TradeEyes();
const tradePageHands = new TradeHands();

context("Test application", () => {
  describe("Minet E2E Testing", () => {
    it("signup", () => {
      dependancies.viewPort();
      dependancies.accessUrl(Cypress.env("host_url"));

      signupPageEyes.AssertTitle();
      signUppageHands.EnterName();
      signUppageHands.EnterEmail();
      signUppageHands.EnterPassword();
      signupPageEyes.AssertCaption();
      signUppageHands.ClickSignUp();
      dependancies.wait();
      dashboardPageHands.Logout();
    });
    it("login", () => {
      dependancies.accessUrl(Cypress.env("host_login_url"));

      loginPageEyes.AssertTitle();
      loginPageHands.EnterEmail();
      loginPageHands.EnterPassword();
      loginPageHands.ClickSignIn();
      dependancies.wait();
    });

    it("dashboard", () => {
      dashboardPageEyes.ViewText("view all");
      dashboardPageHands.ClickToViewTransactions();
      dashboardPageEyes.ViewText("hide");
      dependancies.wait();
      dashboardPageHands.ClickToHideTransactions();

      dashboardPageEyes.ViewText("Discover Assets");
    });

    it("view tradePage and then buy crypto", () => {
      dashboardPageHands.ClickToViewAllAssets();

      tradePageEyes.ViewText("Watchlist");
      tradePageHands.ClickToViewWatchlists();

      tradePageHands.ClickOnRowToViewDetails();
      tradePageHands.ClickOnBuyButton();
      dependancies.wait();

      tradePageHands.ConfirmBuyButton();

      dependancies.wait();
    });
    it("trade page and then sell crypto", () => {
      tradePageHands.GoToDashboard();
      dependancies.wait();

      dashboardPageEyes.ViewText("Discover Assets");
      dashboardPageHands.ClickToViewAllAssets();
      tradePageHands.ClickOnRowToViewDetails();
      tradePageHands.ClickOnSellButton();

      dependancies.wait();

      tradePageHands.ConfirmSellButton();

      dependancies.wait();
    });
    it("logout", () => {
      dashboardPageHands.Logout();
    });
  });
});
