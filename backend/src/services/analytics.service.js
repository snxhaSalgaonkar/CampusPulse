const BaseService = require('./base.service');

class AnalyticsService extends BaseService {
    async generateDashboardMetrics(issueRepository) {
        const allIssues = await issueRepository.findAll();
        return {
            totalIssues: allIssues.length,
            resolutionRate: this.calculateResolutionRate(allIssues),
            averageResolutionTimeHours: this.calculateAverageResolutionTime(allIssues)
        };
    }

    calculateResolutionRate(issues) {
        if (!issues || issues.length === 0) return 0;
        const resolvedCount = issues.filter(i => i.status === 'resolved').length;
        return parseFloat(((resolvedCount / issues.length) * 100).toFixed(2));
    }

    calculateAverageResolutionTime(issues) {
        const resolvedIssues = issues.filter(i => i.status === 'resolved' && i.resolvedAt && i.createdAt);
        if (resolvedIssues.length === 0) return 0;

        const totalHours = resolvedIssues.reduce((acc, issue) => {
            const hours = Math.abs(new Date(issue.resolvedAt) - new Date(issue.createdAt)) / 36e5;
            return acc + hours;
        }, 0);

        return parseFloat((totalHours / resolvedIssues.length).toFixed(2));
    }

    async generateCategoryAnalytics(issueRepository) {
        const issues = await issueRepository.findAll();
        const categoryTrends = {};

        issues.forEach(issue => {
            const cat = issue.categoryId;
            categoryTrends[cat] = (categoryTrends[cat] || 0) + 1;
        });

        return categoryTrends;
    }
}

module.exports = AnalyticsService;
