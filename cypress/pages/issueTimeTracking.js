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
}

const issueTimeTracking = new IssueTimeTracking();
export default issueTimeTracking;
