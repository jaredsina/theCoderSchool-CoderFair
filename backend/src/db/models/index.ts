import { User } from "./Users";
import { Project } from "./Projects";
import { Coderfairs } from "./Coderfair";

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

export { User, Project, Coderfairs };
