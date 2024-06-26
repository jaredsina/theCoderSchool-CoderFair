export type CoderFair = {
  fairDate: Date;
  name: string;
  description?: string;
};

export interface newUser {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  passwordHash: string;
}

export type DecodedToken = {
  username: string;
  id: number;
  iat: number;
};

export type newProject = {
  name: string;
  description?: string;
  presentation_video_url?: string;
  code_access_link: string;
  coding_language: string;
  project_username: string;
  project_password: string;
  notes?: string;
  coderfair_id: number;
};

export type newLogin = {
  username: string;
  password: string;
};

export type newRole = {
  name: string;
};

export type newQuestion = {
  question: string;
};

export type newGrade = {
  judge_id: number;
  project_id: number;
  overall_comments?: string;
};

export type newQuestionGrade = {
  question_id: number;
  score: number;
  comments?: string;
};
