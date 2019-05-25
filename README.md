# messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
|group_id|integer|null: false|
|user_id|integer|null: false|

## Association
- belongs_to :user
- belongs_to :group


# usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false|
|email|strings|unique: true|

## Association
- has_many :messages
- has_many :groups
- has_many :users, through: :groups


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
|group_name|strings|null: false|

## Association
- has_many :groups, through: :users
- has_many :messages



