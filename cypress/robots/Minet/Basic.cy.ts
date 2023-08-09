import { BaseDependencies, BaseEyes, BaseHands } from "../BaseRobot";

export class Dependencies extends BaseDependencies {
  viewPort() {
    cy.viewport(1920, 1080);
  }

  wait() {
    cy.wait(5000);
  }
}

export class RobotEyes extends BaseEyes {}

export class RobotHands extends BaseHands {
  findByPlaceHolder(placeholder: string, value: string) {
    cy.getByPlaceholderText(placeholder).type(value);
  }
  findByButtonName(name: string) {
    cy.contains('button',name).click()
  }
  
}
