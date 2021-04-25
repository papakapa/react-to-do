export class ClientTodoDto {
  readonly title: string;
  readonly group: string;
  readonly completed: boolean;
  readonly time: string;

  constructor(partial: Partial<ClientTodoDto>) {
    Object.assign(this, partial);
  }
}
