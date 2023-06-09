import { Injectable } from '@nestjs/common';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {News} from "./entities/news.entity";
import {Repository} from "typeorm";

@Injectable()
export class NewsService {
  constructor(@InjectRepository(News) private readonly newsRepository: Repository<News>) {
  }

  create(createNewsDto: CreateNewsDto) {
    return this.newsRepository.insert({...createNewsDto});
  }

  findAll() {
    return `This action returns all news`;
  }

  findOne(id: string) {
    return this.newsRepository.findOneBy({ id });
  }

  update(id: string, updateNewsDto: UpdateNewsDto) {
    return `This action updates a #${id} news`;
  }

  remove(id: string) {
    return this.newsRepository.delete({ id });
  }
}
