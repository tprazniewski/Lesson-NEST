import { Resolver, Query } from '@nestjs/graphql';
import { LessonType } from './lesso.type';

@Resolver((of) => LessonType)
export class LesonResolver {
  @Query((returns) => LessonType)
  lesson() {
    return {
      id: 'randomidString',
      name: 'English Class',
      startDate: new Date().toString(),
      endDate: new Date().toString(),
    };
  }
}
