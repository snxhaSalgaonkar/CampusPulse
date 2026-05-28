// GENERATED CODE - DO NOT MODIFY BY HAND
// coverage:ignore-file
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'authority.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

// dart format off
T _$identity<T>(T value) => value;

/// @nodoc
mixin _$Authority {

@JsonKey(name: 'authorityId') String get id; String get name;@JsonKey(name: 'contactEmail') String? get contactEmail;
/// Create a copy of Authority
/// with the given fields replaced by the non-null parameter values.
@JsonKey(includeFromJson: false, includeToJson: false)
@pragma('vm:prefer-inline')
$AuthorityCopyWith<Authority> get copyWith => _$AuthorityCopyWithImpl<Authority>(this as Authority, _$identity);

  /// Serializes this Authority to a JSON map.
  Map<String, dynamic> toJson();


@override
bool operator ==(Object other) {
  return identical(this, other) || (other.runtimeType == runtimeType&&other is Authority&&(identical(other.id, id) || other.id == id)&&(identical(other.name, name) || other.name == name)&&(identical(other.contactEmail, contactEmail) || other.contactEmail == contactEmail));
}

@JsonKey(includeFromJson: false, includeToJson: false)
@override
int get hashCode => Object.hash(runtimeType,id,name,contactEmail);

@override
String toString() {
  return 'Authority(id: $id, name: $name, contactEmail: $contactEmail)';
}


}

/// @nodoc
abstract mixin class $AuthorityCopyWith<$Res>  {
  factory $AuthorityCopyWith(Authority value, $Res Function(Authority) _then) = _$AuthorityCopyWithImpl;
@useResult
$Res call({
@JsonKey(name: 'authorityId') String id, String name,@JsonKey(name: 'contactEmail') String? contactEmail
});




}
/// @nodoc
class _$AuthorityCopyWithImpl<$Res>
    implements $AuthorityCopyWith<$Res> {
  _$AuthorityCopyWithImpl(this._self, this._then);

  final Authority _self;
  final $Res Function(Authority) _then;

/// Create a copy of Authority
/// with the given fields replaced by the non-null parameter values.
@pragma('vm:prefer-inline') @override $Res call({Object? id = null,Object? name = null,Object? contactEmail = freezed,}) {
  return _then(_self.copyWith(
id: null == id ? _self.id : id // ignore: cast_nullable_to_non_nullable
as String,name: null == name ? _self.name : name // ignore: cast_nullable_to_non_nullable
as String,contactEmail: freezed == contactEmail ? _self.contactEmail : contactEmail // ignore: cast_nullable_to_non_nullable
as String?,
  ));
}

}


/// Adds pattern-matching-related methods to [Authority].
extension AuthorityPatterns on Authority {
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

@optionalTypeArgs TResult maybeMap<TResult extends Object?>(TResult Function( _Authority value)?  $default,{required TResult orElse(),}){
final _that = this;
switch (_that) {
case _Authority() when $default != null:
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

@optionalTypeArgs TResult map<TResult extends Object?>(TResult Function( _Authority value)  $default,){
final _that = this;
switch (_that) {
case _Authority():
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

@optionalTypeArgs TResult? mapOrNull<TResult extends Object?>(TResult? Function( _Authority value)?  $default,){
final _that = this;
switch (_that) {
case _Authority() when $default != null:
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

@optionalTypeArgs TResult maybeWhen<TResult extends Object?>(TResult Function(@JsonKey(name: 'authorityId')  String id,  String name, @JsonKey(name: 'contactEmail')  String? contactEmail)?  $default,{required TResult orElse(),}) {final _that = this;
switch (_that) {
case _Authority() when $default != null:
return $default(_that.id,_that.name,_that.contactEmail);case _:
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

@optionalTypeArgs TResult when<TResult extends Object?>(TResult Function(@JsonKey(name: 'authorityId')  String id,  String name, @JsonKey(name: 'contactEmail')  String? contactEmail)  $default,) {final _that = this;
switch (_that) {
case _Authority():
return $default(_that.id,_that.name,_that.contactEmail);case _:
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

@optionalTypeArgs TResult? whenOrNull<TResult extends Object?>(TResult? Function(@JsonKey(name: 'authorityId')  String id,  String name, @JsonKey(name: 'contactEmail')  String? contactEmail)?  $default,) {final _that = this;
switch (_that) {
case _Authority() when $default != null:
return $default(_that.id,_that.name,_that.contactEmail);case _:
  return null;

}
}

}

/// @nodoc
@JsonSerializable()

class _Authority implements Authority {
  const _Authority({@JsonKey(name: 'authorityId') required this.id, required this.name, @JsonKey(name: 'contactEmail') this.contactEmail});
  factory _Authority.fromJson(Map<String, dynamic> json) => _$AuthorityFromJson(json);

@override@JsonKey(name: 'authorityId') final  String id;
@override final  String name;
@override@JsonKey(name: 'contactEmail') final  String? contactEmail;

/// Create a copy of Authority
/// with the given fields replaced by the non-null parameter values.
@override @JsonKey(includeFromJson: false, includeToJson: false)
@pragma('vm:prefer-inline')
_$AuthorityCopyWith<_Authority> get copyWith => __$AuthorityCopyWithImpl<_Authority>(this, _$identity);

@override
Map<String, dynamic> toJson() {
  return _$AuthorityToJson(this, );
}

@override
bool operator ==(Object other) {
  return identical(this, other) || (other.runtimeType == runtimeType&&other is _Authority&&(identical(other.id, id) || other.id == id)&&(identical(other.name, name) || other.name == name)&&(identical(other.contactEmail, contactEmail) || other.contactEmail == contactEmail));
}

@JsonKey(includeFromJson: false, includeToJson: false)
@override
int get hashCode => Object.hash(runtimeType,id,name,contactEmail);

@override
String toString() {
  return 'Authority(id: $id, name: $name, contactEmail: $contactEmail)';
}


}

/// @nodoc
abstract mixin class _$AuthorityCopyWith<$Res> implements $AuthorityCopyWith<$Res> {
  factory _$AuthorityCopyWith(_Authority value, $Res Function(_Authority) _then) = __$AuthorityCopyWithImpl;
@override @useResult
$Res call({
@JsonKey(name: 'authorityId') String id, String name,@JsonKey(name: 'contactEmail') String? contactEmail
});




}
/// @nodoc
class __$AuthorityCopyWithImpl<$Res>
    implements _$AuthorityCopyWith<$Res> {
  __$AuthorityCopyWithImpl(this._self, this._then);

  final _Authority _self;
  final $Res Function(_Authority) _then;

/// Create a copy of Authority
/// with the given fields replaced by the non-null parameter values.
@override @pragma('vm:prefer-inline') $Res call({Object? id = null,Object? name = null,Object? contactEmail = freezed,}) {
  return _then(_Authority(
id: null == id ? _self.id : id // ignore: cast_nullable_to_non_nullable
as String,name: null == name ? _self.name : name // ignore: cast_nullable_to_non_nullable
as String,contactEmail: freezed == contactEmail ? _self.contactEmail : contactEmail // ignore: cast_nullable_to_non_nullable
as String?,
  ));
}


}

// dart format on
