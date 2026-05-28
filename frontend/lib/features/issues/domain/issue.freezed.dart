// GENERATED CODE - DO NOT MODIFY BY HAND
// coverage:ignore-file
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'issue.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

// dart format off
T _$identity<T>(T value) => value;

/// @nodoc
mixin _$Issue {

@JsonKey(name: 'issueId') String get id; String get title; String get description; String get categoryId; IssueStatus get status; Urgency get urgency; Authority? get assignedAuthority; List<String> get imageUrls; UserSummary? get createdBy;@JsonKey(fromJson: _dateTimeFromTimestamp, toJson: _dateTimeToTimestamp) DateTime? get createdAt;
/// Create a copy of Issue
/// with the given fields replaced by the non-null parameter values.
@JsonKey(includeFromJson: false, includeToJson: false)
@pragma('vm:prefer-inline')
$IssueCopyWith<Issue> get copyWith => _$IssueCopyWithImpl<Issue>(this as Issue, _$identity);

  /// Serializes this Issue to a JSON map.
  Map<String, dynamic> toJson();


@override
bool operator ==(Object other) {
  return identical(this, other) || (other.runtimeType == runtimeType&&other is Issue&&(identical(other.id, id) || other.id == id)&&(identical(other.title, title) || other.title == title)&&(identical(other.description, description) || other.description == description)&&(identical(other.categoryId, categoryId) || other.categoryId == categoryId)&&(identical(other.status, status) || other.status == status)&&(identical(other.urgency, urgency) || other.urgency == urgency)&&(identical(other.assignedAuthority, assignedAuthority) || other.assignedAuthority == assignedAuthority)&&const DeepCollectionEquality().equals(other.imageUrls, imageUrls)&&(identical(other.createdBy, createdBy) || other.createdBy == createdBy)&&(identical(other.createdAt, createdAt) || other.createdAt == createdAt));
}

@JsonKey(includeFromJson: false, includeToJson: false)
@override
int get hashCode => Object.hash(runtimeType,id,title,description,categoryId,status,urgency,assignedAuthority,const DeepCollectionEquality().hash(imageUrls),createdBy,createdAt);

@override
String toString() {
  return 'Issue(id: $id, title: $title, description: $description, categoryId: $categoryId, status: $status, urgency: $urgency, assignedAuthority: $assignedAuthority, imageUrls: $imageUrls, createdBy: $createdBy, createdAt: $createdAt)';
}


}

/// @nodoc
abstract mixin class $IssueCopyWith<$Res>  {
  factory $IssueCopyWith(Issue value, $Res Function(Issue) _then) = _$IssueCopyWithImpl;
@useResult
$Res call({
@JsonKey(name: 'issueId') String id, String title, String description, String categoryId, IssueStatus status, Urgency urgency, Authority? assignedAuthority, List<String> imageUrls, UserSummary? createdBy,@JsonKey(fromJson: _dateTimeFromTimestamp, toJson: _dateTimeToTimestamp) DateTime? createdAt
});


$AuthorityCopyWith<$Res>? get assignedAuthority;$UserSummaryCopyWith<$Res>? get createdBy;

}
/// @nodoc
class _$IssueCopyWithImpl<$Res>
    implements $IssueCopyWith<$Res> {
  _$IssueCopyWithImpl(this._self, this._then);

  final Issue _self;
  final $Res Function(Issue) _then;

/// Create a copy of Issue
/// with the given fields replaced by the non-null parameter values.
@pragma('vm:prefer-inline') @override $Res call({Object? id = null,Object? title = null,Object? description = null,Object? categoryId = null,Object? status = null,Object? urgency = null,Object? assignedAuthority = freezed,Object? imageUrls = null,Object? createdBy = freezed,Object? createdAt = freezed,}) {
  return _then(_self.copyWith(
id: null == id ? _self.id : id // ignore: cast_nullable_to_non_nullable
as String,title: null == title ? _self.title : title // ignore: cast_nullable_to_non_nullable
as String,description: null == description ? _self.description : description // ignore: cast_nullable_to_non_nullable
as String,categoryId: null == categoryId ? _self.categoryId : categoryId // ignore: cast_nullable_to_non_nullable
as String,status: null == status ? _self.status : status // ignore: cast_nullable_to_non_nullable
as IssueStatus,urgency: null == urgency ? _self.urgency : urgency // ignore: cast_nullable_to_non_nullable
as Urgency,assignedAuthority: freezed == assignedAuthority ? _self.assignedAuthority : assignedAuthority // ignore: cast_nullable_to_non_nullable
as Authority?,imageUrls: null == imageUrls ? _self.imageUrls : imageUrls // ignore: cast_nullable_to_non_nullable
as List<String>,createdBy: freezed == createdBy ? _self.createdBy : createdBy // ignore: cast_nullable_to_non_nullable
as UserSummary?,createdAt: freezed == createdAt ? _self.createdAt : createdAt // ignore: cast_nullable_to_non_nullable
as DateTime?,
  ));
}
/// Create a copy of Issue
/// with the given fields replaced by the non-null parameter values.
@override
@pragma('vm:prefer-inline')
$AuthorityCopyWith<$Res>? get assignedAuthority {
    if (_self.assignedAuthority == null) {
    return null;
  }

  return $AuthorityCopyWith<$Res>(_self.assignedAuthority!, (value) {
    return _then(_self.copyWith(assignedAuthority: value));
  });
}/// Create a copy of Issue
/// with the given fields replaced by the non-null parameter values.
@override
@pragma('vm:prefer-inline')
$UserSummaryCopyWith<$Res>? get createdBy {
    if (_self.createdBy == null) {
    return null;
  }

  return $UserSummaryCopyWith<$Res>(_self.createdBy!, (value) {
    return _then(_self.copyWith(createdBy: value));
  });
}
}


/// Adds pattern-matching-related methods to [Issue].
extension IssuePatterns on Issue {
/// A variant of `map` that fallback to returning `orElse`.
///
/// It is equivalent to doing:
/// ```dart
/// switch (sealedClass) {
///   case final Subclass value:
///     return ...;
///   case _:
///     return orElse();
/// }
/// ```

@optionalTypeArgs TResult maybeMap<TResult extends Object?>(TResult Function( _Issue value)?  $default,{required TResult orElse(),}){
final _that = this;
switch (_that) {
case _Issue() when $default != null:
return $default(_that);case _:
  return orElse();

}
}
/// A `switch`-like method, using callbacks.
///
/// Callbacks receives the raw object, upcasted.
/// It is equivalent to doing:
/// ```dart
/// switch (sealedClass) {
///   case final Subclass value:
///     return ...;
///   case final Subclass2 value:
///     return ...;
/// }
/// ```

@optionalTypeArgs TResult map<TResult extends Object?>(TResult Function( _Issue value)  $default,){
final _that = this;
switch (_that) {
case _Issue():
return $default(_that);case _:
  throw StateError('Unexpected subclass');

}
}
/// A variant of `map` that fallback to returning `null`.
///
/// It is equivalent to doing:
/// ```dart
/// switch (sealedClass) {
///   case final Subclass value:
///     return ...;
///   case _:
///     return null;
/// }
/// ```

@optionalTypeArgs TResult? mapOrNull<TResult extends Object?>(TResult? Function( _Issue value)?  $default,){
final _that = this;
switch (_that) {
case _Issue() when $default != null:
return $default(_that);case _:
  return null;

}
}
/// A variant of `when` that fallback to an `orElse` callback.
///
/// It is equivalent to doing:
/// ```dart
/// switch (sealedClass) {
///   case Subclass(:final field):
///     return ...;
///   case _:
///     return orElse();
/// }
/// ```

@optionalTypeArgs TResult maybeWhen<TResult extends Object?>(TResult Function(@JsonKey(name: 'issueId')  String id,  String title,  String description,  String categoryId,  IssueStatus status,  Urgency urgency,  Authority? assignedAuthority,  List<String> imageUrls,  UserSummary? createdBy, @JsonKey(fromJson: _dateTimeFromTimestamp, toJson: _dateTimeToTimestamp)  DateTime? createdAt)?  $default,{required TResult orElse(),}) {final _that = this;
switch (_that) {
case _Issue() when $default != null:
return $default(_that.id,_that.title,_that.description,_that.categoryId,_that.status,_that.urgency,_that.assignedAuthority,_that.imageUrls,_that.createdBy,_that.createdAt);case _:
  return orElse();

}
}
/// A `switch`-like method, using callbacks.
///
/// As opposed to `map`, this offers destructuring.
/// It is equivalent to doing:
/// ```dart
/// switch (sealedClass) {
///   case Subclass(:final field):
///     return ...;
///   case Subclass2(:final field2):
///     return ...;
/// }
/// ```

@optionalTypeArgs TResult when<TResult extends Object?>(TResult Function(@JsonKey(name: 'issueId')  String id,  String title,  String description,  String categoryId,  IssueStatus status,  Urgency urgency,  Authority? assignedAuthority,  List<String> imageUrls,  UserSummary? createdBy, @JsonKey(fromJson: _dateTimeFromTimestamp, toJson: _dateTimeToTimestamp)  DateTime? createdAt)  $default,) {final _that = this;
switch (_that) {
case _Issue():
return $default(_that.id,_that.title,_that.description,_that.categoryId,_that.status,_that.urgency,_that.assignedAuthority,_that.imageUrls,_that.createdBy,_that.createdAt);case _:
  throw StateError('Unexpected subclass');

}
}
/// A variant of `when` that fallback to returning `null`
///
/// It is equivalent to doing:
/// ```dart
/// switch (sealedClass) {
///   case Subclass(:final field):
///     return ...;
///   case _:
///     return null;
/// }
/// ```

@optionalTypeArgs TResult? whenOrNull<TResult extends Object?>(TResult? Function(@JsonKey(name: 'issueId')  String id,  String title,  String description,  String categoryId,  IssueStatus status,  Urgency urgency,  Authority? assignedAuthority,  List<String> imageUrls,  UserSummary? createdBy, @JsonKey(fromJson: _dateTimeFromTimestamp, toJson: _dateTimeToTimestamp)  DateTime? createdAt)?  $default,) {final _that = this;
switch (_that) {
case _Issue() when $default != null:
return $default(_that.id,_that.title,_that.description,_that.categoryId,_that.status,_that.urgency,_that.assignedAuthority,_that.imageUrls,_that.createdBy,_that.createdAt);case _:
  return null;

}
}

}

/// @nodoc
@JsonSerializable()

class _Issue implements Issue {
  const _Issue({@JsonKey(name: 'issueId') required this.id, required this.title, required this.description, required this.categoryId, required this.status, required this.urgency, this.assignedAuthority, final  List<String> imageUrls = const [], this.createdBy, @JsonKey(fromJson: _dateTimeFromTimestamp, toJson: _dateTimeToTimestamp) this.createdAt}): _imageUrls = imageUrls;
  factory _Issue.fromJson(Map<String, dynamic> json) => _$IssueFromJson(json);

@override@JsonKey(name: 'issueId') final  String id;
@override final  String title;
@override final  String description;
@override final  String categoryId;
@override final  IssueStatus status;
@override final  Urgency urgency;
@override final  Authority? assignedAuthority;
 final  List<String> _imageUrls;
@override@JsonKey() List<String> get imageUrls {
  if (_imageUrls is EqualUnmodifiableListView) return _imageUrls;
  // ignore: implicit_dynamic_type
  return EqualUnmodifiableListView(_imageUrls);
}

@override final  UserSummary? createdBy;
@override@JsonKey(fromJson: _dateTimeFromTimestamp, toJson: _dateTimeToTimestamp) final  DateTime? createdAt;

/// Create a copy of Issue
/// with the given fields replaced by the non-null parameter values.
@override @JsonKey(includeFromJson: false, includeToJson: false)
@pragma('vm:prefer-inline')
_$IssueCopyWith<_Issue> get copyWith => __$IssueCopyWithImpl<_Issue>(this, _$identity);

@override
Map<String, dynamic> toJson() {
  return _$IssueToJson(this, );
}

@override
bool operator ==(Object other) {
  return identical(this, other) || (other.runtimeType == runtimeType&&other is _Issue&&(identical(other.id, id) || other.id == id)&&(identical(other.title, title) || other.title == title)&&(identical(other.description, description) || other.description == description)&&(identical(other.categoryId, categoryId) || other.categoryId == categoryId)&&(identical(other.status, status) || other.status == status)&&(identical(other.urgency, urgency) || other.urgency == urgency)&&(identical(other.assignedAuthority, assignedAuthority) || other.assignedAuthority == assignedAuthority)&&const DeepCollectionEquality().equals(other._imageUrls, _imageUrls)&&(identical(other.createdBy, createdBy) || other.createdBy == createdBy)&&(identical(other.createdAt, createdAt) || other.createdAt == createdAt));
}

@JsonKey(includeFromJson: false, includeToJson: false)
@override
int get hashCode => Object.hash(runtimeType,id,title,description,categoryId,status,urgency,assignedAuthority,const DeepCollectionEquality().hash(_imageUrls),createdBy,createdAt);

@override
String toString() {
  return 'Issue(id: $id, title: $title, description: $description, categoryId: $categoryId, status: $status, urgency: $urgency, assignedAuthority: $assignedAuthority, imageUrls: $imageUrls, createdBy: $createdBy, createdAt: $createdAt)';
}


}

/// @nodoc
abstract mixin class _$IssueCopyWith<$Res> implements $IssueCopyWith<$Res> {
  factory _$IssueCopyWith(_Issue value, $Res Function(_Issue) _then) = __$IssueCopyWithImpl;
@override @useResult
$Res call({
@JsonKey(name: 'issueId') String id, String title, String description, String categoryId, IssueStatus status, Urgency urgency, Authority? assignedAuthority, List<String> imageUrls, UserSummary? createdBy,@JsonKey(fromJson: _dateTimeFromTimestamp, toJson: _dateTimeToTimestamp) DateTime? createdAt
});


@override $AuthorityCopyWith<$Res>? get assignedAuthority;@override $UserSummaryCopyWith<$Res>? get createdBy;

}
/// @nodoc
class __$IssueCopyWithImpl<$Res>
    implements _$IssueCopyWith<$Res> {
  __$IssueCopyWithImpl(this._self, this._then);

  final _Issue _self;
  final $Res Function(_Issue) _then;

/// Create a copy of Issue
/// with the given fields replaced by the non-null parameter values.
@override @pragma('vm:prefer-inline') $Res call({Object? id = null,Object? title = null,Object? description = null,Object? categoryId = null,Object? status = null,Object? urgency = null,Object? assignedAuthority = freezed,Object? imageUrls = null,Object? createdBy = freezed,Object? createdAt = freezed,}) {
  return _then(_Issue(
id: null == id ? _self.id : id // ignore: cast_nullable_to_non_nullable
as String,title: null == title ? _self.title : title // ignore: cast_nullable_to_non_nullable
as String,description: null == description ? _self.description : description // ignore: cast_nullable_to_non_nullable
as String,categoryId: null == categoryId ? _self.categoryId : categoryId // ignore: cast_nullable_to_non_nullable
as String,status: null == status ? _self.status : status // ignore: cast_nullable_to_non_nullable
as IssueStatus,urgency: null == urgency ? _self.urgency : urgency // ignore: cast_nullable_to_non_nullable
as Urgency,assignedAuthority: freezed == assignedAuthority ? _self.assignedAuthority : assignedAuthority // ignore: cast_nullable_to_non_nullable
as Authority?,imageUrls: null == imageUrls ? _self._imageUrls : imageUrls // ignore: cast_nullable_to_non_nullable
as List<String>,createdBy: freezed == createdBy ? _self.createdBy : createdBy // ignore: cast_nullable_to_non_nullable
as UserSummary?,createdAt: freezed == createdAt ? _self.createdAt : createdAt // ignore: cast_nullable_to_non_nullable
as DateTime?,
  ));
}

/// Create a copy of Issue
/// with the given fields replaced by the non-null parameter values.
@override
@pragma('vm:prefer-inline')
$AuthorityCopyWith<$Res>? get assignedAuthority {
    if (_self.assignedAuthority == null) {
    return null;
  }

  return $AuthorityCopyWith<$Res>(_self.assignedAuthority!, (value) {
    return _then(_self.copyWith(assignedAuthority: value));
  });
}/// Create a copy of Issue
/// with the given fields replaced by the non-null parameter values.
@override
@pragma('vm:prefer-inline')
$UserSummaryCopyWith<$Res>? get createdBy {
    if (_self.createdBy == null) {
    return null;
  }

  return $UserSummaryCopyWith<$Res>(_self.createdBy!, (value) {
    return _then(_self.copyWith(createdBy: value));
  });
}
}


/// @nodoc
mixin _$UserSummary {

@JsonKey(name: 'userId') String? get id; String? get name; String? get email;
/// Create a copy of UserSummary
/// with the given fields replaced by the non-null parameter values.
@JsonKey(includeFromJson: false, includeToJson: false)
@pragma('vm:prefer-inline')
$UserSummaryCopyWith<UserSummary> get copyWith => _$UserSummaryCopyWithImpl<UserSummary>(this as UserSummary, _$identity);

  /// Serializes this UserSummary to a JSON map.
  Map<String, dynamic> toJson();


@override
bool operator ==(Object other) {
  return identical(this, other) || (other.runtimeType == runtimeType&&other is UserSummary&&(identical(other.id, id) || other.id == id)&&(identical(other.name, name) || other.name == name)&&(identical(other.email, email) || other.email == email));
}

@JsonKey(includeFromJson: false, includeToJson: false)
@override
int get hashCode => Object.hash(runtimeType,id,name,email);

@override
String toString() {
  return 'UserSummary(id: $id, name: $name, email: $email)';
}


}

/// @nodoc
abstract mixin class $UserSummaryCopyWith<$Res>  {
  factory $UserSummaryCopyWith(UserSummary value, $Res Function(UserSummary) _then) = _$UserSummaryCopyWithImpl;
@useResult
$Res call({
@JsonKey(name: 'userId') String? id, String? name, String? email
});




}
/// @nodoc
class _$UserSummaryCopyWithImpl<$Res>
    implements $UserSummaryCopyWith<$Res> {
  _$UserSummaryCopyWithImpl(this._self, this._then);

  final UserSummary _self;
  final $Res Function(UserSummary) _then;

/// Create a copy of UserSummary
/// with the given fields replaced by the non-null parameter values.
@pragma('vm:prefer-inline') @override $Res call({Object? id = freezed,Object? name = freezed,Object? email = freezed,}) {
  return _then(_self.copyWith(
id: freezed == id ? _self.id : id // ignore: cast_nullable_to_non_nullable
as String?,name: freezed == name ? _self.name : name // ignore: cast_nullable_to_non_nullable
as String?,email: freezed == email ? _self.email : email // ignore: cast_nullable_to_non_nullable
as String?,
  ));
}

}


/// Adds pattern-matching-related methods to [UserSummary].
extension UserSummaryPatterns on UserSummary {
/// A variant of `map` that fallback to returning `orElse`.
///
/// It is equivalent to doing:
/// ```dart
/// switch (sealedClass) {
///   case final Subclass value:
///     return ...;
///   case _:
///     return orElse();
/// }
/// ```

@optionalTypeArgs TResult maybeMap<TResult extends Object?>(TResult Function( _UserSummary value)?  $default,{required TResult orElse(),}){
final _that = this;
switch (_that) {
case _UserSummary() when $default != null:
return $default(_that);case _:
  return orElse();

}
}
/// A `switch`-like method, using callbacks.
///
/// Callbacks receives the raw object, upcasted.
/// It is equivalent to doing:
/// ```dart
/// switch (sealedClass) {
///   case final Subclass value:
///     return ...;
///   case final Subclass2 value:
///     return ...;
/// }
/// ```

@optionalTypeArgs TResult map<TResult extends Object?>(TResult Function( _UserSummary value)  $default,){
final _that = this;
switch (_that) {
case _UserSummary():
return $default(_that);case _:
  throw StateError('Unexpected subclass');

}
}
/// A variant of `map` that fallback to returning `null`.
///
/// It is equivalent to doing:
/// ```dart
/// switch (sealedClass) {
///   case final Subclass value:
///     return ...;
///   case _:
///     return null;
/// }
/// ```

@optionalTypeArgs TResult? mapOrNull<TResult extends Object?>(TResult? Function( _UserSummary value)?  $default,){
final _that = this;
switch (_that) {
case _UserSummary() when $default != null:
return $default(_that);case _:
  return null;

}
}
/// A variant of `when` that fallback to an `orElse` callback.
///
/// It is equivalent to doing:
/// ```dart
/// switch (sealedClass) {
///   case Subclass(:final field):
///     return ...;
///   case _:
///     return orElse();
/// }
/// ```

@optionalTypeArgs TResult maybeWhen<TResult extends Object?>(TResult Function(@JsonKey(name: 'userId')  String? id,  String? name,  String? email)?  $default,{required TResult orElse(),}) {final _that = this;
switch (_that) {
case _UserSummary() when $default != null:
return $default(_that.id,_that.name,_that.email);case _:
  return orElse();

}
}
/// A `switch`-like method, using callbacks.
///
/// As opposed to `map`, this offers destructuring.
/// It is equivalent to doing:
/// ```dart
/// switch (sealedClass) {
///   case Subclass(:final field):
///     return ...;
///   case Subclass2(:final field2):
///     return ...;
/// }
/// ```

@optionalTypeArgs TResult when<TResult extends Object?>(TResult Function(@JsonKey(name: 'userId')  String? id,  String? name,  String? email)  $default,) {final _that = this;
switch (_that) {
case _UserSummary():
return $default(_that.id,_that.name,_that.email);case _:
  throw StateError('Unexpected subclass');

}
}
/// A variant of `when` that fallback to returning `null`
///
/// It is equivalent to doing:
/// ```dart
/// switch (sealedClass) {
///   case Subclass(:final field):
///     return ...;
///   case _:
///     return null;
/// }
/// ```

@optionalTypeArgs TResult? whenOrNull<TResult extends Object?>(TResult? Function(@JsonKey(name: 'userId')  String? id,  String? name,  String? email)?  $default,) {final _that = this;
switch (_that) {
case _UserSummary() when $default != null:
return $default(_that.id,_that.name,_that.email);case _:
  return null;

}
}

}

/// @nodoc
@JsonSerializable()

class _UserSummary implements UserSummary {
  const _UserSummary({@JsonKey(name: 'userId') this.id, this.name, this.email});
  factory _UserSummary.fromJson(Map<String, dynamic> json) => _$UserSummaryFromJson(json);

@override@JsonKey(name: 'userId') final  String? id;
@override final  String? name;
@override final  String? email;

/// Create a copy of UserSummary
/// with the given fields replaced by the non-null parameter values.
@override @JsonKey(includeFromJson: false, includeToJson: false)
@pragma('vm:prefer-inline')
_$UserSummaryCopyWith<_UserSummary> get copyWith => __$UserSummaryCopyWithImpl<_UserSummary>(this, _$identity);

@override
Map<String, dynamic> toJson() {
  return _$UserSummaryToJson(this, );
}

@override
bool operator ==(Object other) {
  return identical(this, other) || (other.runtimeType == runtimeType&&other is _UserSummary&&(identical(other.id, id) || other.id == id)&&(identical(other.name, name) || other.name == name)&&(identical(other.email, email) || other.email == email));
}

@JsonKey(includeFromJson: false, includeToJson: false)
@override
int get hashCode => Object.hash(runtimeType,id,name,email);

@override
String toString() {
  return 'UserSummary(id: $id, name: $name, email: $email)';
}


}

/// @nodoc
abstract mixin class _$UserSummaryCopyWith<$Res> implements $UserSummaryCopyWith<$Res> {
  factory _$UserSummaryCopyWith(_UserSummary value, $Res Function(_UserSummary) _then) = __$UserSummaryCopyWithImpl;
@override @useResult
$Res call({
@JsonKey(name: 'userId') String? id, String? name, String? email
});




}
/// @nodoc
class __$UserSummaryCopyWithImpl<$Res>
    implements _$UserSummaryCopyWith<$Res> {
  __$UserSummaryCopyWithImpl(this._self, this._then);

  final _UserSummary _self;
  final $Res Function(_UserSummary) _then;

/// Create a copy of UserSummary
/// with the given fields replaced by the non-null parameter values.
@override @pragma('vm:prefer-inline') $Res call({Object? id = freezed,Object? name = freezed,Object? email = freezed,}) {
  return _then(_UserSummary(
id: freezed == id ? _self.id : id // ignore: cast_nullable_to_non_nullable
as String?,name: freezed == name ? _self.name : name // ignore: cast_nullable_to_non_nullable
as String?,email: freezed == email ? _self.email : email // ignore: cast_nullable_to_non_nullable
as String?,
  ));
}


}

// dart format on
