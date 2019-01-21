const prExisting = require('./events/pullRequests.existing');
const prOpened = require('./events/pullRequests.opened');
const prClosed = require('./events/pullRequests.closed');
const prOpenedFiles = require('./files/files.opened');
const prExistingFiles = require('./files/files.existing');
const prUnrelatedFiles = require('./files/files.unrelated');

module.exports = {
  activity: {},
  apps: {},
  authorization: {},
  checks: {},
  codesOfConduct: {},
  emojis: {},
  enterprise: {},
  gists: {},
  gitdata: {},
  gitignore: {},
  integrations: {
      addRepoToInstallation: jest.fn(),
      createInstallationToken: jest.fn(),
      getInstallationRepositories: jest.fn(),
      getInstallations: jest.fn(),
      removeRepoFromInstallation: jest.fn() },
  issues: {
      addAssignees: jest.fn(),
      addAssigneesToIssue: jest.fn(),
      addLabels: jest.fn(),
      checkAssignee: jest.fn(),
      create: jest.fn(),
      createComment: jest.fn(Promise.resolve({})),
      createLabel: jest.fn(),
      createMilestone: jest.fn(),
      deleteComment: jest.fn(),
      deleteLabel: jest.fn(),
      deleteMilestone: jest.fn(),
      edit: jest.fn(),
      editComment: jest.fn(),
      get: jest.fn(),
      getAll: jest.fn(),
      getAssignees: jest.fn(),
      getComment: jest.fn(),
      getComments: jest.fn(),
      getCommentsForRepo: jest.fn(),
      getEvent: jest.fn(),
      getEvents: jest.fn(),
      getEventsForRepo: jest.fn(),
      getEventsTimeline: jest.fn(),
      getForOrg: jest.fn(),
      getForRepo: jest.fn(),
      getForUser: jest.fn(),
      getIssueLabels: jest.fn(),
      getLabel: jest.fn(() => Promise.resolve([])),
      getLabels: jest.fn(),
      getMilestone: jest.fn(),
      getMilestoneLabels: jest.fn(),
      getMilestones: jest.fn(),
      list: jest.fn(),
      listAssignees: jest.fn(),
      listComments: jest.fn(),
      listCommentsForRepo: jest.fn(),
      listEvents: jest.fn(),
      listEventsForRepo: jest.fn(),
      listEventsForTimeline: jest.fn(),
      listForAuthenticatedUser: jest.fn(),
      listForOrg: jest.fn(),
      listForRepo: jest.fn(),
      listLabelsForMilestone: jest.fn(),
      listLabelsForRepo: jest.fn(),
      listLabelsOnIssue: jest.fn(),
      listMilestonesForRepo: jest.fn(),
      lock: jest.fn(),
      removeAllLabels: jest.fn(),
      removeAssignees: jest.fn(),
      removeAssigneesFromIssue: jest.fn(),
      removeLabel: jest.fn(),
      removeLabels: jest.fn(),
      replaceAllLabels: jest.fn(),
      replaceLabels: jest.fn(),
      unlock: jest.fn(),
      update: jest.fn(),
      updateComment: jest.fn(),
      updateLabel: jest.fn(),
      updateMilestone: jest.fn() },
  licenses: {},
  markdown: {},
  meta: {},
  migrations: {},
  misc: {},
  orgs: {},
  projects: {},
  pullRequests: {
      checkIfMerged: jest.fn(),
      checkMerged: jest.fn(),
      create: jest.fn(),
      createComment: jest.fn(),
      createCommentReply: jest.fn(),
      createFromIssue: jest.fn(),
      createReview: jest.fn(),
      createReviewRequest: jest.fn(),
      deleteComment: jest.fn(),
      deletePendingReview: jest.fn(),
      deleteReviewRequest: jest.fn(),
      dismissReview: jest.fn(),
      editComment: jest.fn(),
      get: jest.fn(),
      getAll: jest.fn(),
      getComment: jest.fn(),
      getComments: jest.fn(),
      getCommentsForRepo: jest.fn(),
      getCommentsForReview: jest.fn(),
      getCommits: jest.fn(),
      getFiles: jest.fn(),
      getReview: jest.fn(),
      getReviewComments: jest.fn(),
      getReviewRequests: jest.fn(),
      getReviews: jest.fn(),
      list: jest.fn(() => ({ data: [
            prExisting.pull_request
          ] })),
      listComments: jest.fn(),
      listCommentsForRepo: jest.fn(),
      listCommits: jest.fn(),
      listFiles: jest.fn((issue) => {
          const { number } = issue;
          let data;
          switch (number) {
            case 31525:
              data = prOpenedFiles;
              break;
            case 33363:
              data = prExistingFiles;
              break;
            case 34559:
              data = prUnrelatedFiles;
              break;
            default:
              data = prExistingFiles;
          }
          return { data };
        }),
      listReviewRequests: jest.fn(),
      listReviews: jest.fn(),
      merge: jest.fn(),
      submitReview: jest.fn(),
      update: jest.fn(),
      updateComment: jest.fn() },
  rateLimit: {},
  reactions: {},
  repos: {
      acceptInvitation: jest.fn(),
      addCollaborator: jest.fn(),
      addDeployKey: jest.fn(),
      addProtectedBranchAdminEnforcement: jest.fn(),
      addProtectedBranchRequiredSignatures: jest.fn(),
      addProtectedBranchRequiredStatusChecksContexts: jest.fn(),
      addProtectedBranchTeamRestrictions: jest.fn(),
      addProtectedBranchUserRestrictions: jest.fn(),
      checkCollaborator: jest.fn(),
      compareCommits: jest.fn(),
      create: jest.fn(),
      createCommitComment: jest.fn(),
      createDeployment: jest.fn(),
      createDeploymentStatus: jest.fn(),
      createFile: jest.fn(),
      createForAuthenticatedUser: jest.fn(),
      createForOrg: jest.fn(),
      createFork: jest.fn(),
      createHook: jest.fn(),
      createInOrg: jest.fn(),
      createRelease: jest.fn(),
      createStatus: jest.fn(),
      declineInvitation: jest.fn(),
      delete: jest.fn(),
      deleteAsset: jest.fn(),
      deleteCommitComment: jest.fn(),
      deleteDeployKey: jest.fn(),
      deleteDownload: jest.fn(),
      deleteFile: jest.fn(),
      deleteHook: jest.fn(),
      deleteInvitation: jest.fn(),
      deleteInvite: jest.fn(),
      deleteRelease: jest.fn(),
      deleteReleaseAsset: jest.fn(),
      edit: jest.fn(),
      editAsset: jest.fn(),
      editHook: jest.fn(),
      editRelease: jest.fn(),
      fork: jest.fn(),
      get: jest.fn(),
      getAll: jest.fn(),
      getAllCommitComments: jest.fn(),
      getArchiveLink: jest.fn(),
      getAsset: jest.fn(),
      getAssets: jest.fn(),
      getBranch: jest.fn(),
      getBranchProtection: jest.fn(),
      getBranches: jest.fn(),
      getById: jest.fn(),
      getClones: jest.fn(),
      getCodeFrequencyStats: jest.fn(),
      getCollaboratorPermissionLevel: jest.fn(),
      getCollaborators: jest.fn(),
      getCombinedStatusForRef: jest.fn(),
      getCommit: jest.fn(),
      getCommitActivityStats: jest.fn(),
      getCommitComment: jest.fn(),
      getCommitComments: jest.fn(),
      getCommitRefSha: jest.fn(),
      getCommits: jest.fn(),
      getCommunityProfileMetrics: jest.fn(),
      getContent: jest.fn(Promise.resolve({data: 'string'})),
      getContents: jest.fn(),
      getContributors: jest.fn(),
      getContributorsStats: jest.fn(),
      getDeployKey: jest.fn(),
      getDeployKeys: jest.fn(),
      getDeployment: jest.fn(),
      getDeploymentStatus: jest.fn(),
      getDeploymentStatuses: jest.fn(),
      getDeployments: jest.fn(),
      getDownload: jest.fn(),
      getDownloads: jest.fn(),
      getForOrg: jest.fn(),
      getForUser: jest.fn(),
      getForks: jest.fn(),
      getHook: jest.fn(),
      getHooks: jest.fn(),
      getInvites: jest.fn(),
      getLanguages: jest.fn(),
      getLatestPagesBuild: jest.fn(),
      getLatestRelease: jest.fn(),
      getPages: jest.fn(),
      getPagesBuild: jest.fn(),
      getPagesBuilds: jest.fn(),
      getParticipationStats: jest.fn(),
      getPaths: jest.fn(),
      getProtectedBranchAdminEnforcement: jest.fn(),
      getProtectedBranchPullRequestReviewEnforcement: jest.fn(),
      getProtectedBranchRequiredSignatures: jest.fn(),
      getProtectedBranchRequiredStatusChecks: jest.fn(),
      getProtectedBranchRequiredStatusChecksContexts: jest.fn(),
      getProtectedBranchRestrictions: jest.fn(),
      getProtectedBranchTeamRestrictions: jest.fn(),
      getProtectedBranchUserRestrictions: jest.fn(),
      getPublic: jest.fn(),
      getPunchCardStats: jest.fn(),
      getReadme: jest.fn(),
      getReferrers: jest.fn(),
      getRelease: jest.fn(),
      getReleaseAsset: jest.fn(),
      getReleaseByTag: jest.fn(),
      getReleases: jest.fn(),
      getShaOfCommitRef: jest.fn(),
      getStatsCodeFrequency: jest.fn(),
      getStatsCommitActivity: jest.fn(),
      getStatsContributors: jest.fn(),
      getStatsParticipation: jest.fn(),
      getStatsPunchCard: jest.fn(),
      getStatuses: jest.fn(),
      getTags: jest.fn(),
      getTeams: jest.fn(),
      getTopPaths: jest.fn(),
      getTopReferrers: jest.fn(),
      getTopics: jest.fn(),
      getViews: jest.fn(),
      list: jest.fn(),
      listAssetsForRelease: jest.fn(),
      listBranches: jest.fn(),
      listCollaborators: jest.fn(),
      listCommentsForCommit: jest.fn(),
      listCommitComments: jest.fn(),
      listCommits: jest.fn(),
      listContributors: jest.fn(),
      listDeployKeys: jest.fn(),
      listDeploymentStatuses: jest.fn(),
      listDeployments: jest.fn(),
      listDownloads: jest.fn(),
      listForOrg: jest.fn(),
      listForUser: jest.fn(),
      listForks: jest.fn(),
      listHooks: jest.fn(),
      listInvitations: jest.fn(),
      listInvitationsForAuthenticatedUser: jest.fn(),
      listLanguages: jest.fn(),
      listPagesBuilds: jest.fn(),
      listProtectedBranchRequiredStatusChecksContexts: jest.fn(),
      listProtectedBranchTeamRestrictions: jest.fn(),
      listProtectedBranchUserRestrictions: jest.fn(),
      listPublic: jest.fn(),
      listReleases: jest.fn(),
      listStatusesForRef: jest.fn(),
      listTags: jest.fn(),
      listTeams: jest.fn(),
      listTopics: jest.fn(),
      merge: jest.fn(),
      pingHook: jest.fn(),
      removeBranchProtection: jest.fn(),
      removeCollaborator: jest.fn(),
      removeDeployKey: jest.fn(),
      removeProtectedBranchAdminEnforcement: jest.fn(),
      removeProtectedBranchPullRequestReviewEnforcement: jest.fn(),
      removeProtectedBranchRequiredSignatures: jest.fn(),
      removeProtectedBranchRequiredStatusChecks: jest.fn(),
      removeProtectedBranchRequiredStatusChecksContexts: jest.fn(),
      removeProtectedBranchRestrictions: jest.fn(),
      removeProtectedBranchTeamRestrictions: jest.fn(),
      removeProtectedBranchUserRestrictions: jest.fn(),
      replaceProtectedBranchRequiredStatusChecksContexts: jest.fn(),
      replaceProtectedBranchTeamRestrictions: jest.fn(),
      replaceProtectedBranchUserRestrictions: jest.fn(),
      replaceTopics: jest.fn(),
      requestPageBuild: jest.fn(),
      retrieveCommunityProfileMetrics: jest.fn(),
      reviewUserPermissionLevel: jest.fn(),
      testHook: jest.fn(),
      testPushHook: jest.fn(),
      transfer: jest.fn(),
      update: jest.fn(),
      updateBranchProtection: jest.fn(),
      updateCommitComment: jest.fn(),
      updateFile: jest.fn(),
      updateHook: jest.fn(),
      updateInformationAboutPagesSite: jest.fn(),
      updateInvitation: jest.fn(),
      updateInvite: jest.fn(),
      updateProtectedBranchPullRequestReviewEnforcement: jest.fn(),
      updateProtectedBranchRequiredStatusChecks: jest.fn(),
      updateRelease: jest.fn(),
      updateReleaseAsset: jest.fn(),
      uploadAsset: jest.fn(),
      uploadReleaseAsset: jest.fn() },
  search: {
      code: jest.fn(),
      commits: jest.fn(),
      issues: jest.fn((opts) => Promise.resolve({data: {total_count: 1}})),
      labels: jest.fn(),
      repos: jest.fn(),
      topics: jest.fn(),
      users: jest.fn() },
  teams: {},
  users: {}
};
