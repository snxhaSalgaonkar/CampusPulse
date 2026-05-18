class IssueModel {
  final String id;
  final String title;
  final String description;
  final String category;
  final String locationName;
  final String status;
  final String urgency;
  final List<String> imageUrls;
  final DateTime createdAt;
  final int upvotes;

  IssueModel({
    required this.id,
    required this.title,
    required this.description,
    required this.category,
    required this.locationName,
    required this.status,
    required this.urgency,
    required this.imageUrls,
    required this.createdAt,
    required this.upvotes,
  });
}
