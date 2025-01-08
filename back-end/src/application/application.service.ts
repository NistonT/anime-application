import { Injectable } from '@nestjs/common';
import { Application } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateApplicationDto } from './application.dto';
import { IUpdatedApplication } from './application.type';

@Injectable()
export class ApplicationService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateApplicationDto): Promise<Application> {
    console.log('DTO in service:', dto);
    return await this.prisma.application.create({
      include: {
        comments: true,
      },
      data: dto,
    });
  }

  async getAll(): Promise<Application[]> {
    return await this.prisma.application.findMany({
      include: {
        comments: true,
      },
    });
  }

  async getId(id: string): Promise<Application> {
    return await this.prisma.application.findUnique({
      include: {
        comments: true,
      },
      where: {
        id,
      },
    });
  }

  async update({ id, dto }: IUpdatedApplication): Promise<Application> {
    return await this.prisma.application.update({
      where: {
        id,
      },
      data: dto,
    });
  }

  async deleteId(id: string): Promise<Application> {
    return await this.prisma.application.delete({
      where: {
        id,
      },
    });
  }
}
