class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.string :body, null: false
      t.references :article, foreign_key: true
      t.references :user, foreign_key: true
      t.string :target

      t.timestamps
    end
  end
end
