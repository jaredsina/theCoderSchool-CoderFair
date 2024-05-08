import { User } from "./Users";
import { Project } from "./Projects";
import { Coderfairs } from "./Coderfair";
import { Judges } from "./Judges";
import { Roles } from "./Roles";
import { User_Roles } from "./User_Roles";
User.hasMany(Project, {
  sourceKey: "id",
  foreignKey: "student_id",
  as: "projects",
});

Project.hasMany(Project, {
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

export { User, Project, Coderfairs, Judges, Roles, User_Roles };
