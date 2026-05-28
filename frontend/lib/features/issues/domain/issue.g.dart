// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'issue.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_Issue _$IssueFromJson(Map<String, dynamic> json) => _Issue(
  id: json['issueId'] as String,
  title: json['title'] as String,
  description: json['description'] as String,
  categoryId: json['categoryId'] as String,
  status: $enumDecode(_$IssueStatusEnumMap, json['status']),
  urgency: $enumDecode(_$UrgencyEnumMap, json['urgency']),
  assignedAuthority:
      json['assignedAuthority'] == null
          ? null
          : Authority.fromJson(
            json['assignedAuthority'] as Map<String, dynamic>,
          ),
  imageUrls:
      (json['imageUrls'] as List<dynamic>?)?.map((e) => e as String).toList() ??
      const [],
  createdBy:
      json['createdBy'] == null
          ? null
          : UserSummary.fromJson(json['createdBy'] as Map<String, dynamic>),
  createdAt: _dateTimeFromTimestamp(json['createdAt']),
);

Map<String, dynamic> _$IssueToJson(_Issue instance) => <String, dynamic>{
  'issueId': instance.id,
  'title': instance.title,
  'description': instance.description,
  'categoryId': instance.categoryId,
  'status': _$IssueStatusEnumMap[instance.status]!,
  'urgency': _$UrgencyEnumMap[instance.urgency]!,
  'assignedAuthority': instance.assignedAuthority,
  'imageUrls': instance.imageUrls,
  'createdBy': instance.createdBy,
  'createdAt': _dateTimeToTimestamp(instance.createdAt),
};

const _$IssueStatusEnumMap = {
  IssueStatus.reported: 'reported',
  IssueStatus.inProgress: 'in_progress',
  IssueStatus.resolved: 'resolved',
  IssueStatus.rejected: 'rejected',
};

const _$UrgencyEnumMap = {
  Urgency.low: 'low',
  Urgency.medium: 'medium',
  Urgency.high: 'high',
  Urgency.critical: 'critical',
};

_UserSummary _$UserSummaryFromJson(Map<String, dynamic> json) => _UserSummary(
  id: json['userId'] as String?,
  name: json['name'] as String?,
  email: json['email'] as String?,
);

Map<String, dynamic> _$UserSummaryToJson(_UserSummary instance) =>
    <String, dynamic>{
      'userId': instance.id,
      'name': instance.name,
      'email': instance.email,
    };
