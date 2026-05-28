import 'package:freezed_annotation/freezed_annotation.dart';

part 'authority.freezed.dart';
part 'authority.g.dart';

@freezed
class Authority with _$Authority {
  const factory Authority({
    @JsonKey(name: 'authorityId') required String id,
    required String name,
    @JsonKey(name: 'contactEmail') String? contactEmail,
  }) = _Authority;

  factory Authority.fromJson(Map<String, dynamic> json) =>
      _$AuthorityFromJson(json);
}
