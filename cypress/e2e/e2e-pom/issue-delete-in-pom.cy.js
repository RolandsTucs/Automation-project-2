/**
 * This is an example file and approach for POM in Cypress
 */
import IssueModal from "../../pages/IssueModal";

describe("Issue delete", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.url()
      .should("eq", `${Cypress.env("baseUrl")}project/board`)
      .then((url) => {
        //open issue detail modal with title from line 16
        cy.contains(issueTitle).click();
      });
  });

  function IssueVisibility(issuesList, trueOrFalse) {
    cy.get(issuesList).should("be.visible");
    cy.reload();

    if (true) {
      cy.contains(issuesList).should("be.visible");
    } else {
      cy.contains(issuesList).should("not.exist");
    }
  }

  //issue title, that we are testing with, saved into variable
  const issueTitle = "This is an issue of type: Task.";

  // Assignment 4 Test case 1: Issue Deletion
  it("Should delete issue successfully", () => {
    IssueModal.clickDeleteButton;
    IssueModal.confirmDeletion;
    IssueModal.ensureIssueIsNotVisibleOnBoard;
  });

  // Assignment 4 Test case 2: Cancellation of Issue Deletion
  it("Should cancel deletion process successfully", () => {
    //add steps to start deletion process but cancel it
    IssueModal.clickDeleteButton;
    IssueModal.cancelDeletion;
    IssueModal.closeDetailModal;
    IssueModal.ensureIssueIsVisibleOnBoard;
  });
});
