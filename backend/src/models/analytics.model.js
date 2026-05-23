class Analytics {
    constructor(data = {}) {
        this.totalIssues = data.totalIssues || 0;
        this.resolvedIssues = data.resolvedIssues || 0;
        this.pendingIssues = data.pendingIssues || 0;
        this.averageResolutionHours = data.averageResolutionHours || 0;
    }

    // Static helper to generate global analytics from an array of issue instances
    static computeFromIssues(issues) {
        const analytics = new Analytics();
        let totalResolutionTime = 0;
        let resolvedCountWithTime = 0;

        issues.forEach(issue => {
            analytics.totalIssues += 1;

            if (issue.isResolved) {
                analytics.resolvedIssues += 1;
                if (issue.createdAt && issue.resolvedAt) {
                    const created = new Date(issue.createdAt);
                    const resolved = new Date(issue.resolvedAt);
                    const hours = (resolved - created) / (1000 * 60 * 60);
                    totalResolutionTime += hours;
                    resolvedCountWithTime += 1;
                }
            } else {
                analytics.pendingIssues += 1;
            }
        });

        if (resolvedCountWithTime > 0) {
            analytics.averageResolutionHours = Number((totalResolutionTime / resolvedCountWithTime).toFixed(2));
        }

        return analytics;
    }

    toJSON() {
        return {
            totalIssues: this.totalIssues,
            resolvedIssues: this.resolvedIssues,
            pendingIssues: this.pendingIssues,
            averageResolutionHours: this.averageResolutionHours
        };
    }
}

module.exports = Analytics;
