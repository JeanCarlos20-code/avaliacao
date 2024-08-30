import { PhysicalPersonInterface } from '../interface/physical-person-interface';
import { Default } from './default';

export class PhysicalPerson extends Default implements PhysicalPersonInterface {
  private constructor(
    private props: PhysicalPersonInterface,
    public id?: number,
  ) {
    super(props);

    if (!props) {
      // @ts-expect-error used for ORM
      this.props = {};
      this.id = id;
      return;
    }

    this.props.id = id;
    this.props = props;
  }

  static create(props: PhysicalPersonInterface, id?: number) {
    return new PhysicalPerson(props, id);
  }

  public set cpf(cpf: string) {
    this.props.cpf = cpf;
  }

  public get cpf(): string {
    return this.props.cpf;
  }

  public set name(name: string) {
    this.props.name = name;
  }

  public get name(): string {
    return this.props.name;
  }

  public set email(email: string) {
    this.props.email = email;
  }

  public get email(): string {
    return this.props.email;
  }

  public set password(password: string) {
    this.props.password = password;
  }

  public get password(): string {
    return this.props.password;
  }

  public set bornDate(bornDate: Date) {
    this.props.bornDate = bornDate;
  }

  public get bornDate(): Date {
    return this.props.bornDate;
  }
}
