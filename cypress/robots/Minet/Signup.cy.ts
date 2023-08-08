import {
  SignupEmail,
  SignupName,
  SignupPassword,
} from "../../fixtures/constants";
import { BaseEyes, BaseHands } from "../BaseRobot";
import { RobotEyes, RobotHands } from "./Basic.cy";

const sigupEyes = new RobotEyes();
const signupHands = new RobotHands();
export class SignUpPageRobotEyes extends BaseEyes {
  AssertTitle() {
    sigupEyes.seesDomContainText("h4", "Signup with Minet");
  }

  AssertCaption() {
    sigupEyes.seesDomContainText(
      "span",
      "A min of 8 characters with at least 1 special character and number included"
    );
  }
}

export class SignUppageRobotHands extends BaseHands {
  EnterName() {
    signupHands.findByPlaceHolder("Eg : John Doe", SignupName);
  }

  EnterEmail() {
    signupHands.findByPlaceHolder("you@company.com", SignupEmail);
  }

  EnterPassword() {
    signupHands.findByPlaceHolder("Create Password", SignupPassword);
  }

  ClickSignUp() {
    signupHands.findByButtonName("Sign up");
  }
}
