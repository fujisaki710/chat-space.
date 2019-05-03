# messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body||text|||
|image||string|||
|group_id||integer||null: false|
|user_id||integer||null: false|

## Association
- belongs_to :user


# usersテーブル

|Column|Type|Options|
|------|----|-------|
|name||strings||null: false|
|user||strings||unique: true|
|email||strings||unique: true|

## Association
- has_many :messages
- has_many :groups


# membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

## Association
- belongs_to :group
- belongs_to :user


# groupsテーブル

|Column|Type|Options|
|------|----|-------|
|group_name||strings||null: false|

## Association
- has_many :users
- has_many :messages



