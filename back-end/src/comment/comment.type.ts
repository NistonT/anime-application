import { CreatedCommentDto, UpdatedCommentDto } from './comment.dto';

export interface IAddComment {
  app_id: string;
  dto: CreatedCommentDto;
}

export interface IUpdatedComment {
  application_id?: string;
  comment_id?: string;
  dto?: UpdatedCommentDto;
}

export interface IDeletedComment {
  application_id?: string;
  comment_id?: string;
}
