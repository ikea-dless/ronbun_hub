class CreateArticles < ActiveRecord::Migration[5.1]
  def change
    create_table :articles do |t|
      t.text :content, null: false, comment: "文章が入る"
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
