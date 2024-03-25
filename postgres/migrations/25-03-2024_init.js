export
async function up(queryInterface, { DataTypes }) {
  await queryInterface.createTable('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: { type: DataTypes.STRING, allowNull: false },
    age: { type: DataTypes.SMALLINT, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false }
  });

  await queryInterface.createTable('topics', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    title: { type: DataTypes.STRING, allowNull: false }
  });

  await queryInterface.createTable('questions', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    title: { type: DataTypes.STRING, allowNull: false },
    topic_id: { type: DataTypes.INTEGER, allowNull: false }
  });

  await queryInterface.createTable('answers', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    topic_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    text: { type: DataTypes.STRING, allowNull: false },
    is_correct: { type: DataTypes.BOOLEAN, allowNull: false }
  });

//   ------------- Constraints here ----------------

  await queryInterface.addConstraint('questions', {
    fields: ['topic_id'],
    type: 'foreign key',
    name: 'questions_topics',
    references: { table: 'topics', field: 'id' },
    onDelete: 'set null',
    onUpdate: 'cascade'
  });
  await queryInterface.addConstraint('answers', {
    fields: ['question_id'],
    type: 'foreign key',
    name: 'answers_questions',
    references: { table: 'questions', field: 'id' },
    onDelete: 'cascade',
    onUpdate: 'cascade'
  });

}

export
async function down(queryInterface) {
  await queryInterface.dropTable('topics');
  await queryInterface.dropTable('users');
  await queryInterface.dropTable('questions');
  await queryInterface.dropTable('answers');
}