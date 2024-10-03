interface IUserInfo {
  id: number;
  name: string;
  avatar: string;
}
export interface IComment {
  id: number;
  content: string;
  userInfo: IUserInfo;
  translatedContent?: string;
}

export enum Status {
  OPEN = 'OPEN',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED'
}

export interface IPostItem {
  id: number;
  image: string;
  title: string;
  content: string;
  comments: IComment[];
  authorInfor: IUserInfo;
  translatedContent?: string;
  status: Status;
}

export interface IEventChangeTab {
  tab: string;
}

export enum Tab {
  DASHBOARD = 'dashboard',
  FEED = 'feed',
}
