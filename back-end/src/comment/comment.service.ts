import { Injectable } from '@nestjs/common';
import { Comment } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { IAddComment, IDeletedComment, IUpdatedComment } from './comment.type';

@Injectable()
export class CommentService {
  constructor(private readonly prisma: PrismaService) {}

  async addComment({ app_id, dto }: IAddComment): Promise<Comment> {
    const application = await this.prisma.application.findUnique({
      where: {
        id: app_id,
      },
    });

    return await this.prisma.comment.create({
      data: {
        username: dto.username,
        avatar: dto.avatar,
        text: dto.text,
        comment_id: application.id,
      },
    });
  }

  async getAllComments(): Promise<Comment[]> {
    return await this.prisma.comment.findMany();
  }

  async updatedComment({
    application_id,
    comment_id,
    dto,
  }: IUpdatedComment): Promise<Comment> {
    const application = await this.prisma.application.findUnique({
      where: {
        id: application_id,
      },
    });

    return await this.prisma.comment.update({
      where: {
        id: comment_id,
      },
      data: {
        username: dto.username,
        avatar: dto.avatar,
        text: dto.text,
        comment_id: application.id,
      },
    });
  }

  async deleteComment({
    application_id,
    comment_id,
  }: IDeletedComment): Promise<Comment> {
    const application = await this.prisma.application.findUnique({
      where: {
        id: application_id,
      },
    });

    return await this.prisma.comment.delete({
      where: {
        id: comment_id,
      },
    });
  }
}
