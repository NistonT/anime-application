import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreatedCommentDto, UpdatedCommentDto } from './comment.dto';
import { CommentService } from './comment.service';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post(':id')
  async addComment(
    @Param('id') app_id: string,
    @Body() dto: CreatedCommentDto,
  ) {
    return await this.commentService.addComment({ app_id, dto });
  }

  @Get()
  async getAllComments() {
    return await this.commentService.getAllComments();
  }

  @Put(':application_id/:comment_id')
  async updateComment(
    @Param('application_id') application_id: string,
    @Param('comment_id') comment_id: string,
    @Body() dto: UpdatedCommentDto,
  ) {
    return await this.commentService.updatedComment({
      application_id,
      comment_id,
      dto,
    });
  }

  @Delete(':application_id/:comment_id')
  async deleteComment(
    @Param('application_id') application_id: string,
    @Param('comment_id') comment_id: string,
  ) {
    return await this.commentService.deleteComment({
      application_id,
      comment_id,
    });
  }
}
