import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateApplicationDto, UpdateApplicationDto } from './application.dto';
import { ApplicationService } from './application.service';

@Controller('application')
export class ApplicationController {
  constructor(private readonly applicationService: ApplicationService) {}

  @Post()
  async create(@Body() dto: CreateApplicationDto) {
    console.log(dto);
    return await this.applicationService.create(dto);
  }

  @Get()
  async getAll() {
    return await this.applicationService.getAll();
  }

  @Get(':id')
  async getId(@Param('id') id: string) {
    return await this.applicationService.getId(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateApplicationDto) {
    return await this.applicationService.update({ id, dto });
  }

  @Delete(':id')
  async deleteId(@Param('id') id: string) {
    return await this.applicationService.deleteId(id);
  }
}
