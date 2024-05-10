import {
  Association,
  CreationOptional,
  ForeignKey,
  HasManyAddAssociationMixin,
  HasManyCountAssociationsMixin,
  HasManyCreateAssociationMixin,
  HasManyGetAssociationsMixin,
  HasManyHasAssociationMixin,
  HasManyRemoveAssociationMixin,
  HasManySetAssociationsMixin,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";

export class User extends Model<
  InferAttributes<User>,
  InferCreationAttributes<User>
> {
  declare id: CreationOptional<number>;
  declare firstName: string;
  declare lastName: string;
  declare email: string;
  declare username: string;
  declare passwordHash: string;

  // timestamps!
  // createdAt can be undefined during creation
  declare createdAt: CreationOptional<Date>;
  // updatedAt can be undefined during creation
  declare updatedAt: CreationOptional<Date>;

  // Since TS cannot determine model association at compile time
  // we have to declare them here purely virtually
  // these will not exist until `Model.init` was called.
  declare getProjects: HasManyGetAssociationsMixin<Project>; // can return null
  declare addProject: HasManyAddAssociationMixin<Project, number>;
  declare addProjects: HasManyAddAssociationMixin<Project, number>;
  declare setProjects: HasManySetAssociationsMixin<Project, number>;
  declare removeProject: HasManyRemoveAssociationMixin<Project, number>;
  declare removeProjects: HasManyRemoveAssociationMixin<Project, number>;
  declare hasProject: HasManyHasAssociationMixin<Project, number>;
  declare hasProjects: HasManyHasAssociationMixin<Project, number>;
  declare countProjects: HasManyCountAssociationsMixin;
  declare createProject: HasManyCreateAssociationMixin<Project, "student_id">;

  declare static associations: {
    projects: Association<User, Project>;
  };
}

export class Project extends Model<
  InferAttributes<Project>,
  InferCreationAttributes<Project>
> {
  declare id: CreationOptional<number>;
  declare student_id: ForeignKey<User["id"]>;
  declare coderfair_id: ForeignKey<Coderfairs["id"]>;
  declare name: string;
  declare description: string | null;
  declare presentation_video_url: string | null;
  declare code_access_link: CreationOptional<string | null>;
  declare coding_language: string;
  declare project_username: string;
  declare project_password: string;
  declare notes: CreationOptional<string | null>;

  // timestamps!

  // createdAt can be undefined during creation
  declare createdAt: CreationOptional<Date>;
  // updatedAt can be undefined during creation
  declare updatedAt: CreationOptional<Date>;
}

export class Coderfairs extends Model<
  InferAttributes<Coderfairs>,
  InferCreationAttributes<Coderfairs>
> {
  declare id: CreationOptional<number>;
  declare fairDate: Date;
  declare description: string | null;

  // timestamps!
  // createdAt can be undefined during creation
  declare createdAt: CreationOptional<Date>;
  // updatedAt can be undefined during creation
  declare updatedAt: CreationOptional<Date>;
}

export class Judges extends Model<
  InferAttributes<Judges>,
  InferCreationAttributes<Judges>
> {
  declare id: CreationOptional<number>;
  declare user_id: ForeignKey<User["id"]>;
  declare coderfair_id: ForeignKey<Coderfairs["id"]>;
}

export class Roles extends Model<
  InferAttributes<Roles>,
  InferCreationAttributes<Roles>
> {
  declare id: CreationOptional<number>;
  declare name: string;
}

export class User_Roles extends Model<
  InferAttributes<User_Roles>,
  InferCreationAttributes<User_Roles>
> {
  declare id: CreationOptional<number>;
  declare user_id: ForeignKey<User["id"]>;
  declare role_id: ForeignKey<Roles["id"]>;
}

export class Grades extends Model<
  InferAttributes<Grades>,
  InferCreationAttributes<Grades>
> {
  declare id: CreationOptional<number>;
  declare judge_id: ForeignKey<Judges["id"]>;
  declare project_id: ForeignKey<Project["id"]>;
  declare overall_comments: string | null;
}

export class Questions extends Model<
  InferAttributes<Questions>,
  InferCreationAttributes<Questions>
> {
  declare id: CreationOptional<number>;
  declare question: string;
}

export class Questions_Grades extends Model<
  InferAttributes<Questions_Grades>,
  InferCreationAttributes<Questions_Grades>
> {
  declare id: CreationOptional<number>;
  declare grade_id: ForeignKey<Grades["id"]>;
  declare question_id: ForeignKey<Questions["id"]>;
  declare score: number;
  declare comments: string | null;
}
