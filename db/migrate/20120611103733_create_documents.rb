class CreateDocuments < ActiveRecord::Migration
  def change
    create_table :documents do |t|
      t.string :name
      t.string :status
      t.string :deadline
      t.integer :user_id

      t.timestamps
    end
  end
end
