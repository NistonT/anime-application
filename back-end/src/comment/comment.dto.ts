import { IsString } from 'class-validator';

export class CreatedCommentDto {
  @IsString({
    message: 'Not string!',
  })
  username: string;

  @IsString({
    message: 'Not string!',
  })
  avatar: string;

  @IsString({
    message: 'Not string!',
  })
  text: string;
}

export class UpdatedCommentDto {
  @IsString({
    message: 'Not string!',
  })
  username?: string;

  @IsString({
    message: 'Not string!',
  })
  avatar?: string;

  @IsString({
    message: 'Not string!',
  })
  text?: string;
}
