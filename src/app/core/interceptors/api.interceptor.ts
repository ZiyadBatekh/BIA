import { HttpInterceptorFn } from "@angular/common/http";
import { environment } from "../../../environments/environment.development";

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  // an interceptor for passing the root http for any request
  const apiReq = req.clone({ url: environment.api.url });
  return next(apiReq);
};
