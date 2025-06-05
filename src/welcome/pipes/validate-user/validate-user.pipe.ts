import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidateUserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {

    const ageNum = parseInt(value.age.toString(), 10)

    if (isNaN(ageNum)) throw new HttpException('Age must be a number', HttpStatus.BAD_REQUEST)

    return { ...value, age: ageNum }
  }
}
