import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../domain/models/issue_model.dart';

final issuesRepositoryProvider = Provider<IssuesRepository>((ref) {
  return IssuesRepository();
});

class IssuesRepository {
  final List<IssueModel> _mockIssues = [
    IssueModel(
      id: '1',
      title: 'Water Leak in CS Building',
      description: 'There is a major pipe burst on the 3rd floor.',
      category: 'Water Leakage',
      locationName: 'CS Building, 3rd Floor',
      status: 'Reported',
      urgency: 'High',
      imageUrls: [],
      createdAt: DateTime.now().subtract(const Duration(hours: 2)),
      upvotes: 5,
    ),
    IssueModel(
      id: '2',
      title: 'Projector not working in Room 102',
      description: 'The projector bulb seems to be fused.',
      category: 'Classroom Equipment',
      locationName: 'Main Block, Room 102',
      status: 'In Progress',
      urgency: 'Medium',
      imageUrls: [],
      createdAt: DateTime.now().subtract(const Duration(days: 1)),
      upvotes: 2,
    ),
  ];

  Future<List<IssueModel>> getIssues() async {
    await Future.delayed(const Duration(seconds: 1));
    return _mockIssues;
  }
}
