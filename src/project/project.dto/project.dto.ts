export class ProjectDto {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly tags: string;
  readonly logo: string;
  readonly dateStart: Date;
  readonly dateEnd: Date;
  readonly participants: number[];
}
