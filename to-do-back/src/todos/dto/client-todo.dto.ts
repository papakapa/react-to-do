export class ClientTodoDto {
  readonly title: string;
  readonly group: string;

  constructor(partial: Partial<ClientTodoDto>) {
    Object.assign(this, partial);
  }
}
