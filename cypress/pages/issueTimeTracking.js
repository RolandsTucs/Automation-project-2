class IssueTimeTracking {
  constructor() {
    this.issueDetails = '[data-testid="modal:issue-details"]';
    this.numberField = 'input[placeholder="Number"]';
    this.stopWatchIcon = '[data-testid="icon:stopwatch"]';
    this.placeHolderNumber = '[placeholder="Number"]';
    this.modalTracking = '[data-testid="modal:tracking"]';
    this.closeIcon = '[data-testid="icon:close"]';
    this.backlogList = '[data-testid="board-list:backlog"]';
  }

  openTimeTracking() {
    cy.get(this.stopWatchIcon).click();
  }

  clickDoneInModalTracking() {
    cy.get(issueTimeTracking.modalTracking).contains("Done").click();
  }

  closeIssueDetailsModal() {
    cy.get(issueTimeTracking.closeIcon).first().click();
  }
}

const issueTimeTracking = new IssueTimeTracking();
export default issueTimeTracking;
