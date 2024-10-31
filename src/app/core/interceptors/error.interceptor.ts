import { HttpInterceptorFn } from "@angular/common/http";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  // an interceptor for passing an error
  return next(req).pipe(catchError((err) => throwError(() => err.error)));
};
