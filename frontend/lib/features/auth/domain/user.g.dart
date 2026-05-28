// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'user.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_User _$UserFromJson(Map<String, dynamic> json) => _User(
  id: json['id'] as String,
  name: json['name'] as String,
  email: json['email'] as String,
  role: $enumDecode(_$RoleEnumMap, json['role']),
  profileImage: json['profileImage'] as String?,
  createdAt: _dateTimeFromTimestamp(json['createdAt']),
);

Map<String, dynamic> _$UserToJson(_User instance) => <String, dynamic>{
  'id': instance.id,
  'name': instance.name,
  'email': instance.email,
  'role': _$RoleEnumMap[instance.role]!,
  'profileImage': instance.profileImage,
  'createdAt': _dateTimeToTimestamp(instance.createdAt),
};

const _$RoleEnumMap = {
  Role.user: 'user',
  Role.officer: 'officer',
  Role.admin: 'admin',
};
