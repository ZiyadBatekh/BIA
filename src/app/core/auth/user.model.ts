export interface User {
  id: number | string;
  email: string | null;
  provider: string;
  socialId?: string | null;
  firstName: string | null;
  lastName: string | null;
  image?: FileType | null;
  role?: Role | null;
  status?: Status;
  bio: string | null;
}

export interface LoginResponseDto {
  token: string;
  refreshToken: string;
  tokenExpires: number;
  user: User;
}

interface FileType{
	id:string;
	path:string | null;
}

interface Role{
	id:number | string;
	name:string;
}

interface Status{
	id:number | string;
	name: string;
}