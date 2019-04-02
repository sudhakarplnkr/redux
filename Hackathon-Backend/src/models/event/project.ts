import { prop, Typegoose } from 'typegoose';

export class Project extends Typegoose {
  @prop()
  public ProjectName: string;
}

export const ProjectModel = new Project().getModelForClass(Project);
