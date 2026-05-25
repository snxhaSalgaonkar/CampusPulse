const IssueService = require('./issue.service');
const IssueStatus = require('../utils/constants/issueStatus');
const IssuePriority = require('../utils/constants/issuePriority');
const DuplicateIssueError = require('../utils/errors/business/DuplicateIssueError');

describe('IssueService', () => {
    let issueService;
    let mockIssueRepository;

    beforeEach(() => {
        // Instantiate the service before each test
        issueService = new IssueService();

        // Create a mock repository that simulates database methods
        mockIssueRepository = {
            create: jest.fn(),
            findById: jest.fn(),
            update: jest.fn(),
            findRecentByLocation: jest.fn().mockResolvedValue([]) // By default, no duplicate issues
        };
    });

    test('should successfully create an issue', async () => {
        const issueData = {
            title: 'Broken projector',
            description: 'Projector in room 101 is not turning on',
            locationId: 'room-101',
            categoryId: 'maintenance'
        };

        // Tell the mock repository what to return when create() is called
        mockIssueRepository.create.mockResolvedValue({
            id: 'issue-1',
            ...issueData,
            status: IssueStatus.REPORTED,
            priority: IssuePriority.MEDIUM
        });

        // Call the business logic!
        const result = await issueService.createIssue(issueData, mockIssueRepository);

        // Verify that our business logic called the repository correctly
        expect(mockIssueRepository.findRecentByLocation).toHaveBeenCalledWith('room-101');
        expect(mockIssueRepository.create).toHaveBeenCalled();

        // Verify the business logic set the correct initial state
        expect(result.status).toBe(IssueStatus.REPORTED);
        expect(result.priority).toBe(IssuePriority.MEDIUM);
    });

    test('should throw DuplicateIssueError if similar issue exists', async () => {
        const issueData = {
            title: 'Broken projector',
            description: 'Projector is broken',
            locationId: 'room-101',
            categoryId: 'maintenance'
        };

        // Mock that the database found an issue with the same category at the same location
        mockIssueRepository.findRecentByLocation.mockResolvedValue([
            { id: 'issue-0', categoryId: 'maintenance' }
        ]);

        // Verify our business logic catches it and throws the correct error
        await expect(issueService.createIssue(issueData, mockIssueRepository))
            .rejects
            .toThrow(DuplicateIssueError);
    });

    test('should throw error if title is too short', async () => {
        const issueData = {
            title: 'Brok', // Less than 5 characters
            description: 'Projector in room 101 is not turning on',
            locationId: 'room-101',
            categoryId: 'maintenance'
        };

        await expect(issueService.createIssue(issueData, mockIssueRepository))
            .rejects
            .toThrow('Issue title length must be between 5 and 100 characters.');
    });
});
