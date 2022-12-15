import { Module } from '@nestjs/common';
import { LesonResolver } from './lesson.resolvers';
@Module({
  providers: [LesonResolver],
})
export class LessonModule {}
