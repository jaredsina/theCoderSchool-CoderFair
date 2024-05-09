import { User } from "./Users";
import { Project } from "./Projects";
import { Coderfairs } from "./Coderfair";
import { Judges } from "./Judges";
import { Roles } from "./Roles";
import { User_Roles } from "./User_Roles";
import { Questions } from "./Questions";
import { Grades } from "./Grades";
import { Questions_Grades } from "./Question_Grades";

User.hasMany(Project, {
  sourceKey: "id",
  foreignKey: "student_id",
  as: "projects",
});

Coderfairs.hasMany(Project, {
  sourceKey: "id",
  foreignKey: "coderfair_id",
  as: "projects",
});

User.belongsToMany(Coderfairs, {
  through: Judges,
  sourceKey: "id",
  foreignKey: "user_id",
});
Coderfairs.belongsToMany(User, {
  through: Judges,
  sourceKey: "id",
  foreignKey: "coderfair_id",
});

User.belongsToMany(Roles, {
  through: User_Roles,
  sourceKey: "id",
  foreignKey: "user_id",
});

Roles.belongsToMany(User, {
  through: User_Roles,
  sourceKey: "id",
  foreignKey: "role_id",
});

Project.hasMany(Grades, {
  sourceKey: "id",
  foreignKey: "project_id",
  as: "grades",
});

Judges.hasMany(Grades, {
  sourceKey: "id",
  foreignKey: "judge_id",
  as: "grades",
});

Grades.belongsToMany(Questions, {
  through: Questions_Grades,
  sourceKey: "id",
  foreignKey: "grade_id",
});

Questions.belongsToMany(Grades, {
  through: Questions_Grades,
  sourceKey: "id",
  foreignKey: "question_id",
});

export {
  User,
  Project,
  Coderfairs,
  Judges,
  Roles,
  User_Roles,
  Questions,
  Questions_Grades,
  Grades,
};
