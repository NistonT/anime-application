import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { ApplicationModule } from './application/application.module';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [ApplicationModule, CommentModule],
  providers: [PrismaService],
})
export class AppModule {}
