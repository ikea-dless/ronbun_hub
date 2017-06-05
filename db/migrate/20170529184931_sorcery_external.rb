class SorceryExternal < ActiveRecord::Migration[5.1]
  def change
    create_table :authentications do |t|
      t.references :user, foreign_key: true
      t.string :provider, :uid, null: false

      t.timestamps
    end

    add_index :authentications, [:provider, :uid]
  end
end
