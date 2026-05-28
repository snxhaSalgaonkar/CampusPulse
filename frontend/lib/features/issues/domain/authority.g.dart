// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'authority.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_Authority _$AuthorityFromJson(Map<String, dynamic> json) => _Authority(
  id: json['authorityId'] as String,
  name: json['name'] as String,
  contactEmail: json['contactEmail'] as String?,
);

Map<String, dynamic> _$AuthorityToJson(_Authority instance) =>
    <String, dynamic>{
      'authorityId': instance.id,
      'name': instance.name,
      'contactEmail': instance.contactEmail,
    };
