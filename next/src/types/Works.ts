export interface typeWorks {
  id: number,
  title: string,
  thumbnail: string,
  startData: string,
  endData: string,
  Github?: string,
  link: string,
  category?: [{ name: string }],
  skillsTags?: [{ name: string }],
  freeTags?: [{ name: string }],
};
