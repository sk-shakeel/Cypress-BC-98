import { LoginEmail, LoginPassword } from "../../fixtures/constants";
import { RobotEyes, RobotHands } from "./Basic.cy";

const robotHands = new RobotHands();
const roboteyes = new RobotEyes();
export class LoginEyes extends RobotEyes {
    AssertTitle() {
        roboteyes.seesDomContainText("h4", "Login To Minet");
      }
}

export class LoginHands extends RobotHands {
    EnterEmail() {
        robotHands.findByPlaceHolder("Email", LoginEmail);
      }
    
      EnterPassword() {
        robotHands.findByPlaceHolder("Password", LoginPassword);
      }
    
      ClickSignIn() {
        robotHands.findByButtonName("Sign In");
      }
}
