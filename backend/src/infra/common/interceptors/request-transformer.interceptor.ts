import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';

interface Response<T> {
  data: T;
}

@Injectable()
export class RequestTransformInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  intercept(
    _context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    // Transform the response object
    // Mapping the response into data object
    return next.handle().pipe(map((result) => ({ data: result ?? {} })));
  }
}
