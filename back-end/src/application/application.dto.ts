import { IsString } from 'class-validator';

export class CreateApplicationDto {
  @IsString({
    message: 'Now string!',
  })
  username: string;

  @IsString({
    message: 'Not string!',
  })
  avatar: string;

  @IsString({
    message: 'Not string!',
  })
  title: string;

  @IsString({
    message: 'Not string!',
  })
  text: string;
}

export class UpdateApplicationDto {
  @IsString({
    message: 'Now string!',
  })
  username?: string;

  @IsString({
    message: 'Not string!',
  })
  avatar?: string;

  @IsString({
    message: 'Not string!',
  })
  title?: string;

  @IsString({
    message: 'Not string!',
  })
  text?: string;
}
