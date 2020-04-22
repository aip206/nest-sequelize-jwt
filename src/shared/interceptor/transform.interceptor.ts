import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { plainToClass } from 'class-transformer';

export interface Response<T> {
    new(): T;
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<Partial<T>, T> {
    constructor(private readonly classType: Response<T>) {}
    intercept(context: ExecutionContext, next: CallHandler): Observable<T> {
        return next.handle().pipe(map(data => plainToClass(this.classType, data)));
    }
}